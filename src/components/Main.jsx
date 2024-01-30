
import Form from "./Form";
import Preview from "./Preview";
import TitleSection from "./TitleSection";

const Main = () => {
    return (
        <main>
      <TitleSection/>
        <div className="main">
        <Preview/>
        <Form/>
        </div>
        </main>
    )
}

export default Main;