import React from 'react';

export const CardDrinks = ( { 
    id,
    titulo, 
    categoria, 
    instrucciones, 
    precioDrink, 
    imagen, 
    irSumando } ) => {

    const precioFinal = precioDrink.toString().substring(0,5);

    return (
       
            <div className="card mb-3" style={{ width: '15rem' }}>
            <img 
                src={imagen} 
                className="card-img-top" 
                alt={titulo} />

            <div className="card-body">
                <h5 className="card-title">{ titulo }</h5>
                <h6 className="card-subtitle mb-2 text-muted">{ categoria }</h6>
                <p className="card-text">{ instrucciones }</p>
                <p className="card-text">S/. { precioFinal }</p>
                <button 
                    onClick={ 
                            () => irSumando( 
                                    Number( precioFinal ),  
                                    { 
                                        id, precioFinal, titulo, categoria
                                    }
                                ) 
                        }
                    className="btn btn-success">
                    Añadir
                </button>
            </div>
        </div>
      
       
        
    )
}
