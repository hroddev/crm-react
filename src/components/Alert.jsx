import React from 'react'

const Alert = ({children}) => {
  return (
    <div>
      <div className="text-red-800 p-1">
        {children}
      </div>
    </div>
  )
}

export default Alert
