import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

    const {userid} = useParams();

  return (
    <div className='bg-green-400 text-white p-6'>User : {userid}</div>
  )
}

export default User