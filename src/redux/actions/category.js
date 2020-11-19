const listCategories = (categories) => {
  return {
    type: "LIST_CATEGORIES",
    payload: categories,
  };
};

const deleteCategory = (category) => {
  return {
    type: "DELETE_CATEGORY",
    payload: category,
  };
};

const eachCategoryList = (category) => {
  return {
    type: "EACH_CATEGORY",
    payload: category,
  };
};
export { listCategories, deleteCategory, eachCategoryList };
