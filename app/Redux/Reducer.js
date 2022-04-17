import { ADD_MEMORY,REMOVE_MEMORY } from './actions'
import logo from '../Components/icons/logo.png'
import miniimage from '../Components/icons/miniimage.jpeg'
import mainimage from '../Components/icons/mainimage.jpg'
import Author1 from '../../assets/Author1.jpeg'
import Author2 from '../../assets/Author2.jpeg'
import Background_Image from '../../assets/Background_Image.jpeg'

import M1 from '../../assets/M1.png'
const inittialstate = {
    //{ category: 'empty', productname: 'empty', price: 'empty', quantity: 'empty', discription: 'empty'}
    memoriese: [ 
],

}

function Reducer(state = inittialstate, action) {
 
    switch (action.type) {

        case ADD_MEMORY:
            {
                return {
                    ...state,
                    memoriese: [action.payload, ...state.memoriese],
                  };

            }
            case REMOVE_MEMORY : 
            return {... state,   memoriese: [state.memoriese.filter(
                (memoriese) => memoriese.id != action.payload
              )],} 

        default:

            return state
    }
}


export default Reducer;

