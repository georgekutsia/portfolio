import React from 'react'
import { useForm } from 'react-hook-form'

export default function ListComments({data, onComment}) {
 const {handleSubmit, register} = useForm()
 const doSubmit = ({comment})=>{
  onComment(comment, data.index)
 }
  return (
    <div>
    {data.comments.length === 0 && <h1>Sin comentario</h1>}
      <ul>
        {data.comments.map((item, index) => <li key={index}>{item.text}</li>)}
      </ul>
      <form  onSubmit={handleSubmit(doSubmit)}>
        <input type="text"{...register("comment")} />
        <button>Añadir comentario</button>
      </form>
    </div>
  )
}
