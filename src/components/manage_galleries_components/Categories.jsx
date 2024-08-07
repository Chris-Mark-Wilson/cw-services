import { useEffect,useState } from "react";
import { getAllCategories } from "../../../api/firebase_api";


export const Categories = ({
  selectedCategory,
  setSelectedCategory,
 
}) => {

  const [categoryList,setCategoryList]=useState([]);
  const [newCategory,setNewCategory]=useState('');

useEffect(()=>{
getCategories();
  
},[]);

const getCategories=()=>{
  getAllCategories()
  .then((categories)=>{
  //  console.log(categories,', ',typeof(categories),'isArray:',
  //  Array.isArray(categories), 'categories in component');
 
   if(categories!==""){ 
   setCategoryList((prev)=>{
     return Object.keys(categories).map((category,index)=>{
      return {id:index,name:category}});
   });
   } else {
    setCategoryList([]);
     setSelectedCategory('No categories found');
   }
 })
 
  .catch((error)=>{
       console.log(error)
  });
}



  const addNewCategory = (e) => {
    e.preventDefault();
    if(newCategory!==''){

      // setCategoryList((prev)=>[...prev,{id:prev.length,name:newCategory}]);
      setNewCategory('');
      setSelectedCategory(newCategory);
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
        
    
        <button type='submit' onClick={addNewCategory} className='submit-button'>Add</button>
        </div>
        </form>
      </div>
      </section>
      <section className='remove-category'>
        <button onClick={getCategories}>Refresh List</button>
        <button onClick={deleteSelectedCategory}>Delete Selected Category</button>    
        </section>
    </section>
  );
};
