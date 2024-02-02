
import Form from "./Form";
import Preview from "./Preview";
import TitleSection from "./TitleSection";

const Main = ({projectName,slogan,repository,demo,tech,desc,userName,job, handleChange}) => {
    return (
        <main>
        <TitleSection/>
        <div className="main">
        <Preview projectName={projectName} slogan={slogan} repository={repository} demo={demo} tech={tech} desc={desc} userName ={userName} job={job}/>
        <Form projectName={projectName} slogan={slogan} repository={repository} demo={demo} tech={tech} desc={desc} userName ={userName} job={job} handleChange={handleChange}/>
        </div>
        </main>
    )
}

export default Main;