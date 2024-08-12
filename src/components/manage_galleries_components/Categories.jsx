import { useEffect,useState } from "react";
import { getAllCategories } from "../../../api/firebase_api";
import { updateCategoryName } from "../../../api/firebase_api";


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

const getCategories= async()=>{
  try{
   const categories = await getAllCategories()

   console.log(categories,', ',typeof(categories),'isArray:',
   Array.isArray(categories), 'categories in component');
   
   if(categories.length>0){ 
    const newCategoryList = categories.map((category, index) => {
      // console.log('category: ', category);
      return { id: index, name: category };
    });

    // await new Promise((resolve) => setTimeout(resolve, 100));
    setCategoryList(newCategoryList);
    // console.log('selected category: ',selectedCategory);
    //   console.log('category list: ',categoryList);
      categoryList.length > 0 && setSelectedCategory( categoryList[0].name);
      
    } else {
      console.log('no categories found');
      setCategoryList([]);
      setSelectedCategory('No categories found');
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

      // setCategoryList((prev)=>[...prev,{id:prev.length,name:newCategory}]);
      setSelectedCategory(newCategory);
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
  
  updateCategoryName(selectedCategory,editedCategory)
  .then((response)=>{
    console.log('and were back ..',response);
    getCategories();
  })
  .catch((error)=>{
    console.error(error);
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
            <option value={selectedCategory}>{selectedCategory}</option>
            {categoryList.map((category, index) => {
              return (
                <option key={category.id} value={category.name}>
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
