import React from "react";
import './Loading.css'
export default function Loading(props){
    return(
        <div className={props.children? "fundo show":"fundo"}>
            <div className="boxes">
                <div className="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

        </div>
    )
}