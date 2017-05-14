export function getCategory(categoryParam, allCategories) {
  const categoriesId = categoryParam.split('.');
  const categoriesNesting = categoriesId.length - 1;
  let categoryIdPattern = '';
  let clickedCategory = allCategories;
  let parentCategory = {};

  categoriesId.forEach((item, i)  => {

    categoryIdPattern += i > 0 ? `.${item}` : item;

    clickedCategory = clickedCategory.filter(item => {
      return item.id === categoryIdPattern;
    });

    if(categoriesNesting < 1 ) {
      parentCategory = allCategories;
    }
    else if (i === categoriesNesting-1) {
      parentCategory = clickedCategory[0].subCategories;
    }
    if (i !== categoriesNesting) {
      clickedCategory = clickedCategory[0].subCategories;
    }

  });
  return {
    category: clickedCategory[0],
    parent: parentCategory
  };
}
