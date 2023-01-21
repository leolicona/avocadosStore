import React, {useEffect, useState } from "react";
import { NavBar } from "../UI-Library/organisms/navbar/navbar";


 const Home = ({}) => {
    const [productList, setProductList] = useState<TProduct[]>([]);

    useEffect(() => {
        window
            .fetch('./api/avo')
            .then((response) => response.json())
            .then(({data, length}) => {
                setProductList(data)
            })
         
      
    }, [])


    return ( 
       <>
            <NavBar/>
            <div>
            {productList.map(product => (
                <div>{product.name}</div>
            ))}
            </div>
        </>
     );
 }
  
 export default Home;