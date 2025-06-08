import React from 'react'
import { type ButtonProps } from '@/interfaces'

const Button :React.FC<ButtonProps>= ({size, shape}) => {
  return (
    <div>
        <button className={`${size} ${shape} bg-blue-700 py-3 px-5`}>
            Click me
        </button>
    </div>
  )
}

export default Button