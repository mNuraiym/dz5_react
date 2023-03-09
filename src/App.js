import React from "react";
import { useForm } from "react-hook-form"



function App(){

    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => console.log(data);


    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("Login", {required:true, maxLength: 15})}/>
            <input type="password" {...register("Password", {required:true, minLength: 4})}/>
            <input type="submit"/>
        </form>
    )
}

export default App