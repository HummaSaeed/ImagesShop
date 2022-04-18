export const ADD_MEMORY = "ADD_MEMORY"
export const ADD_NAME = "ADD_NAME"

export const REMOVE_MEMORY = "REMOVE_MEMORY"
export const EDIT_MEMORY = "EDIT_MEMORY"

export const setMemory = memoriese => dispatch => {

    dispatch({
        type: ADD_MEMORY,
        payload: {
            memoriese: memoriese,
         
        }
    });
}
export const setUsername = name => dispatch => {

    dispatch({
        type: ADD_NAME,
        payload: {
            name: name,
         
        }
    });
}
export const removeMemory = id => dispatch => {

    dispatch({
        type: REMOVE_MEMORY,
        payload: {
            id: id,
         
        }
    });
}
export default setMemory;