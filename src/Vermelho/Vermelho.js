import React from "react";
import './Vermelho.css'

export default function Vermelho(props){
    return(
        <strong className="vermelho">{props.children}</strong>
    )
}