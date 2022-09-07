import React from 'react'

const Button = ({ styles, value, svg }) => {
  return (
    <button type="button" className={`flex align-items-center py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
      {value}<img src={svg} alt={value} className="pl-3"/> 
    </button>
  )
}

export default Button