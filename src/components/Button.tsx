import React from "react"

interface ButtonCustom extends React.SVGProps<SVGSVGElement>{
  label: string
  iconUrl: string
}

const Button: React.FC<ButtonCustom> = ({label, iconUrl}) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat 
    text-lg font-medium leading-none bg-coral-red rounded-full text-white border-coral-red transition-all
     duration-300 ease-out hover:border-coral-red hover:bg-white hover:text-coral-red">
      {label}
      <img src={iconUrl} alt="arrow right icon" className="ml-2 rounded-full w-5 h-5"/>
    </button>
  )
}

export default Button
