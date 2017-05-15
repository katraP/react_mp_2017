import {getCategory} from '../utils' ;

const initialState = {
  categories: [],
  categoryCounter: 0,
  categoriesNumber: 0,
  completedCategories: 0,
  activeCategoryData: {
    category: {
      tasks: null,
    },
    parent: {},
  },
}

export default function categoriesReducer(state = initialState, action) {
  const categories = state.categories.slice(0);
  let completedCategories = state.completedCategories;
  switch (action.type) {
    case 'ADD_NEW_CATEGORY':
      categories.unshift(action.payload.category);
      return {
        ...state,
        categories,
        categoryCounter: action.payload.counter,
        categoriesNumber: action.payload.counter,
        completedCategories: ++completedCategories,
      };

    case 'GET_CATEGORY':
      const activeCategoryData = getCategory(action.payload, categories);
      return {
        ...state,
        activeCategoryData,
      };

    case 'ADD_SUBCATEGORY':
      const currentCategory = getCategory(action.payload.category, categories).category;
      currentCategory.subCategories.unshift(
        {
          id: `${currentCategory.id}.${currentCategory.subCategories.length + 1}`,
          isActive: false,
          isDone: true,
          title: action.payload.title,
          subCategories: [],
          tasks: [],
        },
      );

      return {
        ...state,
        activeCategoryData,
        categoriesNumber: ++completedCategories,
        completedCategories,
      };

    case 'DEL_CATEGORY':
      const categoryData = getCategory(action.payload.category, categories);
      const category = categoryData.category;
      const parentCategory = categoryData.parent;

      const categoryPositionInDataArray = parentCategory.indexOf(category);

      parentCategory.splice(categoryPositionInDataArray, 1);

      return {
        ...state,
        categories,
      };

    case 'EDIT_CATEGORY':
      const editedCategory = getCategory(action.payload.category, categories);
      editedCategory.category.title = action.payload.title;
      return {
        ...state,
        categories,
      };

    case 'ADD_TASK':
      const taskCategory = getCategory(action.payload.categoryId, categories).category;

      if (taskCategory.isDone) {
        taskCategory.isDone = false;
        completedCategories--;
      }
      taskCategory.tasks.unshift(
        {
          id: (taskCategory.tasks.length + 1).toString(),
          isDone: false,
          title: action.payload.value,
          description: '',
        },
      );

      return {
        ...state,
        categories,
        completedCategories,
      };


    case 'EDIT_TASK':
      const editTaskCategory = getCategory(action.payload.categoryParam, categories).category;
      let editedTask = editTaskCategory.tasks.indexOf(action.payload.task);
      editTaskCategory.tasks[editedTask] = {
        ...editTaskCategory.tasks[editedTask],
        title: action.payload.data.title,
        description: action.payload.data.description,
        isDone: action.payload.data.isDone,
      };

      const oldCategoryStatus = editTaskCategory.isDone;
      const newCategoryStatus = !editTaskCategory.tasks.some(item => !item.isDone);
      if (oldCategoryStatus !== newCategoryStatus) {

        if (newCategoryStatus) {
          editTaskCategory.isDone = true;
          completedCategories++;
        } else if (oldCategoryStatus) {
          editTaskCategory.isDone = false;
          completedCategories--;
        }
      }

      return {
        ...state,
        categories,
        completedCategories,
      }

    default:
      return state;
  }
}
