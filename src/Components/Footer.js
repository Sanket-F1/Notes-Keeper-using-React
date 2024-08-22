import React from 'react' ;

const Footer = () => {
    const year = new Date().getFullYear() ;
  return (
    <div className='text-center w-full'>
      <p className='text-gray-500 font-medium '>Copyright ⓒ {year} - All Rights Reserved </p>
    </div>
  )
}

export default Footer ;
