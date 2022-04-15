import { ADD_MEMORY } from './actions'
import miniimage from '../Components/icons/logo.png'
const inittialstate = {
    //{ category: 'empty', productname: 'empty', price: 'empty', quantity: 'empty', discription: 'empty'}
    memoriese: [  {
        id: 1,
        image: miniimage,
        email: 'newpakistan@gmail.com',
        phoneno: 35376437,
        MemoryName:'',
        Date: 0,
        Location:'',
        Description:'',

    }],
   

}

function Reducer(state = inittialstate, action) {
 
    switch (action.type) {



        case ADD_MEMORY:
            {


              
                return {
                    ...state,
                    memoriese: action.payload

                }

            }
    

      

        default:

            return state
    }
}


export default Reducer;

