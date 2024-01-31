
const Form = ({projectName,slogan,repository,demo,tech,desc,userName,job, handleChange}) => {
  const handleForm = (ev) =>{
    const id = ev.target.id;
    const value = ev.target.value;
    handleChange (id,value);
  }
    return (
        <section className="form" onChange={handleForm}>
        <h2 className="form__title">Información</h2>

        <section className="form__askInfo">
          <p className="form__askInfo--subtitle">Cuéntanos sobre el proyecto</p>
          <hr className="form__askInfo--line" />
        </section>

        <fieldset className="form__project">
          <input 
            className="form__project--input"
            type="text"
            placeholder="Nombre del proyecto"
            name={projectName}
            id={projectName}
          />
          <input
            className="form__project--input"
            type="text"
            name={slogan}
            id={slogan}
            placeholder="Slogan"
          />
          <input
            className="form__project--input"
            type="text"
            name= {repository}
            id={repository}
            placeholder="Repo"
          />
          <input
            className="form__project--input"
            type="text"
            placeholder="Demo"
            name={demo}
            id={demo}
          />
          <input
            className="form__project--input"
            type="text"
            placeholder="Tecnologías"
            name={tech}
            id={tech}
          />
          <textarea
            className="form__project--textarea"
            type="text"
            placeholder="Descripción"
            name={desc}
            id={desc}
          ></textarea>
        </fieldset>

        <section className="form__askInfo">
          <p className="form__askInfo--subtitle">Cuéntanos sobre la autora</p>
          <hr className="form__askInfo--line" />
        </section>

        <fieldset className="form__autor">
          <input
            className="form__autor--input"
            type="text"
            placeholder="Nombre"
            name={userName}
            id={userName}
          />
          <input
            className="form__autor--input"
            type="text"
            placeholder="Trabajo"
            name={job}
            id={job}
          />
        </fieldset>

        <section className="form__buttonsImg">
          <button className="form__buttonsImg--upload">Subir foto de proyecto</button>
          <button className="form__buttonsImg--upload">Subir foto de autora</button>
        </section>
        <section className="form__buttonsImg">
          {/*<button className="form__buttonsImg--create" onClick="{handleClickCreateCard}">
            Crear Tarjeta
          </button>*/}
        </section>

        <section className="form__card">
          <span className="hidden"> La tarjeta ha sido creada: </span>
          <a href="" className="" target="_blank" rel="noreferrer">
            {" "}
          </a>
        </section>
      </section>
    )
}

export default Form;