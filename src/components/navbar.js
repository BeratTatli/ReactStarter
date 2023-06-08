

import React from 'react'

const Navbar = ()=>{
  return (
    <div className='navbar'>
      <a href='#'>Anasayfa</a>
      <a href='#'>Hakkımızda</a>
      <a href='#'>İletişim</a>
      <a href='#'>Bize Ulaşın</a>
    </div>
  )
}

export const Alt_Navbar=()=>{
    return(
        <div className='alt_navbar'></div>
    )
}


export default Navbar
