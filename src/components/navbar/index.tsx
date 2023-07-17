import Logo from '@/assets/Logo.png'
import Link from './Link'
import { SeletedPage } from '@/App'
import { Bars3Icon } from '@heroicons/react/20/solid'
import {useState} from 'react'
import ActionButton from '@/shared/ActionButton'
import { XMarkIcon } from '@heroicons/react/24/outline'


type Props = {
  isTopOfPage : boolean
  seletedPage : SeletedPage
  setSeletedPage : (value : SeletedPage )  => void
}

const Navbar = ({isTopOfPage,seletedPage, setSeletedPage}: Props) => {
  const flexBetween = "flex justify-between items-center"

  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)

  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow"

  return (
    <>
    <nav className={`${navbarBackground} ${flexBetween} py-6 z-50 fixed top-0 w-full`}>
      <div className={`${flexBetween}  w-5/6 mx-auto`}>
        <div className={`${flexBetween} w-full gap-16`} >
              {/* left-side Navbar */}
           <img src={Logo} alt="Logo" className='cursor-pointer hover:scale-90 transition duration-500 ' />

              {/* right-side Navbar */}
           <div className={`${flexBetween} w-full hidden md:flex`}>
            <div className={`${flexBetween} gap-8 text-sm`}>
              <Link 
                page='Home'
                seletedPage={seletedPage}
                setSeletedPage={setSeletedPage}              
              /> 
              <Link 
                page='Benefits'
                seletedPage={seletedPage}
                setSeletedPage={setSeletedPage}
              />
              <Link 
                page='Our Classes'
                seletedPage={seletedPage}
                setSeletedPage={setSeletedPage}
              />
              <Link 
                page='Contact Us'
                seletedPage={seletedPage}
                setSeletedPage={setSeletedPage}
              />
            </div>
            <div className={`${flexBetween} gap-8`}> 
              <p className='cursor-pointer '>Sign In</p>
              <ActionButton setSeletedPage={setSeletedPage}>Become a Member</ActionButton>
            </div>
           </div>
           <button onClick={()=> setIsMenuToggled(!isMenuToggled)} className='block md:hidden rounded-full bg-secondary-500 p-2' >
            <Bars3Icon className=' h-6 w-6 text-white' />
           </button>
         </div>
      </div> 
    </nav>
    {/* MOBILE MENU MODAL */}
    {
      isMenuToggled && (
        <div className='md:hidden fixed right-0 bottom-0 z-50 h-full w-[300px] sm:w-[420px] bg-primary-100 drop-shadow-xl'>
          {/* CLOSE BUTTON */}
          <div className='flex justify-end p-8 pr-10 sm:pr-20'>
            <button onClick={()=> setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className=' h-6 w-6 text-gray-400' />
            </button>
          </div>
       <div className='flex flex-col gap-8 ml-[33%] sm:text-xl'>
              <Link 
                page='Home'
                seletedPage={seletedPage}
                setSeletedPage={setSeletedPage}              
              /> 
              <Link 
                page='Benefits'
                seletedPage={seletedPage}
                setSeletedPage={setSeletedPage}
              />
              <Link 
                page='Our Classes'
                seletedPage={seletedPage}
                setSeletedPage={setSeletedPage}
              />
              <Link 
                page='Contact Us'
                seletedPage={seletedPage}
                setSeletedPage={setSeletedPage}
              />
       </div>
       </div>
      )
    }
    </>

  )
}

export default Navbar