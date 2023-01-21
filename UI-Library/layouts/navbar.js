import React, { Fragment } from "react";
import  Link  from "next/link"

const NavBar = ({}) => {
    return ( 
        <Fragment>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/about">Home</Link>
            </nav>
        </Fragment>
     );
}
 
export {NavBar};