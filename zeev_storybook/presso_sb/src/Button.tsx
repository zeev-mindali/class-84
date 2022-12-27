import React, {HTMLAttributes, ReactNode} from 'react';

//extends to send specific attributes of button element
export interface Props extends HTMLAttributes<HTMLButtonElement>{
    // provide a text for the button
    children: ReactNode; // can be Element,String,number,array,etc....
    // which variant look would you like to use
    variant: 'primary' | 'secondary'; //MUI,BS,Chakra
}

//this is a special button
export const Button  = ({children, variant='primary',...props}:Props) => {
    return (
        <button {...props} style={{  //css,ass,css in js
            backgroundColor:variant ==='primary' ? 'blue':"gray",
            color:"white",
            //backgroundColor:"black",
            //color:"darkblue",
            border:"none",
            borderRadius: 100,
            padding: 10,
            cursor: 'pointer'
        }}>
        {children}
        </button>
    )
}
