import React, {useState} from "react";
import './TabItem.css'

const TabItem = ({text, isDisabled}) => {
    const [isActive, setActive] = useState(false)
let className = 'active'
    if(isActive){
        className+='Now'
    }
    return (
        <div className="textEl">
            <button disabled={isDisabled} className={className} onClick={()=>setActive(!isActive)}>{text}</button>
        </div>

    )
}

export default TabItem