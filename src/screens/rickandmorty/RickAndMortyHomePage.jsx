import React from 'react'
import {useForm} from "react-hook-form"
import Errors1 from '../../components/forms/errors1/Errors1';
function RickAndMortyHomePage() {
  const {handleSubmit, register,watch, reset, formState:{errors}} = useForm();

const onSubmit = (infoFormulario)=>{
console.log(infoFormulario)

reset()
  }
  return (
    <div className="rickandmortyHomepage">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name
          <input
            type="text"
            {...register("Name", { required: true, minLength: 4 })}
          />
          <Errors1 error={errors.Name} />
        </label>
        {watch("Name") && (
          <label>
            Surname <input type="text" {...register("Surname")} />{" "}
            <Errors1 error={errors.Surname} />
          </label>
        )}
        {watch("Surname") && (
          <label>
            Age
            <input
              type="text"
              {...register("Age", { required: true, min: 19 })}
            />
            <Errors1 error={errors.Age} />
          </label>
        )}
        {watch("Age") && (
          <label>
            Email <input type="text" {...register("Email")} />
            <Errors1 error={errors.Email} />
          </label>
        )}
        {watch("Email") && (
          <label>
            Opciones
            <select name="" id="" {...register("sex",{required:true})}>
              <option value="male">Hombre</option>
              <option value="female">Mujer</option>
              <option value="otro">Nobinario</option>
            </select>
          </label>
        )}
        <button>send</button>
      </form>
    </div>
  );
}

export default RickAndMortyHomePage