import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from "../style";
import Button from './Button';
import { msgArrow, email, mobilePhone, messenger } from '../assets';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5ya8879', 'template_2ktdhph', form.current, 't5xuf4ECJo5noJ-gh')
    e.target.reset()
    notify()
  };

  const notify = () => {
    toast.success('Message sent successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  };

  return(
    <section id="contact" className={ `${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <h1 className="font-poppins font-semibold text-white text-[48px] justify-center">
          Contact Me
      </h1>

      <div className="flex justify-center grid sm:grid-cols-3 grid-cols-1 sm:gap-44 gap-0">
        <div className="flex flex-col items-center">
          <div className="flex font-poppins font-normal text-[22px] text-white ss:leading-[100px] leading-[75px]">
            Contacts
          </div>
          <div className="flex justify-center items-center grid grid-rows-3 gap-y-8">
              <div className={`flex flex-col items-center justify-center p-6 rounded-[20px] feature-card`}>
                <img src={email} alt="email" className="w-[26px] h-[20px]"/>
                <h4 className="font-poppins font-semibold text-[18px] leading-[32px] text-white">Email</h4>
                <p className="font-poppins font-normal text-[14px] leading-[24px] text-dimWhite">pasionjp10@gmail.com</p>
              </div>
              <div className={`flex flex-col items-center justify-center p-6 rounded-[20px] feature-card`}>
                <img src={mobilePhone} alt="email" className="w-[30px] h-[30px]"/>
                <h4 className="font-poppins font-semibold text-[18px] leading-[32px] text-white">Phone</h4>
                <p className="font-poppins font-normal text-[14px] leading-[24px] text-dimWhite">+63 966-417-3227</p>
              </div>
              <div className={`flex flex-col items-center justify-center p-6 rounded-[20px] feature-card`}>
                <img src={messenger} alt="email" className="w-[30px] h-[30px]"/>
                <h4 className="font-poppins font-semibold text-[18px] leading-[32px] text-white">Messenger</h4>
                <p className="font-poppins font-normal text-[14px] leading-[24px] text-dimWhite">@johnpaulfp </p>
              </div>
          </div>
        </div>
        <div className="flex flex-col justify-around col-span-2">
          <div className="flex justify-center items-center font-poppins font-normal text-[22px] text-white ss:leading-[100px] leading-[75px]">
            Send me a message now
          </div>
          <div className="flex flex-col w-[100%]">
            <form ref={form} onSubmit={sendEmail} action="" className="contact__form">
              <div className="contact__form-div">
                <label htmlFor="" className="contact__form-tag font-poppins font-normal text-[18px] text-white">Name</label>
                <input type="text" name="name" placeholder="Insert your name" className="contact__form-input font-poppins font-normal text-[14px] text-dimWhite"/>
              </div>
          
              <div className="contact__form-div">
                <label htmlFor="" className="contact__form-tag font-poppins font-normal text-[18px] text-white">Email</label>
                <input type="email" name="email" placeholder="Insert your email" className="contact__form-input font-poppins font-normal text-[14px] text-dimWhite"/>
              </div>

              <div className="contact__form-div contact__form-area">
                <label htmlFor="" className="contact__form-tag font-poppins font-normal text-[18px] text-white">Message</label>
                <textarea name="message" id="" cols="30" rows="10" placeholder="Insert your message" className="contact__form-input font-poppins font-normal text-[14px] text-dimWhite"></textarea>
              </div>
              <button type="submit">
                <Button styles="mt-1" value="Send Message" svg={msgArrow}/>
              </button>
              <ToastContainer 
                theme="dark"
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover/>
            </form>  
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact