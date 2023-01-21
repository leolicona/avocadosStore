import React, { Fragment, useState, useEffect } from "react";
import { useRouter } from "next/router";

 const Product = ({}) => {
    const { query: { productId}} = useRouter();
    const [avo, setAvo] = useState([])
   

    useEffect(() => {
        window
            .fetch(`/api/avo/${productId}`)
            .then((response) =>response.json())
            .then(({product}) => {
                setAvo(product)
            }) 
            
    }, [productId]);
    return ( 
        <Fragment>
            <p>{avo.name}</p>
        </Fragment>
     );
 }
  
 export default Product;