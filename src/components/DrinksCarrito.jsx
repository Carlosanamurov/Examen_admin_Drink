import React from 'react';

export const DrinkCarrito = ({ id, precioFinal, titulo, categoria }) => {
    return (
        <tr>
            <td>{ id  }</td>
            <td>{ precioFinal }</td>
            <td>{ titulo }</td>
            <td>{ categoria}</td>
        </tr>
    )
}
