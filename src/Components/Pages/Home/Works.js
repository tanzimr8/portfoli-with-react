import WorksData from './../../../Data/works';

const Work = ({work})=>{
    return(
        <>
        <div className="work-1 my-4">
            <div className="card" >
                <div className="card-body" >
                    <h4 className="job-title">{work.role} @ <span>{work.company}</span></h4>
                    <i>{work.startDate} - {work.endDate}  | {work.location} </i>
                    {work.responsibilities.map((reponsibility)=>{
                        return (
                            <ul className="mt-2 job-tasks">
                                <li>{reponsibility}</li>
                            </ul>
                        )
                    })}
                </div>
            </div>
        </div>
        </>
    );
}

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