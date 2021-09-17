import React from "react";
import {useShoppingCart} from 'use-shopping-cart';

function Success(){
    const {ClearCart} = useShoppingCart();
    React.useEffect(()=>{
        ClearCart();
    }, [ClearCart])
    return <h1>Success on purchase!</h1>
}

export default Success;