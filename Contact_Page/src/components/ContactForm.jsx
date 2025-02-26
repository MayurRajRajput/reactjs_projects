import Button from "./Button"
import {MdMessage} from "react-icons/md"
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";
const ContactForm = () => {
 const [name, setName] = useState("")
 const [email, setEmail] = useState("")
 const [text, setText] = useState("")
const onSubmit = (event)=>{
  event.preventDefault();
  setName(event.target[0].value)
  setEmail(event.target[1].value)
  setText(event.target[2].value)
  console.log("name",event.target[0].value);
  console.log("email",event.target[1].value);
console.log("text",event.target[2].value);
}

  return (
    <div className="flex max-w-[1000px] items-end mt-[40px] my-0 mx-auto">
      <div className="flex flex-col pb-[20px] gap-[24px]"> 
        <div className="flex gap-[32px]">
        <Button  text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
        <Button   text="VIA CALL"  icon={<FaPhoneAlt fontSize="24px" />}/>
        </div>
        <Button isOuline={true} text="VIA EMAIL FORM" icon={<HiMail fontSize="24px" />}/>
        <form onSubmit={onSubmit}  className="flex flex-col gap-[20px]">
          <div className="flex relative w-full flex-col">
          <label className="absolute font-semibold text-[14px] top-[-12px] left-[10px] bg-white py-0 px-[10px]" htmlFor="name">Name</label>
          <input className="h-[40px] py-0 px-[8px] border border-black" type="text" name="name" />
          </div>
          <div className="flex relative w-full flex-col">
          <label className="absolute font-semibold text-[14px] top-[-12px] left-[10px] bg-white py-0 px-[10px]" htmlFor="email">E-Mail</label>
          <input className="h-[40px] py-0 px-[8px] border border-black" type="email" name="email" />
          </div>
          <div className="flex relative w-full flex-col">
          <label className="absolute font-semibold text-[14px] top-[-12px] left-[10px] bg-white py-0 px-[10px]" htmlFor="email">Text</label>
          <textarea rows="8" className=" h-[120px] p-[8px] border border-black" type="email" name="email" />
          </div>
          <div className="flex justify-end">
      <Button text="SUBMIT" />
          </div>
          <div>{name+" "+email+" "+text}</div>
        </form>
      </div>
      <div className=""> 
        <img src="/images/Contact.svg" alt="Contact image" />
      </div>
    </div>
  )
}

export default ContactForm
