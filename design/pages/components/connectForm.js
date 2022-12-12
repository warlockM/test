import Navbar from "./navbar";
import { useRef } from "react";
import Footer from "./footer";


export default function ConnectForm() {

    const nameRef = useRef();
    const emailRef = useRef();
    const schoolRef = useRef();

    function onSubmitHandler(event) {
        event.preventDefault();
        const uname = nameRef.current.value;
        const uemail = emailRef.current.value;
        const uschool = schoolRef.current.value;

        fetch('https://api.airtable.com/v0/{appTH68kRKzLzFA89}/CustomerInterest/', {
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

    let content =
      "Thank you for your interest in our services. We will contact you shortly."

    document.getElementById("response").innerHTML = content;
    }
    return (
      <div>
        <Navbar />
        <h3 class="text-center text-3xl m-16" id="response">
          After you sumit the form, we will contact you shortly!
        </h3>
        <div class="sm:grid sm:grid-cols-1 md:grid md:grid-cols-2">
          <form onSubmit={onSubmitHandler}>
            <div class="flex flex-col">
            <input
              class="border-2 border-blue-900 p-4 m-4 rounded-lg"
              type="text"
              placeholder="Name"
              id="name"
              ref={nameRef}
              required
            />
            <input
              class="border-2 border-blue-900 p-4 m-4 rounded-lg"
              type="email"
              placeholder="Email"
              id="email"
              ref={emailRef}
              required
            />
            <input
              class="border-2 border-blue-900 p-4 m-4 rounded-lg"
              type="text"
              placeholder="School Name"
              id="email"
              ref={schoolRef}
              required
            />
            
            <button class="m-4 bg-blue-900 text-white text-sm p-4 pr-7 pl-7 shadow-lg shadow-slate-500 font-bold tracking-wide rounded-lg">
              Submit
            </button>
            </div>
          </form>
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/customer-service-3483600-2912017.png" />
        </div>
        <Footer />
      </div>
    );
}