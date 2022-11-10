import React from 'react'
import style from './Input.module.css'

interface inputProps {
    placeholder: string,
    name: string,
    
}

const Input = ({placeholder, name}: inputProps) => {
    return (
        <input placeholder={placeholder} name={name} className={style.input}/>
    )
}

export default Input
