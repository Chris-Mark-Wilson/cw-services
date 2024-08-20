import { useEffect,useState } from "react";
import { deleteCategory, getAllCategories } from "../../../api/firebase_api";
import { updateCategoryName } from "../../../api/firebase_api";

import { useModal} from "../../context/ModalContext";

export const Categories = ({
  selectedCategory,
  setSelectedCategory,
  reload,setReload
 
}) => {

  const [categoryList,setCategoryList]=useState([]);

  const [editedCategory,setEditedCategory]=useState('');
  const [isEdited,setIsEdited]=useState(false);
  const [isAdding,setIsAdding]=useState(false);

  const {showModalDelete,showModalComplete}=useModal();

  useEffect(()=>{
    if(editedCategory!==''){
      setIsEdited(true);
    } else {
      setIsEdited(false);
    }

 
  },[editedCategory]);



  
  
  useEffect(()=>{
    getCategories();
    
  },[categoryList.length,reload]);
  
  const getCategories=async()=>{
    try{
      
    
    const categories = await getAllCategories()

   
   if(categories.length>0){ 
console.log(categories);
    setCategoryList(categories);
   
    setSelectedCategory(categoryList[0]);
      
    } else {
 
      setCategoryList([]);
      // setSelectedCategory('');
    }


  }
    catch(error){
       console.error(error)
  };
}





const deleteSelectedCategory=async()=>{
  try{
console.log('selected category in delete category',selectedCategory);
await deleteCategory(selectedCategory)


setTimeout(()=>{
  setReload((prev)=>!prev);
  showModalComplete('Category Deleted','Category has been deleted successfully');
},1000);
  }
  catch(error){
    console.error(error);
    alert(error);
  }
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
  



//dont forget value element must be a string
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
            onChange ={(e) => {console.log(JSON.parse(e.target.value));setSelectedCategory(JSON.parse(e.target.value))}}
            value={JSON.stringify(selectedCategory)}
          >
            {categoryList.map((category, index) => {
              return (
                <option key={category.id} value={JSON.stringify(category)}>
                  {category.name}
                </option>
    
                
              );
            })}
          </select>
        </label>
      </div>
<div className='edit-buttons'>
     

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
       style={isEdited?{border:'1px solid red'}:{border:'1px solid black'}}>Change</button>
               </div>
      
        </form>
      </div>
</div>
      </section>

      <section className='remove-category'>
        <button onClick={getCategories}>Refresh List</button>
        <button onClick={()=>showModalDelete('Delete Selected Category','Are you sure?, this will delete the entire category and its contents.',deleteSelectedCategory)}>Delete Selected Category</button>    
      </section>
    </section>
  );
};
