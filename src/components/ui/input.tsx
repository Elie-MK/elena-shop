import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    title: string;
  }

const Input:React.FC<InputProps> = ({title, ...props}) => {
  return (
    <>
        <h1 className="text-lg font-semibold my-2">{title}</h1>
        <input {...props} className="py-3 px-3 rounded-lg w-80 border ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-blue-600 focus:shadow-lg text-lg"  placeholder={title}/>
    </>
  )
}

export default Input