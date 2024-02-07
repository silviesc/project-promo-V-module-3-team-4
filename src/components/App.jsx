import "../scss/App.scss";
import { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import api from "../services/api";
import ls from "../services/localStorage";
import Message from "./Message";
import Error from "./Error";

function App() {
  const data = {
    name: "",
    slogan: "",
    technologies: "",
    repo: "",
    demo: "",
    desc: "",
    autor: "",
    job: "",
    image:
      "https://images.pexels.com/photos/7105/coffee-iphone-laptop-notebook.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    photo:
      "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=600",
  };
  const [dataCard, setDataCard] = useState(ls.get("card", data));
  // const [url, setUrl] = useState(ls.get("card", ""));
  const [url, setUrl] = useState("");
  
  useEffect(() => {
    ls.set("card", dataCard);
  }, [dataCard])

  // const [dataCard, setDataCard] = useState({
  //   name: "",
  //   slogan: "",
  //   technologies: "",
  //   repo: "",
  //   demo: "",
  //   desc: "",
  //   autor: "",
  //   job: "",
  //   image:
  //     "https://images.pexels.com/photos/7105/coffee-iphone-laptop-notebook.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  //   photo:
  //     "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=600",
  // });

  const handleInput = (name, value) => {
    const inputValue = value;
    const inputName = name;
    setDataCard({ ...dataCard, [inputName]: inputValue });
  };

  const handleClickCreateCard = (e) => {
    e.preventDefault();
    api(dataCard).then((response) => {
      setUrl(response.cardURL);
      console.log(response.cardURL);
      return response;
      showURL(response);
    });
  };

  
const showURL=(result)=>{
  if (result.success) {
    {<Message/>}
  } else {
    {<Error/>}
  }
}

  return (
    <>
      <div className="container">
        <Header />
        <Main
          dataCard={dataCard}
          handleInput={handleInput}
          handleClickCreateCard={handleClickCreateCard}
          url={url}
        
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
