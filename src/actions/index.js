import { ADD_NEW_CATEGORY, GET_CATEGORY, ADD_SUBCATEGORY, DEL_CATEGORY, EDIT_CATEGORY, ADD_TASK } from '../constants';

export function addNewCategory(payload) {
	return {
		type: ADD_NEW_CATEGORY,
		payload
	}
}

export function getCategory(payload) {
	return {
		type: GET_CATEGORY,
		payload
	}
}

export function addSubCategory(payload) {
	return {
		type: ADD_SUBCATEGORY,
		payload
	}
}

export function delCategory(payload) {
	return {
		type: DEL_CATEGORY,
		payload
	}
}

export function editCategory(payload) {
	return {
		type: EDIT_CATEGORY,
		payload
	}
}

export function addTask(payload) {
	return {
		type: ADD_TASK,
		payload
	}
}