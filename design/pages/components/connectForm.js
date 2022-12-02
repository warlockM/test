import Navbar from "./navbar";
import { useState, useRef } from "react";


export default function ConnectForm() {

    const nameRef = useRef();
    const emailRef = useRef();


    function onSubmitHandler(event) {
        event.preventDefault();
        const uname = nameRef.current.value;
        const uemail = emailRef.current.value;
        alert(uname, uemail);
    }
    return (
      <div class="container m-auto object-center">
        <Navbar/>
        <h3 class = "text-center text-3xl mt-16">After you sumit the form, we will contact you shortly!</h3>
        
        <form class="mt-12">
        <div class="flex place-content-center bg-slate-300 p-6 m-4">
          <input class="border-2 border-blue-900 p-4 m-4" type="text" placeholder="Name" ref={nameRef} required/>
          <br/>
          <input class="border-2 border-blue-900 p-4 m-4" type="email" placeholder="Email" ref={emailRef} required />
          <br/>
          <button class = "m-4 bg-blue-900 text-white text-sm p-4 shadow-lg shadow-slate-500 font-bold tracking-wide" 
          type="submit" onSubmit={onSubmitHandler}>
            Connect
          </button>
          </div>
        </form>
        
      </div>
    );
}