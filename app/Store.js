import {createStore} from 'redux';

import miniimage from './Components/icons/miniimage.jpeg'
// import mainimage from '../../icons/mainimage.jpg'
export const addMemory = (newmemoryarray) =>{
 return {
     type:"ADD_MEMORY",
     payload: newmemoryarray
 }
}

const initialmemoriesewithfriends =  {
    memoriese:
    [
    {
        id: 1,
        image: miniimage,
        email: 'newpakistan@gmail.com',
        phoneno: 45376437,
        MemoryName:'',
        Date: 0,
        Location:'',
        Description:'',

    }
]}

const contactReducer =(state = initialmemoriesewithfriends, action ) =>{
    switch(action.type){
        case "ADD_MEMORY": 
        return    {memoriese : [action.payload, ...state.memoriese ]}
    

        default:
            return state;
    }
    
}
const Store = createStore(contactReducer);
export default Store;