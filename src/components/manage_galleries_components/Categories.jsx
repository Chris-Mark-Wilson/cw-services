import { useEffect,useState } from "react";
import { getAllCategories } from "../../../api/firebase_api";
import { updateCategoryName } from "../../../api/firebase_api";
import { connectStorageEmulator } from "firebase/storage";


export const Categories = ({
  selectedCategory,
  setSelectedCategory,
 
}) => {

  const [categoryList,setCategoryList]=useState([]);
  const [newCategory,setNewCategory]=useState('');
  const [editedCategory,setEditedCategory]=useState('');
  const [isEdited,setIsEdited]=useState(false);
  const [isAdding,setIsAdding]=useState(false);

  useEffect(()=>{
    if(editedCategory!==''){
      setIsEdited(true);
    } else {
      setIsEdited(false);
    }

    if(newCategory!==''){
      setIsAdding(true);
    }
    else{
      setIsAdding(false);
    }
  },[editedCategory,newCategory]);



  
  
  useEffect(()=>{
    
    getCategories();
    
},[categoryList.length]);

const getCategories=async()=>{
  try{
    
    const categories = await getAllCategories()
   console.log('categories: ',categories);
   
   if(categories.length>0){ 
    // const newCategoryList = categories.map((category, index) => {
    //   // console.log('category: ', category);
    //   return { id: category.id, name: category.name };
    // });

    // await new Promise((resolve) => setTimeout(resolve, 100));
    setCategoryList(categories);
    // console.log('selected category: ',selectedCategory);
    //   console.log('category list: ',categoryList);
    console.log('selected category: ',selectedCategory);
    setSelectedCategory(categoryList[0]);
      
    } else {
      console.log('no categories found');
      setCategoryList([]);
      setSelectedCategory('');
    }
    // console.log('selected category: ',selectedCategory);
    // console.log('category list: ',categoryList);

  }
    catch(error){
       console.error(error)
  };
}



  const addNewCategory = (e) => {
    e.preventDefault();
    if(newCategory!==''){
console.log('new category:',newCategory);
      // setCategoryList((prev)=>[...prev,{id:prev.length,name:newCategory}]);
      setSelectedCategory({name:newCategory,id:0});
      setCategoryList((prev)=>[...prev,{name:newCategory,id:0}]);
      setNewCategory('');
  }

}

const deleteSelectedCategory=()=>{
  //alert this will delete the category and all its images
  // if(selectedCategory!=='No categories found'){
  //   setCategoryList((prev)=>{
  //     return prev.filter((category)=>category.name!==selectedCategory);
  //   });
  //   setSelectedCategory('No categories found');
  }

 const editSelectedCategory=(e)=>{
   e.preventDefault();
if(editedCategory!==''){
  console.log('selected Category:',selectedCategory)
  updateCategoryName(selectedCategory.name,editedCategory)
  .then((response)=>{
    
    console.log('and were back ..',response);
    setSelectedCategory(response);
    setEditedCategory('');
   setCategoryList((prev)=>{
const newList=[...prev];
return newList.map((category)=>{
  if(category.name===selectedCategory.name){
    return response;
  }
 else {return category};
})
   })
  })
  .catch((error)=>{
    console.error(error);
    alert(error);
  });
}
 }
  




  return (
    <section className="upload-categories">
      <h5>Categories</h5>
<section className='category-selection'>
      <div className="select-category">
        <label>
          Select Category:
          <select
            name="categories"
            placeholder={'select a category'}
            onChange ={(e) => setSelectedCategory(e.target.value)}
            value={selectedCategory}
          >
            {categoryList.map((category, index) => {
              return (
                <option key={category.id} value={category}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </label>
      </div>
<div className='edit-buttons'>
      <div className="add-new-category">
        <form>
        <label htmlFor='new-category' >
            Add new Category:
            </label>
            <div className='input-group'>
        <input
          type="text"
          name="new-category"
          id='new-category'
          value={newCategory}
          placeholder="enter a new category"
          onChange={(e) => setNewCategory(e.target.value)}
        />
       <button type='submit' onClick={addNewCategory} 
       className='submit-button'
       style={isAdding?{border:'1px solid red'}:{border:'1px solid black'}}>Add</button>
               </div>
        </form>
      </div>

      <div className="edit-category">
        <form>
        <label htmlFor='new-category' >
            Edit Selected Category:
            </label>
            <div className='input-group'>
        <input
          type="text"
          name="new-category"
          id='new-category'
          value={editedCategory}
          placeholder="edit category name"
          onChange={(e) => setEditedCategory(e.target.value)}
        />
            <button type='submit' onClick={editSelectedCategory}   
       className='submit-button'
       style={isEdited?{border:'1px solid red'}:{border:'1px solid black'}}>Add</button>
               </div>
      
        </form>
      </div>
</div>
      </section>

      <section className='remove-category'>
        <button onClick={getCategories}>Refresh List</button>
        <button onClick={deleteSelectedCategory}>Delete Selected Category</button>    
      </section>
    </section>
  );
};
