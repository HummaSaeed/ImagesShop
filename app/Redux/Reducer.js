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
    memoriese: [  {
        id: 1,
        image: Author1,
        email: 'newpakistan@gmail.com',
        phoneno: 35376437,
        MemoryName:'Birthday Party',
        Date: 'Decmeber 26, 2022',
        Location:'Islmabad pakistan punjab',
        Description:'This was my 20th birday, we celebrate it in Duabi, was an amainzing time',

    },
    {
        id: 3,
        image: miniimage,
        email: 'newpakistan@gmail.com',
        phoneno: 35376437,
        MemoryName:'Birthday Party',
        Date: 'Decmeber 26, 2022',
        Location:'Islmabad pakistan punjab',
        Description:'This was my 20th birday was an amainzing time',

    },
    {
        id: 2,
        image:mainimage,
        email: 'newpakistan@gmail.com',
        phoneno: 35376437,
        MemoryName:'Birthday Party',
          Date: 'Decmeber 26, 2022',
        Location:'Islmabad pakistan punjab',
        Description:'This was my 20th birday, we celebrate it in Duabi, was an amainzing time',

    },
    {
        id: 4,
        image: Author1,
        email: 'newpakistan@gmail.com',
        phoneno: 35376437,
        MemoryName:'Birthday Party',
          Date: 'Decmeber 26, 2022',
        Location:'Islmabad pakistan punjab',
        Description:'This was my 20th birday, we celebrate it in Duabi, was an amainzing time',

    },
    {
        id: 5,
        image: Author2,
        email: 'newpakistan@gmail.com',
        phoneno: 35376437,
        MemoryName:'Family Time',
          Date: 'Decmeber 26, 2022',
        Location:'Islmabad pakistan punjab',
        Description:'This was my 20th birday, we celebrate it in Duabi, was an amainzing time',

    },
    {
        id: 6,
        image: Background_Image,
        email: 'newpakistan@gmail.com',
        phoneno: 35376437,
        MemoryName:'Family Time',
          Date: 'Decmeber 26, 2022',
        Location:'Islmabad pakistan punjab',
        Description:'This was my 20th birday, we celebrate it in Duabi, was an amainzing time',

    },
    {
        id: 7,
        image: logo,
        email: 'newpakistan@gmail.com',
        phoneno: 35376437,
        MemoryName:'Family Time',
          Date: 'Decmeber 26, 2022',
        Location:'Islmabad pakistan punjab',
        Description:'This was my 20th birday, we celebrate it in Duabi, was an amainzing time',

    },
    {
        id: 8,
        image: M1,
        email: 'newpakistan@gmail.com',
        phoneno: 35376437,
        MemoryName:'Family Time',
          Date: 'Decmeber 26, 2022',
        Location:'Islmabad pakistan punjab',
        Description:'This was my 20th birday, we celebrate it in Duabi, was an amainzing time',

    },
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
            // case REMOVE_MEMORY : 
            // return {... state, memoriese : state.memoriese.filter((event) => parseInt(event.id) !== parseInt(action.payload))} 
      
    

      

        default:

            return state
    }
}


export default Reducer;

