import React from 'react'

function profiledata({name, email}) {
  return (
    <div className='Profile__card'>
        <h1>{name}</h1>
        <h1>{email}</h1>
    </div>
  )
}

export default profiledata