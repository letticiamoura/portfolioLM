
type inputs = {
    type: string,
    placeholder: string,
    name: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  
}

const Input = ( { type, placeholder, name, value, onChange }:inputs ) => {

  return (

    <div>

        <input required className="opacity-80 w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw] text-slate-blue p-2 border-none outline-none rounded-md" value={value} name={name} type={type} placeholder={placeholder} onChange={onChange}/> <br />

    </div>

  )
}

export default Input;