import Logo from '@/assets/Logo.png'
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className=" bg-primary-100 py-16">
      <div className=" md:flex mx-auto w-5/6 gap-16">
        <div className="mt-16 md:mt-0 basis-1/2">
          <img src={Logo} alt="logo" />
          <p className='my-5 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, perspiciatis vero fugiat vitae exercitationem a commodi. Sequi asperiores, fugiat architecto nam minus vel! Maiores magni expedita adipisci assumenda iure dicta.</p>
          <p className='my-5 text-sm'>@Evogym All Right Reserved</p>
        </div>
        <div className="mt-16 md:mt-0 basis-1/4">
          <h4 className=' font-bold'>LINKS</h4>
           <div className='flex gap-4 mt-4'>
            <a
              href="https://m.facebook.com/khai.lek.5264"
              target="blank"
              className="cursor-pointer select-non text-3xl md:text-4x hover:text-secondary-500 hover:scale-90 transition ease-in duration-300"
            >
              <AiFillFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/jl-khai-635328278/"
              target="blank"
              className="cursor-pointer select-none text-3xl md:text-4xl hover:text-secondary-500 hover:scale-90 transition ease-in duration-300"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://github.com/JlKhai"
              target="blank"
              className="cursor-pointer select-none text-3xl md:text-4xl hover:text-secondary-500 hover:scale-90 transition ease-in duration-300"
            >
              <AiFillGithub />
            </a>
           </div>

        </div>
        <div className="mt-16 md:mt-0 basis-1/4">
          <h4 className=' font-bold'>Contact Us</h4>      
          <p className=' mt-5 text-sm'>(00959791783417)</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer