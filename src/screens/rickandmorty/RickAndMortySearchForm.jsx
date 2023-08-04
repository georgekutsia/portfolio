import React from 'react'
import { useForm } from 'react-hook-form'

function RickAndMortySearchForm({onSearch}) {
  const {handleSubmit, register, } = useForm()
  const doOnSubmit = (data) => {
    let stringFilters = ""
    for(const key in data){
      if(Object.hasOwnProperty.call(data, key)){
        const value = data[key]
        stringFilters += `&${key}=${value}`
      }
    }
    onSearch(1, stringFilters);
  };
  return (
    <form onSubmit={handleSubmit(doOnSubmit)}>
    {/* <select {...register("status")}>
      <option value="alive">Alive</option>
      <option value="dead">Dead</option>
      <option value="unknown">Unknown</option>
    </select>
      <input type="text" {...register("name")} />
      <button>submit</button> */}
    </form>
  )
}

export default RickAndMortySearchForm