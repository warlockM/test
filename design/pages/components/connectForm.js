import Navbar from "./navbar";
import { useRef } from "react";
import Footer from "./footer";
import Button from "./button";


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
    }
    return (
      <div class="container">
        <Navbar />
        <h3 class="text-center text-3xl m-16">
          After you sumit the form, we will contact you shortly!
        </h3>
        <div class="flex place-content-center m-8 justify-center">
          <form onSubmit={onSubmitHandler}>
            <input
              class="border-2 border-blue-900 p-4 m-4 rounded-lg"
              type="text"
              placeholder="Name"
              id="name"
              ref={nameRef}
              required
            />
            <span class="block">
            <input
              class="border-2 border-blue-900 p-4 m-4 rounded-lg"
              type="email"
              placeholder="Email"
              id="email"
              ref={emailRef}
              required
            />
            </span>
            <span class="block">
            <input
              class="border-2 border-blue-900 p-4 m-4 rounded-lg"
              type="text"
              placeholder="School Name"
              id="email"
              ref={schoolRef}
              required
            />
            </span>
            
            <Button text="Connect" />
            
          </form>
          {/* <img src="https://cdni.iconscout.com/illustration/premium/thumb/customer-service-3483600-2912017.png" /> */}
        </div>
        <Footer />
      </div>
    );
}