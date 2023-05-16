const Work = ({work})=>{
    return(
        <>
        <div className="work-1 my-4">
            <div className="card" >
                <div className="card-body" >
                    <h4 className="job-title">{work.role} @ <span>{work.company}</span></h4>
                    <i>{work.startDate} - {work.endDate}  | {work.location} </i>
                    <ul className="mt-2 job-tasks">
                    {work.responsibilities.map((reponsibility)=>{
                        return (
                            <ul class="mt-2 job-tasks">
                                {reponsibility}
                            </ul>
                        )
                    })}
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
}
export default Work;