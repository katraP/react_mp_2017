export function getCategory(categoryParam, allCategories) {
  const categoriesId = categoryParam.split('.');
  const categoriesNesting = categoriesId.length - 1;
  let categoryIdPattern = '';
  let clickedCategory = allCategories;

  categoriesId.forEach((item, i)  => {
    categoryIdPattern += i > 0 ? `.${item}` : item;

    clickedCategory = clickedCategory.filter(item => {
      return item.id === categoryIdPattern;
    });

    if(i !== categoriesNesting) {
      clickedCategory = clickedCategory[0].subCategories;
    }
  });
  return clickedCategory[0];
}
