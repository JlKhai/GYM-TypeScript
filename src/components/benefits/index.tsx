import { SeletedPage } from "@/App"
import ActionButton from "@/shared/ActionButton"
import Htext from "@/shared/Htext"
import { HomeModernIcon, UserGroupIcon } from "@heroicons/react/20/solid"
import { motion } from "framer-motion"
import AnchorLink from "react-anchor-link-smooth-scroll"
import BenefitPageGraphic from '@/assets/BenefitsPageGraphic.png'

type Props = {
  setSeletedPage : (vlaue : SeletedPage) => void
}

const Benefits = ({setSeletedPage}: Props) => {
  return (
    <section id="benefits"
       className="mx-auto min-h-full w-5/6 py-36">
       <motion.div onViewportEnter={()=>setSeletedPage(SeletedPage.Benefits)}>
         {/* HEADER */}
          <motion.div className="md:w-3/5 md:mt-5"
            initial="hidden"
            whileInView={"visible"}
            viewport={{once:true, amount:0.5}}
            transition={{duration: 0.5}}
            variants={{
              hidden:{opacity:0, x:-50},
              visible: {opacity:1, x:0}
            }}
          >
            <Htext>
              MORE THAN JUST A GYM
            </Htext>
            <p className="text-sm my-5">We provide world class fitness equipment, trainers and classes to get you to yout ultimate fitness goals with ease. We provide true care into each and every member.</p>
          </motion.div>
          {/* BENEFITS */}
          <div className=" mt-5 md:flex gap-8 mx-auto justify-between items-center">
            <motion.div className=" border-2 border-gray-300 rounded-md w-full md:w-[350px] mb-5"
               initial="hidden"
               whileInView={"visible"}
               viewport={{
                 once: true, amount:0.5
               }}
               transition={{duration:0.5}}
               variants={{
                 hidden: {opacity: 0, scale: 0.9},  
                 visible: {opacity: 1, scale: 1}           
               }}
            >
              <div className=" flex flex-col gap-4 justify-center items-center py-16 px-5">
                <div className=" bg-primary-100 rounded-full p-4">
                  <HomeModernIcon  className="w-6 h-6"/>
                </div>
                <h4 className="text-center font-bold">State of the Facilities</h4>
                <p className="text-center text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, esse porro. Optio corporis eveniet deserunt. Hic?</p>
              <AnchorLink className=" text-sm font-bold underline text-primary-500 hover:text-secondary-500"
                onClick={()=>setSeletedPage(SeletedPage.ContactUs)}
                href={`#${SeletedPage.ContactUs}`}
              >Learn More</AnchorLink>        
              </div>
            </motion.div>
            <motion.div className=" border-2 border-gray-300 rounded-md w-full md:w-[350px] mb-5"
               initial="hidden"
               whileInView={"visible"}
               viewport={{ once: true, amount:0.5}}
               transition={{duration:0.5, delay:0.2}}
               variants={{
                hidden : {opacity:0, scale : 0.9},
                visible : {opacity:1, scale: 1}
               }}
            
            >
              <div className=" flex flex-col gap-4 justify-center items-center py-16 px-5"
               
              >
                <div className=" bg-primary-100 rounded-full p-4">
                  <UserGroupIcon  className="w-6 h-6"/>
                </div>
                <h4 className="text-center font-bold">100's of Diverse Classes</h4>
                <p className="text-center text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, esse porro. Optio corporis eveniet deserunt. Hic?</p>
              <AnchorLink className=" text-sm font-bold underline text-primary-500 hover:text-secondary-500"
                onClick={()=>setSeletedPage(SeletedPage.ContactUs)}
                href={`#${SeletedPage.ContactUs}`}
              >Learn More</AnchorLink>        
              </div>
            </motion.div>
            <motion.div className=" border-2 border-gray-300 rounded-md w-full md:w-[350px] mb-5"
             initial="hidden"
             whileInView={"visible"}
             viewport={{ once:true,amount:0.5}}
             transition={{duration:0.5, delay:0.4}}
             variants={{
               hidden : {opacity:0, scale: 0.9},
               visible : {opacity:1, scale: 1}

             }}>
              <div className=" flex flex-col gap-4 justify-center items-center py-16 px-5">
                <div className=" bg-primary-100 rounded-full p-4">
                  <HomeModernIcon  className="w-6 h-6"/>
                </div>
                <h4 className="text-center font-bold">Expert and Pro Trainers</h4>
                <p className="text-center text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, esse porro. Optio corporis eveniet deserunt. Hic?</p>
              <AnchorLink className=" text-sm font-bold underline text-primary-500 hover:text-secondary-500"
                onClick={()=>setSeletedPage(SeletedPage.ContactUs)}
                href={`#${SeletedPage.ContactUs}`}
              >Learn More</AnchorLink>        
              </div>
            </motion.div>

          </div>

          {/* GRAPHICS AND DESCRIPTION */}
          <div className=" md:flex gap-8 justify-between items-center mt-16">
            {/* GRAPHIC */}
            <img src={BenefitPageGraphic} alt="benefits-page-graphic" />

            {/* DESCRIPTION */}
            <div>
              <div className=" relative">
                <div className=" before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                  <motion.div 
                    initial="hidden"
                    whileInView={"visible"}
                    viewport={{once:true, amount: 0.5}}
                    transition={{duration:0.5}}
                    variants={{
                      hidden: {opacity:0, x:-50},
                      visible: {opacity:1, x:0}
                    }}
                  >
                  <Htext>MILLIONS OF HAPPY MEMBERS GETTING
                    <span className=" text-primary-500"> FIT</span>.
                  </Htext>
                  </motion.div>
                </div>
                <motion.div 
                  initial="hidden"
                  whileInView={"visible"}
                  viewport={{once:true, amount:0.5}}
                  transition={{duration:0.5, delay:0.2}}
                  variants={{
                    hidden:{opacity:0, x:-50},
                    visible:{opacity:1, x:0}
                  }}
                >
                  <p className=" text-sm my-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore ipsam dolorem necessitatibus, aliquid placeat quam qui praesentium ut animi pariatur illo voluptatum asperiores modi eos nulla quaerat ipsa doloremque sint veritatis eveniet corporis nemo, nobis esse minima! Deserunt, voluptate natus!</p>
                  <p className=" text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore ipsam dolorem necessitatibus, aliquid placeat quam qui praesentium ut animi pariatur illo voluptatum asperiores modi eos nulla quaerat ipsa doloremque sint veritatis eveniet corporis nemo, nobis esse minima! Deserunt, voluptate natus!</p>
                </motion.div>
              </div>

              {/* BUTTON */}
              <div className="relative mt-16">
                <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSeletedPage={setSeletedPage} >
                  Join Now                  
                </ActionButton>
                </div>
              </div>
            </div>
          </div>

       </motion.div>
    </section>
  )
}

export default Benefits