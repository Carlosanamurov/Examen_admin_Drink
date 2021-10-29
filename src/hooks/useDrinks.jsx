import { useState, useEffect } from 'react';

import { api } from '../config/apiAxios';

export const useDrinks = () => {

    const [ state, setSate ] = useState([]);

    const obtenerTodoDrink = async () => {

        const respuesta = await api.get('/search.php?f=a');

        if ( respuesta.status === 200 ) {
            setSate( respuesta.data.drinks );
        }

    }

    useEffect(() => {
        obtenerTodoDrink();
    }, []);

    return { state };
    
}
