import React from "react"

type Props = {
  children : React.ReactNode
}

const Htext = ({children}: Props) => {
  return (
    <h1 className=" font-montserrat text-2xl sm:text-3xl font-bold basis-3/5">{children}</h1>
  )
}

export default Htext