import Navbar from "./navbar";
import { useRef } from "react";


export default function ConnectForm() {

    const nameRef = useRef();
    const emailRef = useRef();
    const schoolRef = useRef();

    function onSubmitHandler(event) {
        event.preventDefault();
        const uname = nameRef.current.value;
        const uemail = emailRef.current.value;
        const uschool = schoolRef.current.value;

        fetch('https://api.airtable.com/v0/appTH68kRKzLzFA89/CustomerInterest/', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer keyX4YJYB0MQFToGI',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fields: {
                Name: uname,
                Email: uemail,
                School: uschool
            }
        })
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
    }
    return (
      <div class="container m-auto object-center">
        <Navbar />
        <h3 class="text-center text-3xl mt-16">
          After you sumit the form, we will contact you shortly!
        </h3>

        <form class="mt-12 flex place-content-center bg-slate-300 p-6 m-4" onSubmit={onSubmitHandler}>
          <div>
            <input
              class="border-2 border-blue-900 p-4 m-4"
              type="text"
              placeholder="Name"
              id="name"
              ref={nameRef}
              required
            />
            <span class="block"></span>
            <input
              class="border-2 border-blue-900 p-4 m-4"
              type="email"
              placeholder="Email"
              id="email"
              ref={emailRef}
              required
            />
            <span class="block"></span>
            <input
              class="border-2 border-blue-900 p-4 m-4"
              type="text"
              placeholder="School Name"
              id="email"
              ref={schoolRef}
              required
            />
            <br />
            <button
              class="m-4 bg-blue-900 text-white text-sm p-4 shadow-lg shadow-slate-500 font-bold tracking-wide"
              type="submit"
            >
              Connect
            </button>
          </div>
        </form>
      </div>
    );
}