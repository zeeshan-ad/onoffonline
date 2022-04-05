import React from 'react'
import emailjs from 'emailjs-com'

export default function Contact() {
    //emailjs
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_yx0ztt7', 'template_2ajhc9p', e.target, 'c-xKwcaHuwJG9-S7C')
            .then(res => {
                console.log(res);

            }).catch(err => console.log(err));

    };
    return (
        <>
            <div className="px-6 md:px-10 py-10 md:py-20 lg:py-34 flex flex-col justify-center">
                <h4 className='font-medium text-8xl mb-9'>Let's work together. </h4>
                <br />
                <form onSubmit={sendEmail} className="LandingForm flex flex-col items-center text-lg">
                    <h4 className='font-medium text-3xl mb-9'>thank you for reaching out to us. We'll get back to you asap!</h4>
                    <br /><br />
                    <div className="contact_form_subtitle font-light text-uppercase text-sm mb-8 ">REQUIRED</div>
                    <label>First Name <br />
                        <input type="text" placeholder="Enter first name" name='firstname' required></input>
                    </label>
                    <br />
                    <label>Last Name <br />
                        <input type="text" placeholder="Enter last name" name='lastname' required></input>
                    </label>
                    <br />
                    <label>Email Address <br />
                        <input type="text" placeholder="Enter email address" name='email' required></input>
                    </label>
                    <br />
                    <label>Organisation <br />
                        <input type="text" placeholder="Enter organisation name" name='organisation' required></input>
                    </label>
                    <br />
                    <label>HOW CAN WE HELP? <br />
                        <input type="text" placeholder="How can we help you with?" name='message' required></input>
                    </label>
                    <button
                        style={{ backgroundColor: "#f2f626", marginTop: '30px' }}
                        className="uppercase absolue px-1 py-3 bottom-0 cursor-pointer hover:-rotate-3 shadow-md "
                        type="submit"
                    >
                        get in touch
                    </button>
                </form>
            </div>

        </>

    )
}






