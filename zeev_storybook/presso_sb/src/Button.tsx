import React, { HTMLAttributes, ReactNode } from "react";

//extends to send specific attributes of button element
export interface Props extends HTMLAttributes<HTMLButtonElement>{ //sending a specific props to a button element
    /** Provide a text for the button (3) */
    children: ReactNode; /* can be Element,string,number,array,etc... */
    /** Which variant look would you like to use */
    variant: 'primary' | 'secondary'; //mui,bs,etc...
}

/** This is a special button !!!! */ 
//the variant will be added when we add style
export const Button = ({children,variant='primary',...props}: Props) => {
    return (
        //style when creating second story
        <button {...props} style={{  //css,sass,css in js...
            backgroundColor: variant==='primary'?"blue":"gray",
            color:"white",
            border: "none",
            borderRadius: 100,
            padding: 10,
            cursor: 'pointer'
            //for accessibility demo
            //backgroundColor: "black",
            //color:"black",
            }}> {/* props - for sending things like event (onClick), attributes, etc... */}
            {children}
        </button>
    )
}