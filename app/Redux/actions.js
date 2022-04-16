export const ADD_MEMORY = "ADD_MEMORY"
export const REMOVE_MEMORY = "REMOVE_MEMORY"

export const setMemory = memoriese => dispatch => {

    dispatch({
        type: ADD_MEMORY,
        payload: {
            memoriese: memoriese,
         
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