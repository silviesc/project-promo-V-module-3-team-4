import '../scss/App.scss'
import cover from '../images/cover.jpeg'
import logo from '../images/logo-adalab.png'
import user from '../images/user.jpeg'

function App() {

  return (
  <>
    <div className="container">
      <header className="header">
        <i class="fa-solid fa-laptop-code icon"></i>
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

              <h2 className="previewProject__title">Elegant Workspace</h2>
              <p className="slogan previewProject__slogan">Diseños Exclusivos</p>
              <p className="previewProject__desc">
                Product Description.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptas consequuntur tempore libero veritatis.
              </p>
              <section className="technologies previewProject__technologies">
                <p className="text previewProject__technologies--text">React JS, MongoDB</p>
                <i class="fa-solid fa-globe previewProject__technologies--world"></i> 
                <i className="fa-brands fa-github previewProject__technologies--github"></i>
                      
              </section>
            </section>

            <section className="info-autor previewAutor">
              <img className="image previewAutor__image" src={user} alt="" />
              <p className="job previewAutor__job">Full Stack Developer</p>
              <p className="name previewAutor__name">Emmelie Björklund</p>
            </section>
          </section>
        </section>

        <section className="form">
          <h2 className="title">Información</h2>

          <section className="ask-info">
            <p className="subtitle">Cuéntanos sobre el proyecto</p>
            <hr className="line" />
          </section>

          <fieldset className="project">
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

          <fieldset className="autor">
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
          <section className="buttons-img">
            <button className="btn-large" onClick="{handleClickCreateCard}">
              Crear Tarjeta
            </button>
          </section>

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
