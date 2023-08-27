import Button from './../../Shared/Button'
const Slider = ()=>{
    return (
        <>
        <section className="slider" id="slider">
            <div className="container">
                <div className="short-info d-flex flex-column justify-content-center">
                <p className="small-txt">Hello! I am</p>
                <h1 className="title-name">Tanzim Rahman</h1>
                <h2 className="title-job">TRAVELER | WEB DEV | CUSTOMER SERVICE</h2>
                <p className="short-intro">Serving as Customer service Representative at Intact. Also training myself with frontend technology such as<br></br> JavaScript, React JS and UX design</p>
                <Button url="#projects" btn_type = "btn-tz" >See My works</Button>
                </div>
            </div>
        </section>
        </>
    );
}
export default Slider;