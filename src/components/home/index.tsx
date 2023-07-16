import { SeletedPage } from "@/App"
import HomePageText from "@/assets/HomePageText.png"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import SponsorFortune from "@/assets/SponsorFortune.png"
import ActionButton from "@/shared/ActionButton"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { motion } from "framer-motion"

type Props = {
  setSeletedPage : (value : SeletedPage) => void
}

const Home = ({setSeletedPage}: Props) => {
  return (
    <section id="home">
      {/* IMAGE & MAIN HEADER */}
      <motion.div className="mt-32 md:flex w-5/6 mx-auto justify-center items-center"
      onViewportEnter={()=>setSeletedPage(SeletedPage.Home)}
      >
        {/* Main Header */}
        <div className="z-10 md:basis-3/5">
          {/* Heading */}
          <motion.div
          initial = "hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
          transition={{duration : 0.5}}
          variants={
            {
              hidden: {opacity : 0, x : -50},
              visible: {opacity : 0.5, x:0}
            }
          }      
          className="md:-mt-20"    
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 md:before:content-evolvetext before:-left-20 before:z-[-1] ">
                <img src={HomePageText} alt="" />
              </div>
            </div>
            <p className="md:max-w-md mt-8 text-sm">Unrivaled Gym. Unparalleled Traning Fitness Classes. World Class Studios to get the Body Shapes That you Dream of.. Get Your Dream Body Now.</p>
          </motion.div>
          {/* Acions */}
          <motion.div
          initial= "hidden"
          whileInView={"visible"}
          viewport={{
            once: true, amount : 0.5
          }}
          transition={{ delay:0.2,duration: 0.5}}
          variants={{
            hidden: {opacity : 0 , x : -50},
            visible: {opacity: 1, x : 0}
          }}
          className="mt-8 flex items-center gap-8">
            <ActionButton setSeletedPage={setSeletedPage}>
              Join Now
            </ActionButton>
            <AnchorLink className=" text-sm font-bold text-primary-500 underline hover:text-secondary-500"
            onClick={()=>setSeletedPage(SeletedPage.ContactUs)}
            href={`#${SeletedPage.ContactUs}`}
            >
              Learn More
            </AnchorLink>
          </motion.div>
        </div>
        {/* Image */}
        <div className="flex basis-3/5 justify-center z-10 md:ml-20 md:justify-end ">
          <img src={HomePageGraphic} alt="" />
        </div>
      </motion.div>
      {/* SPONSORS */}
      <div className="hidden md:block h-[150px] w-full bg-primary-100 py-12">
        <div className="w-5/6 mx-auto">
          <div className="flex w-3/6  items-center justify-between">
            <img src={SponsorRedBull} alt="redbull-sponsor" />
            <img src={SponsorForbes} alt="forbes-sponsor" />
            <img src={SponsorFortune} alt="fortune-sponsor" />
          </div>
        </div>        
      </div>
    </section>
  )
}

export default Home