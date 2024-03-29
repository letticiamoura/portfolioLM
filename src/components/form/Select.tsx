
type selects = {
    name: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ name, onChange }: selects) => {
  
    const categories = [
      { id: 2, value: "Dica" },
      { id: 3, value: "Dúvida" },
      { id: 4, value: "Interesse" }
    ]

  return (

    <div>

      <select
        name={name}
        id={name}
        onChange={onChange}
        className="opacity-80 text-opacity-80 text-slate-blue w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw] p-2 border-none outline-none rounded-md relative" 
      >

        <option>Selecione uma opção: </option>
        {categories.map( (categories: any) => (
          <option value={categories.value} key={categories.id}> {categories.value} </option>
        ))}
      </select>

    </div>
    
  )
}

export default Select;