import React from 'react'
import Navbar from './Navbar'

function Base({title, description, children}) {
  return (

<div className='main-component'>
<Navbar />
<main>
    {description}
    {children}
</main>
</div>


  )
}

export default Base