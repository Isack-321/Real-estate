import axios from 'axios';

export const baseurl= 'https://bayut.p.rapidapi.com'



export const Fetchapi= async (url)=>{
    const {data}= await axios.get((url),{
        headers: {
            
          }
    })

    return data;
}
