export const Categories = ({
  selectedCategory,
  setSelectedCategory,
  categoryList,
  setCategoryList,
  newCategory,
  setNewCategory,
}) => {
  const addNewCategory = () => {
    //upload a new category and refresh category list, set category to new category
    // setCategory((prev)=>prompt('Enter folder name'));
  };
  const handleSelected = (e) => {
    setSelectedCategory((prev) => e.target.value);
  };
  return (
    <section className="upload-categories">
      <h5>Categories</h5>

      <div className="upload-category-list">
        <label>
          Select Category:
          <select
            name="categories"
            id="select-category"
            onChange={handleSelected}
            value={selectedCategory}
          >
            <option value="no category selected">None Selected</option>
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

      <div className="upload-new-category">
        <label className='label'>
            Add new Category
        <input
          type="text"
          id="new-category"
          value={newCategory}
          placeholder="enter a new category"
          onChange={() => setSelectedCategory((prev) => selectedCategory)}
        />
        
        </label>
        <button onClick={addNewCategory}>Add</button>
      </div>
    </section>
  );
};
