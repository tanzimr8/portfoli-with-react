const Contact = ()=>{
    return(
        <>
          <section class="contact" id="contact">
            <div class="contact-info">
            <div class="happy-title hide">
                <h2>Have a great <span id="dayOrNight">day</span> :)</h2>
                <div class="contact-icon">
                <a target="_blank" rel="noreferrer" href="https://goo.gl/maps/9yyw1Chci11MUZMf7"><i class="fa-solid fa-location-dot"></i></a>
                <a href="tel:+17097647769"><i class="fa-solid fa-square-phone"></i></a>
                <a href="mailto:tanzim008@gmail.com"><i class="fa-solid fa-envelope"></i></a>
                </div>
            </div>
                <h2 class="section-title contact-info-title">Get in Touch</h2>
                <div class="contact-detail" >
                    <div><i class="fa-solid fa-location-dot"></i></div>
                    <div><span>St. Johns A1C 3A8, NL</span></div> 
                </div>
                <div class="contact-detail" >
                    <div><i class="fa-solid fa-square-phone"></i></div>
                    <div><span><a href="tel:+17097647769">+1 (709) 764 xxxx</a></span></div> 
                </div>
                <div class="contact-detail">
                    <div><i class="fa-solid fa-envelope"></i></div>
                    <div><a href="tanzim008@gmail.com">contact@tanzim-rahman.com</a></div> 
                </div>
            </div>
</section>  
        </>
    )
}
export default Contact;