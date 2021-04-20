import React from "react";
import TabItem from "./TabItem";
import './TabWrapper.css'

const TabWrapper = () => {
    return (
        <div className='tabWrapper'>
            <TabItem text="Job Focus"/>
            <TabItem text="Soft Skills"/>
            <TabItem text="Technical Skills"/>
            <TabItem text="Functional Expertise"/>
            <TabItem text="Domain Expertise" isDisabled={true}/>
            <TabItem text="Patent Expertise"/>
            <TabItem text="Personal Expertise"/>
            <TabItem text="Hard Expertise"/>
            <TabItem text="Domain Expertise"/>
            <TabItem text="Class Expertise"/>
            <TabItem text="Domain Expertise"/>
            <TabItem text="Luck Factor"/>
        </div>
    )
}

export default TabWrapper