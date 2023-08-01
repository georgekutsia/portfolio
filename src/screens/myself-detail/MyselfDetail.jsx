import React from 'react'
import { useParams } from 'react-router-dom'

function MyselfDetail() {
  const {id} = useParams()//esto recoge la id que hay en el params de las rutas
  return (
    <div>MyselfDetail</div>
  )
}

export default MyselfDetail