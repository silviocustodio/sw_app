import axios from 'axios';


const ROOT_URL = 'https://swapi.co/api/starships/';


export const FETCH_SWAPI = 'FETCH_SWAPI';


export function fetchSwapi() {
    const url = `${ROOT_URL}`;
  
    return dispatch => {
        axios.get(url)
            .then(response=> { 
                dispatch([ { type: FETCH_SWAPI, payload: response.data.results }])})


    }

   
}
