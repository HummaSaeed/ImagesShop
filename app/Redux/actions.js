export const ADD_MEMORY = "ADD_MEMORY"

export const setMemory = memoriese => dispatch => {

    dispatch({
        type: ADD_MEMORY,
        payload: {
            memoriese: memoriese,
         
        }
    });
}
export default setMemory;