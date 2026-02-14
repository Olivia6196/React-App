export default function Contact(){
    return(
        <>
        <section id="Contact">
         <h2 className="sub headings">Get In Touch</h2>
         <p className="contact">Let's build and turn your ideas into reality!</p>
         <p>Reach Out at:</p>
         <p><i class='bx bx-envelope'></i>oliviaifebuche@gmail.com</p>
         <p><i class='bx bxs-phone-call'></i>+234-810-412-6196</p>
         <p className="follow">Follow My Journey:</p>
         <div className="icons">
            <a href="https://www.linkedin.com/in/olivia-ifebuchechukwu-omeje-36011b355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><i class='bx bxl-linkedin-square'></i></a>
            <a href="https://x.com/uchelivia?t=t-gwjy71oZWqBT0i990qQQ&s=09" target="_blank" rel="noopener noreferrer"><i class='bx bxl-twitter'></i></a>
            <a href="https://www.tiktok.com/@olivia_codes?_t=ZS-8zSV4ZzaGvq&_r=1" target="_blank" rel="noopener noreferrer"><i class='bx bxl-tiktok'></i></a>
         </div>
         <div>
            <form action="mailto:ifebuchechukwuomeje@gmail.com" method="post">
                    <fieldset>
                        <input type="text" id="name" name="name" placeholder="Your Name" required /><br /><br />
                        <input type="tel" id="phone" name="phone" maxlength="11" placeholder="Your Phone Number"
                            required />
                                 <br /><br />
                        <input type="email" id="email" name="email" placeholder="Your Email" required />
                        <br /><br />
                        <textarea rows="4" cols="35" name="Message" id="Message" placeholder="Leave a Message"
                            required></textarea>
                    </fieldset> 
                    <br />
                    <button>Submit</button>
            </form>
         </div>
        </section>
        </>
    )
}