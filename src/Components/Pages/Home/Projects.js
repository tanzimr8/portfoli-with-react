import ProjectData from './../../../Data/projects';

const Project = ({project})=>{
    return(
        <>
        <tr>
            <td>
            <h3>{project.title}</h3>
            <p>{project.techs}</p>
            </td>
            <td><a target="_blank" rel="noreferrer" href={project.link}>View</a></td>
        </tr>
        </>
    );
}

const Projects = ()=>{
    return(
        <section id="projects" class="projects">
            <h2 class="section-title my-4">Web Projects</h2>
            <table class="table ">
                <thead>
                <tr>
                    <th>Projects</th>
                    <th>Link</th>
                </tr>
                </thead>
                <tbody id="projectTable">
                {/* Loop starts */}
                {ProjectData.map((project,index)=>{
                    return <Project
                        key={index}
                        project = {project}
                    />
                })}
                {/* Loop ends */}
                </tbody>
            </table>
        </section>
    );
}





export default Projects;