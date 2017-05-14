import { getCategory } from '../utils' ;

const initialState = {
    categories: [],
    categoryCounter: 0,
    categoriesNumber: 0,
    completedCategories: 0,
		activeCategoryData: {
    	category: {
    		tasks: null
			},
			parent: {}
		}
}

export default function categoriesReducer(state = initialState, action) {
	const categories = state.categories.slice(0);

	switch (action.type) {
		case 'ADD_NEW_CATEGORY':
			categories.unshift(action.payload.category);
			return {
				...state,
				categories,
				categoryCounter: action.payload.counter,
				categoriesNumber: action.payload.counter
			};

		case 'GET_CATEGORY':
			const activeCategoryData = getCategory(action.payload, categories);
			return {
				...state,
				activeCategoryData
			};

		case 'ADD_SUBCATEGORY':
			const currentCategory = getCategory(action.payload.category, categories).category;
			currentCategory.subCategories.unshift(
				{
					id: `${currentCategory.id}.${currentCategory.subCategories.length + 1}`,
					isActive: false,
					isDone: false,
					title: action.payload.title,
					subCategories: [],
					tasks: []
				}
			);

			return {
				...state,
				activeCategoryData
			};

		case 'DEL_CATEGORY':
			const categoryData = getCategory(action.payload.category, categories);
			const category = categoryData.category;
			const parentCategory = categoryData.parent;

			const categoryPositionInDataArray =parentCategory.indexOf(category);

			parentCategory.splice(categoryPositionInDataArray, 1);

			return {
				...state,
				categories
			};

		case 'EDIT_CATEGORY':
			const editedCategory = getCategory(action.payload.category, categories);
			editedCategory.category.title = action.payload.title;
			return {
				...state,
				categories
			};

		case 'ADD_TASK':
			const taskCategory = getCategory(action.payload.categoryId, categories).category;

			taskCategory.isDone = false;
			taskCategory.tasks.unshift(
				{
					id: (taskCategory.tasks.length + 1).toString(),
					isDone: false,
					title: action.payload.value,
					description: ''
				}
			);

			return {
				...state,
				categories
			};


		default:
			return state;
	}
}
