import { ADD_MEMORY,REMOVE_MEMORY,ADD_NAME } from './actions'
import logo from '../Components/icons/logo.png'
import miniimage from '../Components/icons/miniimage.jpeg'
import mainimage from '../Components/icons/mainimage.jpg'
import Author1 from '../../assets/Author1.jpeg'
import Author2 from '../../assets/Author2.jpeg'
import Background_Image from '../../assets/Background_Image.jpeg'

import M1 from '../../assets/M1.png'
const inittialstate = {
    //{ category: 'empty', productname: 'empty', price: 'empty', quantity: 'empty', discription: 'empty'}
    memoriese: [],
    name: ''

}

function Reducer(state = inittialstate, action) {
 
    switch (action.type) {

        case ADD_MEMORY:
            {




              
              return { 
                ...state,
                memoriese: state.memoriese.concat(action.payload)
            }}
            case ADD_NAME:
              {
  
  
  
  
                
                  return {
                      ...state,
                      name: action.payload, ...state.name,
                    };
  
              }
            case REMOVE_MEMORY : 
            return {   memoriese: [
              ...state.memoriese.slice(0, action.payload),
              ...state.memoriese.slice(action.payload + 1)
          ],}

        default:

            return state
    }
}


export default Reducer;