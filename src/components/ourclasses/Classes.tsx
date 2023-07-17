
type Props = {
  name: string
  description? : string
  image : string
}

const Classes = ({name, description, image}: Props) => {
  const overlay = "absolute p-5 z-40 flex flex-col items-center justify-center gap-5 h-[380px] w-[400px] whitespace-normal bg-primary-500  text-center text-white opacity-0 hover:opacity-90 transition duration-500"
  return (
    <li className="cursor-pointer relative mx-5 inline-block h-[380px] w-[400px] ">
      <div className={overlay}>
        <p className="font-bold">{name}</p>
        <p className="text-sm">{description}</p>
      </div>
        <img src={image} alt={`${image}`} />
    </li>
  )
}

export default Classes