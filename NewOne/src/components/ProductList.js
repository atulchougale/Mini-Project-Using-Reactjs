import React from 'react'
import { useFiltercontext } from '../Context/Filter_Context';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {
    const {  filter_products , grid_view  } =useFiltercontext();

    if( grid_view ){
        return <GridView products={filter_products} />;
    }

    if( grid_view ===false){
        return <ListView products={filter_products} />;
    }
}

export default ProductList