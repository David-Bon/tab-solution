import React from "react";
import TabItem from "./TabItem";
import './TabWrapper.css'

const buttonsData = [
    {title: "Job Focus", isDisabled: false},
    {title: "Soft Skills", isDisabled: false},
    {title: "Technical Skills", isDisabled: false},
    {title: "Functional Expertise", isDisabled: false},
    {title: "Domain Expertise", isDisabled: true},
    {title: "Patent Expertise", isDisabled: false},
    {title: "Personal Expertise", isDisabled: false},
    {title: "Hard Expertise", isDisabled: false},
    {title: "Domain Expertise", isDisabled: false},
    {title: "Domain Expertise", isDisabled: false},
    {title: "Class Expertise", isDisabled: false},
    {title: "Luck Factor", isDisabled: false}
];

const TabWrapper = () => {
    return (
        <div className='tabWrapper'>
            {buttonsData.map((item, idx) => {
                return (
                    <TabItem key={idx} text={item.title} isDisabled={item.isDisabled}/>
                )
            })
            }
        </div>
    )
}

export default TabWrapper