import '../scss/App.scss'
import cover from '../images/cover.jpeg'
import logo from '../images/logo-adalab.png'
import user from '../images/user.jpeg'
import { useState } from "react"

function App() {

  const [projectName, setProjectName] = useState('');
  const [slogan, setSlogan] = useState('');
  const [repository, setRepository] = useState('');
  const [demo, setDemo] = useState('');
  const [tech, setTech] = useState('');
  const [desc, setDesc] = useState('');
  const [userName, setUserName] = useState('');
  const [job, setJob] = useState('');

  const handleChange = (event) => {
    if (event.target.id === "name") {
      setProjectName(event.target.value); 
    } else if (event.target.id === "slogan") {
      setSlogan(event.target.value);
    } else if (event.target.id === "repo") {
      setRepository(event.target.value);
    } else if (event.target.id === "demo") {
      setDemo(event.target.value);
    } else if (event.target.id === "technologies") {
      setTech(event.target.value)
    } else if (event.target.id === "desc") {
      setDesc(event.target.value);
    } else if (event.target.id === "autor") {
      setUserName(event.target.value);
    } else if (event.target.id === "job") {
      setJob(event.target.value);
    }
  }

  return (
  <>
    <div className="container">
      <header className="header">
        <i className="fa-solid fa-laptop-code icon"></i>
        <p className="text">Proyectos Molones</p>
        <img src={logo} alt="logo" className= "logo"/>
      </header>
        <section className='titleSection'>
          <h1 className='titleSection__h1'>Proyectos molones</h1>
          <p className='titleSection__p'>Escaparate en línea para recoger ideas a través de la tecnología.</p>
          <a className='titleSection__btn' href="#">Ver proyectos</a>
        </section>
        <main className="main">
        <section className="preview">
          <img className="image preview__image" src={cover} alt="" />

          <section className="preview__autor">
            <section className="info-project previewProject">
              <p className="subtitle previewProject__subtitle">Personal Project Card</p>
              <hr className="line previewProject__line" />

              <h2 className="previewProject__title">{projectName || 'Elegant Workspace'}</h2>
              <p className="slogan previewProject__slogan">{slogan || 'Diseños Exclusivos'}</p>
              <p className="previewProject__desc"> {desc || 'Product Description. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptas consequuntur tempore libero veritatis.'}
                
              </p>
              <section className="technologies previewProject__technologies">
                <p className="text previewProject__technologies--text">{tech || 'React JS, MongoDB'}</p>
                <i className="fa-solid fa-globe previewProject__technologies--world"><a href={demo}></a></i> 
                <i className="fa-brands fa-github previewProject__technologies--github"><a href={repository}></a></i>
                      
              </section>
            </section>

            <section className="info-autor previewAutor">
              <img className="image previewAutor__image" src={user} alt="" />
              <p className="job previewAutor__job">{job || 'Full Stack Developer'}</p>
              <p className="name previewAutor__name">{userName || 'Emmelie Björklund'}</p>
            </section>
          </section>
        </section>

        <section className="form">
          <h2 className="title">Información</h2>

          <section className="ask-info">
            <p className="subtitle">Cuéntanos sobre el proyecto</p>
            <hr className="line" />
          </section>

          <fieldset className="project"  onChange={handleChange}>
            <input
              className="input"
              type="text"
              placeholder="Nombre del proyecto"
              name="name"
              id="name"
             
            />
            <input
              className="input"
              type="text"
              name="slogan"
              id="slogan"
              placeholder="Slogan"
            
            />
            <input
              className="input"
              type="text"
              name="repo"
              id="repo"
              placeholder="Repo"
          
            />
            <input
              className="input"
              type="text"
              placeholder="Demo"
              name="demo"
              id="demo"
             
            />
            <input
              className="input"
              type="text"
              placeholder="Tecnologías"
              name="technologies"
              id="technologies"
          
            />
            <textarea
              className="textarea"
              type="text"
              placeholder="Descripción"
              name="desc"
              id="desc"
              
            ></textarea>
          </fieldset>

          <section className="ask-info">
            <p className="subtitle">Cuéntanos sobre la autora</p>
            <hr className="line" />
          </section>

          <fieldset className="autor"  onChange={handleChange}>
            <input
              className="input"
              type="text"
              placeholder="Nombre"
              name="autor"
              id="autor"
          
            />
            <input
              className="input"
              type="text"
              placeholder="Trabajo"
              name="job"
              id="job"

            />
          </fieldset>

          <section className="buttons-img">
            <button className="btn">Subir foto de proyecto</button>
            <button className="btn">Subir foto de autora</button>
          </section>
          {/* <section className="buttons-img">
            <button className="btn-large" onClick="{handleClickCreateCard}">
              Crear Tarjeta
            </button>
          </section> */}

          <section className="card">
            <span className="hidden"> La tarjeta ha sido creada: </span>
            <a href="" className="" target="_blank" rel="noreferrer"> </a>
          </section>
        </section>
      </main>
     <footer className="footer">
      <img src={logo} alt="logo" className= "logo"/>  
     </footer>
    </div>
  </>
  )
}

export default App
