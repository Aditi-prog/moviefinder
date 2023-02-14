import React from 'react'
import { useParams } from 'react-router-dom'

const Moviedetail = () => {
  const {id} = useParams();
  return (
    <div>
      moviedetail{id}
    </div>
  )
}

export default Moviedetail
