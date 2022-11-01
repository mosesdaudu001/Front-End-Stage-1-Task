import React from "react";
import vector from "../Photos/Vector.png"
import i4g from "../Photos/I4G.png"

export default function Footer() {
    return (
        <div className="footer">
            <div className="zuri_logo">
                <h4>Zuri</h4>
                <img id='vector__img' className="vector__img" src={vector} alt='vector_photo'/>
                <h4>Internship</h4>
            </div>
            <p className="footer_text">HNG Internship 9 Frontend Task</p>
            <img className="i4g__img" id='i4g__img' src={i4g} alt='i4g_photo'/>
        </div>
    )
}