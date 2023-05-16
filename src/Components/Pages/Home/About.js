import tanzim from './../../../Images/tanzim.webp'
const About = ()=>{
    return(
        <>
            <section id="about" className="about">
                <div className="about-img">
                <img src={tanzim} alt={tanzim}/>
                </div>
                <div className="about-description">
                    <h2 className="section-title">About me</h2>
                    <p>I would love to introduce me as a traveler. I have been Traveling from the ins and outs of Bangladesh to the beautiful hilly towns besides the Atlantic ocean in Newfoundland, Canada. After travelling my passion comes for coding. </p>
                    <p>I have been working with the web technologies such as JavaScript(ES6), HTML, CSS, Bootstrap, React etc. I have a 4 years of professional experience in Web Development. In my workplace I used to work with WorpdPress. But, at this moment I am training myself as Frontend Engineer and UX designer in future.</p>
                    <p>After moving to Canada I started working in Sobeys as a Sales Cashier. Now, I am working as a Customer Service Representative - Auto claims in Intact insurance company. It has been a very new experience for me and Its exciting and helping me to improve my problem solving ability.</p> 
                    <a target="_blank" href="/Resume.pdf" className="btn btn-primary btn-tz">Download My CV</a>
                </div>
            </section>
        </>
    );
}
export default About;