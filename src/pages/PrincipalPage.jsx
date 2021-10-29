import React, { useState, useEffect } from 'react';
import { CardDrinks } from '../components/CardDrinks';
import { DrinkCarrito } from '../components/DrinksCarrito';

import { useDrinks } from '../hooks/useDrinks';
 
export const PrincipalPage = () => {
    
    // Tenemos un arreglo de drinks
    const { state } = useDrinks();

    const [ drinks, setDrink ] = useState([]);
    const [ precio, setPrecio ] = useState(0.0);
    const [ carrito, setCarrito ] = useState([]);

    useEffect(() => {
        setDrink( state );
    }, [state]);

    /**
     * funcion para sumar y operar las bebidas seleccionadas
     * @param {*} precioCobrar -> precio de la bebida
     * @param {*} drinkSeleccionado -> objeto completo de la bebida
     */
    const sumarTotal = ( precioCobrar, drinkSeleccionado ) => {

        setPrecio( precio + precioCobrar );

        setCarrito([...carrito, drinkSeleccionado ]);

        setDrink ( drinks.filter( ( drink ) => drink.idDrink !== drinkSeleccionado.id ));

    }

    // JSX
    return (
        <div>
            <h1 className="mb-2">Tienda De Bebidas</h1>
          
            <div className="row">
                
                <div className="col">
                    {
                        drinks.map(( drink ) => (
                            <CardDrinks
                                key={ drink.idDrink }
                                id={ drink.idDrink }
                                titulo={ drink.strGlass }
                                categoria={ drink.strCategory }
                                instrucciones={ drink.strInstructions }
                                fecha={ drink.dateModified }
                                imagen={ drink.strDrinkThumb }
                                precioDrink={ Math.random() * 100 }
                                irSumando={ sumarTotal } />                    
                        ))
                    }
                </div>
            </div>
         

            <h1 className="mb-4 mt-4">Carrito de compras</h1>

            <table className="table mb-4">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Categoria</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        carrito.map( ( carrito ) => (
                            <DrinkCarrito
                                key={ carrito.id }
                                id={ carrito.id }
                                precioFinal={ carrito.precioFinal }
                                titulo={ carrito.titulo }
                                categoria={ carrito.categoria } />
                        ))
                    }
                </tbody>

            </table>

            <h1 
                className="mt-4" 
                style={{ float: 'right' }}>
                Precio Carrito: 
                    <span style={{ color: 'green'}}>S/. { precio }</span>
            </h1>
        </div>
    )
}
