const Form = ({ handleChange }) => {

  return (
    <section className="form">
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
          name="name"
          id="name"
          onChange={(e) => handleChange(e.target.id, e.target.value)}
        />
        <input
          className="form__project--input"
          type="text"
          name="slogan"
          id="slogan"
          placeholder="Slogan"
          onChange={(e) => handleChange(e.target.id, e.target.value)}
        />
        <input
          className="form__project--input"
          type="text"
          name="repository"
          id="repository"
          placeholder="Repo"
          onChange={(e) => handleChange(e.target.id, e.target.value)}
        />
        <input
          className="form__project--input"
          type="text"
          placeholder="Demo"
          name="demo"
          id="demo"
          onChange={(e) => handleChange(e.target.id, e.target.value)}
        />
        <input
          className="form__project--input"
          type="text"
          placeholder="Tecnologías"
          name="tech"
          id="tech"
          onChange={(e) => handleChange(e.target.id, e.target.value)}
        />
        <textarea
          className="form__project--textarea"
          type="text"
          placeholder="Descripción"
          name="desc"
          id="desc"
          onChange={(e) => handleChange(e.target.id, e.target.value)}
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
          name="author"
          id="author"
          onChange={(e) => handleChange(e.target.id, e.target.value)}
        />
        <input
          className="form__autor--input"
          type="text"
          placeholder="Trabajo"
          name="job"
          id="job"
          onChange={(e) => handleChange(e.target.id, e.target.value)}
        />
      </fieldset>

      <section className="form__buttonsImg">
        <button className="form__buttonsImg--upload">
          Subir foto de proyecto
        </button>
        <button className="form__buttonsImg--upload">
          Subir foto de autora
        </button>
      </section>
      <section className="form__buttonsImg">
        <button
          className="form__buttonsImg--create"
          onClick="{handleClickCreateCard}"
        >
          Crear Tarjeta
        </button>
      </section>

      <section className="form__card">
        <span className="hidden"> La tarjeta ha sido creada: </span>
        <a href="" className="" target="_blank" rel="noreferrer">
          {" "}
        </a>
      </section>
    </section>
  );
};

export default Form;
