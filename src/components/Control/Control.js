import React from 'react'

const Control = ({click,label,className}) => {
  return (
    <div className="Control">
        <button className={className} onClick={click}>{label}</button>
    </div>
  )
}

export default Control