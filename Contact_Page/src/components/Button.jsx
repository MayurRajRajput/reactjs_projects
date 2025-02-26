import { MdMessage } from "react-icons/md"

const Button = (props) => {
   const {icon,text,isOuline,...rest} =props
  return (
    <button {...rest} className={!isOuline?"px-[18px] flex items-center cursor-pointer gap-[8px] py-[10px] justify-center  min-w-[220px] rounded-[5px]  bg-black text-white":"px-[18px] flex items-center border border-black gap-[8px] py-[10px] cursor-pointer justify-center  min-w-[220px] w-full rounded-[5px] bg-white text-black"}>
   
      {icon }
      {text}
    </button>
  )
}

export default Button
