import { SeletedPage } from "@/App"
import Htext from "@/shared/Htext"
import { motion } from "framer-motion"

type Props = {
  setSeletedPage : (value: SeletedPage) => void
}

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

      </motion.div>
    </section>
  )
}

export default OurClasses