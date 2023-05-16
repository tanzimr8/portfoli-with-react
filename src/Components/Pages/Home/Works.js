import WorksData from './../../../Data/works';
import Work from './Work'; 
const Works = ()=>{
    return(
        <>
        <section id="works" className="works">
            <div className="work" id="jobLists">
                <h2 className="section-title text-center">My Work Experience</h2>
            {WorksData.map((work,index)=>{
                return(
                    <Work
                       key={index}
                       work={work} 
                    />
                ) 
            })}
            </div>

        </section>
        </>
    )
}
export default Works;