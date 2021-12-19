import axios from 'axios';

export const baseurl= 'https://bayut.p.rapidapi.com'



export const Fetchapi= async (url)=>{
    const {data}= await axios.get((url),{
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'd1ce00edd0msh4e691be2ceb7985p1a4120jsn7d158c6ecf1d'
          }
    })

    return data;
}
/* headers: {
    'x-rapidapi-host': 'bayut.p.rapidapi.com',
    'x-rapidapi-key': 'd1ce00edd0msh4e691be2ceb7985p1a4120jsn7d158c6ecf1d'
  } */