import { SeletedPage } from "@/App"
import Htext from "@/shared/Htext"
import { motion } from "framer-motion"
import Classes from "./Classes"
import image1 from '@/assets/image1.png'
import image2 from '@/assets/image2.png'
import image3 from '@/assets/image3.png'
import image4 from '@/assets/image4.png'
import image5 from '@/assets/image5.png'
import image6 from '@/assets/image6.png'

type Props = {
  setSeletedPage : (value: SeletedPage) => void
}

type classesType = {
  name: string
  description ?: string
  image: string
}
const classes : Array<classesType> = [
  {
    name: "Weight Training Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero molestiae error accusantium libero consequatur minima cumque, quasi laboriosam natus. Eos. ",
    image: image1
  },
  {
    name: "Yoga Classes",
    image: image2
  }, 
  {
    name: "Ab Core Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero molestiae error accusantium libero consequatur minima cumque, quasi laboriosam natus. Eos. ",
    image: image3
  },
  {
    name: "Adventure Classes",
    image: image4
  },
  {
    name: "Fitness Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero molestiae error accusantium libero consequatur minima cumque, quasi laboriosam natus. Eos. ",
    image: image5
  },
  {
    name: "Training Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero molestiae error accusantium libero consequatur minima cumque, quasi laboriosam natus. Eos. ",
    image: image6
  },
]


const OurClasses = ({setSeletedPage}: Props) => {
  return (
    <section
    id="ourclasses" 
    className="bg-primary-100 w-full py-36">
      <motion.div 
      onViewportEnter={()=>setSeletedPage(SeletedPage.OurClasses)}>
        <motion.div
        className=" w-5/6 mx-auto">
          <div  className=" md:w-3/5">
            <motion.div
            initial="hidden"
            whileInView={"visible"}
            viewport={{
              once:true ,amount:0.5
            }}    
            transition={{
              duration: 0.5
            }}
            variants={{
              hidden: {opacity:0, x:-50},
              visible: {opacity:1, x:0}
            }}>
            <Htext>
              OUR CLASSES
            </Htext>
            </motion.div>

            <motion.div
            initial="hidden"
            whileInView={"visible"}
            viewport={{
              once:true, amount:0.5
            }}
            transition={{
              duration: 0.5, delay:0.2
            }}
            variants={{
              hidden: {opacity:0, x:-50},
              visible: {opacity:1, x:0}
            }}>

            <p className="py-5 text-sm">Repellendus ducimus cumque in fugiat nihil sapiente consequuntur totam temporibus provident, eum numquam mollitia ullam quos doloribus inventore nobis, autem veniam quo voluptatibus quia quasi! Saepe, tempore!</p>
            </motion.div>
          </div>
        </motion.div>
        <div className="w-full h-[335px] mt-10 overflow-x-auto overflow-y-hidden">
          <ul className=" w-[2600px] whitespace-nowrap">
            {classes.map((item : classesType, index) => {
              return (
                <Classes key={`${item.name}-${index}`} name={item.name} description={item.description} image={item.image} />
              )
            })}
          </ul>
        </div>

      </motion.div>
    </section>
  )
}

export default OurClasses