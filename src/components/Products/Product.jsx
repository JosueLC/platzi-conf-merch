import React from 'react';

function Product({ product }) {
    return (
        <div className="Products-item">
            <img src={product.thumbnail} alt={product.title} />
            <div className="Product-item-info">
                <h2>{product.title}</h2>
                <p>$<span>{product.price}</span></p>
                <p>{product.description}</p>
            </div>
            <button type="button">Comprar</button>
        </div>
    );
}
export default Product;