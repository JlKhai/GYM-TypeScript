import { SeletedPage } from '@/App'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
  children : React.ReactNode
  setSeletedPage : (value: SeletedPage)=> void
}

const ActionButton = ({children , setSeletedPage}: Props) => {
  return (
    <AnchorLink
      className='rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white transition duration-500 select-none'
      href={`#${SeletedPage.ContactUs}`}
      onClick={()=>setSeletedPage(SeletedPage.ContactUs)}
    >{children}</AnchorLink>
  )
}

export default ActionButton