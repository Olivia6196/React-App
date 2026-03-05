export default function Contact(){
    return(
        <>
        <section id="Contact" className="bg-[url(/background.png)] bg-cover bg-no-repeat bg-center">
         <h2 className="text-center text-3xl font-semibold pb-8 drop-shadow-[0_0_4px_#ec4899] pt-8">Get In Touch</h2>
         <p className="text-center text-2xl pb-20 font-semibold font-livia">Let's build and turn your ideas into reality!</p>
         <div className="flex justify-center gap-56">
         <div className="">
         <p className="pb-3">Reach Out at:</p>
         <p className="text-lg"><i class='bx bx-envelope align-middle' ></i>oliviaifebuche@gmail.com</p>
         <p className="text-lg"><i class='bx bxs-phone-call align-middle'></i>+234-810-412-6196</p>
         <p className="py-3">Follow My Journey:</p>
            <a href="https://www.linkedin.com/in/olivia-ifebuchechukwu-omeje-36011b355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><i class='bx bxl-linkedin py-1 px-2 rounded-xl bg-[#0a66c2] text-white text-2xl mr-1'></i></a>
            <a href="https://x.com/uchelivia?t=t-gwjy71oZWqBT0i990qQQ&s=09" target="_blank" rel="noopener noreferrer"><i class='bx bxl-twitter text-xl text-white bg-[#1da1f2] py-[0.28vw] px-2 rounded-full mr-1'></i></a>
            <a href="https://www.tiktok.com/@olivia_codes?_t=ZS-8zSV4ZzaGvq&_r=1" target="_blank" rel="noopener noreferrer"><i class='bx bxl-tiktok text-xl text-white bg-black py-[0.28vw] px-2 rounded-full mr-1' ></i></a>
            <a href="https://www.instagram.com/olivia_codes" target="_blank" rel="noopener noreferrer" className="text-white bg-gradient-to-tr from-yellow-300 via-red-400 to-purple-400 pt-[0.8vw] pb-1 px-2 rounded-xl mr-1"><i class='bx bxl-instagram text-2xl' ></i></a>
            <a href="https://www.facebook.com/abel.olivi.5" target="_blank" rel="noopener noreferrer"><i class='bx bxl-facebook text-2xl text-white bg-blue-500 py-[0.2vw] px-2 rounded-full' ></i></a>
         </div>
         <div className="pb-8">
            <form action="mailto:ifebuchechukwuomeje@gmail.com" method="post">
                    <fieldset>
                        <input type="text" id="name" name="name" placeholder="Your Name" required className="p-3 border-2 border-red-300 rounded-lg outline-none "/>
                        <br /><br />
                        <input type="tel" id="phone" name="phone" maxlength="11" placeholder="Your Phone Number"
                            required  className="p-3 border-2 border-red-300 rounded-lg outline-none "/>
                                 <br /><br />
                        <input type="email" id="email" name="email" placeholder="Your Email" required className="p-3 border-2 border-red-300 rounded-lg outline-none "/>
                        <br /><br />
                        <textarea rows="4" cols="35" name="Message" id="Message" placeholder="Leave a Message"
                            required className="p-3 border-2 border-red-300 rounded-lg outline-none "></textarea>
                    </fieldset> 
                    <br />
                    <button className="mt-6 bg-red-300 text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-pink-400/50 hover:bg-transparent hover:text-red-300 hover:border hover:border-red-300 transition-all duration-300">Submit</button>
            </form>
         </div>
         </div>
        </section>
        </>
    )
}