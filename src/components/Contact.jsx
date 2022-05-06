import React from 'react';
import phone from '../phone/Fill 1.png';
import mail from '../mail/Combined Shape.png';

function Contact() {
  return (
    <div>
        <h1 className="text-center font-bold text-3xl mb-8">Get in touch<span className="text-blue-500">.</span></h1>
        <div class="flex justify-center items-center mb-5">
            <img className="mr-4" src={phone} alt="phone"/>
            <h1>+234 810 101 9892</h1>
        </div>
        <div class="flex justify-center items-center mb-5">
            <img className="ml-4" src={mail} alt="mail"/>
            <a href="mailto: georgeoluolufemi@gmail.com" method="post" className="text-white text-center font-semibold text-xl bg-blue-600 px-6 py-2 rounded-xl hover:scale-110 ml-4 transition-all hover:bg-blue-500">Mail me</a>
        </div>
    </div>
  )
}

export default Contact;