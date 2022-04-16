import { ADD_MEMORY,REMOVE_MEMORY } from './actions'
import logo from '../Components/icons/logo.png'
import miniimage from '../Components/icons/miniimage.jpeg'
import mainimage from '../Components/icons/mainimage.jpg'
import Author1 from '../../assets/Author1.jpeg'
import Author2 from '../../assets/Author2.jpeg'
import Background_Image from '../../assets/Background_Image.jpeg'
import Book1Cover from '../../assets/Book1Cover.jpg'
import Book2Cover from '../../assets/Book2Cover.jpeg'
import data_image from '../../assets/data_image.png'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'
import img5 from '../../assets/img5.png'
import img6 from '../../assets/img6.png'
import img7 from '../../assets/img7.png'
import img8 from '../../assets/img8.png'
import M1 from '../../assets/M1.png'
import M2 from '../../assets/M2.png'
import M3 from '../../assets/M3.png'
import user1 from '../../assets/user1.jpeg'
import user2 from '../../assets/user2.jpeg'

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
                    memoriese: action.payload

                }

            }
            case REMOVE_MEMORY : 
            return {... state, memoriese : state.memoriese.filter((event) => parseInt(event.id) !== parseInt(action.payload))} 
      
    

      

        default:

            return state
    }
}


export default Reducer;

