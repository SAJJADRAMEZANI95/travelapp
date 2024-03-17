
import React from 'react'
import Image from 'next/image'
type ButtonProps={
    type:'button'|'submit';
    varient:'btn_dark_green';
    title:string;
    icon?:string
}

const Button = ({type , varient , title , icon}:ButtonProps) => {
  return (
    <button type={type} className={`flexCenter border rounded-full gap-3 ${varient} `}>
        {icon && <Image src={icon} alt={title} width={24} height={24}/>}
        <label className='bold-16 whitespace-nowrap'>{title}</label>
    </button>
  )
}

export default Button
