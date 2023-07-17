import { SeletedPage } from "@/App"
import Htext from "@/shared/Htext"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import  ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"

type Props = {
  setSeletedPage : ( value : SeletedPage)=> void
}

const ContactUs = ({setSeletedPage}: Props) => { 

  const { 
    register,
    trigger,
    formState : {errors}
  } = useForm()

  const submitHandler = async ( e : any ) => {
    const isValid = await trigger()
    if (!isValid) {
      // e?.preventDefault()
      e.preventDefault()      
    }
  }

  const inputStyle = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`
  return (
    <section id="contactus" className="w-5/6 mx-auto py-32 ">
      <motion.div onViewportEnter={()=>setSeletedPage(SeletedPage.ContactUs)}>
        {/* HEADER */}
        <div
          className="md:w-3/5"
          >
          <motion.div
          initial="hidden"
          whileInView={"visible"}
          viewport={{once:true, amount:0.5}}
          transition={{duration: 0.5}}
          variants={
            {
              hidden: {opacity:0, x:-50},
              visible: {opacity:1, x:0}
            }        
          }
          
          >
            <Htext>
              <span className=" text-primary-500">JOIN NOW</span> TO GET IN SHAPE
            </Htext>            
          </motion.div>
          <motion.div
           initial="hidden"
           whileInView={"visible"}
           viewport={{once:true ,amount:0.5}}
           transition={{duration:0.5, delay:0.2}}
           variants={{
            hidden: {opacity:0, x:-50},
            visible: {opacity:1, x:0}
           }}
          >
            <p className="my-5 text-sm">ipsum dolor sit, amet consectetur adipisicing elit. Doloribus non earum exercitationem perspiciatis nemo quos saepe odit ratione maxime, placeat consequatur  Doloribus non earum exercitationem perspiciatis nemo quos saepe odit ratione maxime, placeat consequatur .</p>
          </motion.div>
        </div>
        {/* FORM AND IMAGE */}
        <div className=" md:flex justify-between mt-10 gap-8">
          <motion.div
            className=" mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView={"visible"}
            viewport={{once:true, amount:0.5}}
            transition={{duration:0.5}}
            variants={{
              hidden:{ opacity:0, y:50},
              visible: { opacity:1, y:0}
            }}
          >
            <form 
                target="_blank"
                onSubmit={submitHandler}            
                method="POST"
                action="https://formsubmit.co/jlzamliankhai@gmail.com"
            >
              <input 
                type="text" 
                className={inputStyle} 
                placeholder="NAME" 
                {...register("name", { 
                  required : true , 
                  maxLength : 100})} 
              />
              {errors.name && (
                <p className=" mt-1 text-primary-500">
                  {errors.name.type === "required"  && "This field is required"}
                  {errors.name.type === "maxLength"  && "Max length is 100 charactors"}
                </p>
              )}

            <input 
                type="text" 
                className={inputStyle} 
                placeholder="EMAIL" 
                {...register("email", { 
                  required : true ,
                  pattern : /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              
              })}/>
              {errors.email && (
                <p className=" mt-1 text-primary-500">
                  {errors.email.type === "required"  && "This field is required"}
                  {errors.email.type === "pattern"  && "Invalid email address"}
                </p>
              )}

            <textarea
              className={inputStyle} 
              placeholder="MESSAGE" 
              rows={4}
              cols={50}
              {...register("message", { 
              required : true , maxLength : 2000
              })} 
              />
              {errors.message && (
                <p className=" mt-1 text-primary-500">
                  {errors.message.type === "required"  && "This field is required"}
                  {errors.message.type === "maxLength"  && "Max length is 2000 charactors"}
                </p>
              )}

            <button type="submit"
              className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >Submit
            </button>
           </form>
          </motion.div>          
        </div>
      </motion.div>    
    </section>
  )
}

export default ContactUs