import React from 'react';
import Products from '../components/Products/index';
import products from '../initialState';
import '../styles/components/Products.css';


function Home () {
     const values = products();
    return (
        <Products products={values} />
    );
}

export default Home;