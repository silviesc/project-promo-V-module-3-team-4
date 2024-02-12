import GetAvatar from "./GetAvatar";
import Message from "./Message";
import Error from "./Error";

const Form = ({ handleInput, handleClickCreateCard, url, dataCard, fetchSuccess, handleReset, isValidInput}) => {

  return (
    <form className="form">
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
          value={dataCard.name}
          onChange={(e) => handleInput(e.target.name, e.target.value)}
        />
        <input
          className="form__project--input"
          type="text"
          name="slogan"
          id="slogan"
          placeholder="Slogan"
          onChange={(e) => handleInput(e.target.name, e.target.value)}
          value={dataCard.slogan}
        />
        <input
          className="form__project--input"
          type="text"
          name="repo"
          id="repo"
          placeholder="Repositorio:  https://github.com/silviesc/project-promo-V-module-3-team-4"
          onChange={(e) => handleInput(e.target.name, e.target.value)}
          value={dataCard.repo}
        />
        <input
          className="form__project--input"
          type="text"
          placeholder="Demo:  https://silviesc.github.io/project-promo-V-module-3-team-4/"
          name="demo"
          id="demo"
          onChange={(e) => handleInput(e.target.name, e.target.value)}
          value={dataCard.demo}
        />
        <input
          className="form__project--input"
          type="text"
          placeholder="Tecnologías:  HTML, JS,..."
          name="technologies"
          id="technologies"
          onChange={(e) => handleInput(e.target.name, e.target.value)}
          value={dataCard.technologies}
        />
        <textarea
          className="form__project--textarea"
          type="text"
          placeholder="Descripción"
          name="desc"
          id="desc"
          onChange={(e) => handleInput(e.target.name, e.target.value)}
          value={dataCard.desc}
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
          name="autor"
          id="autor"
          onChange={(e) => handleInput(e.target.name, e.target.value)}
          value={dataCard.autor}
        />
        <input
          className="form__autor--input"
          type="text"
          placeholder="Trabajo"
          name="job"
          id="job"
          onChange={(e) => handleInput(e.target.name, e.target.value)}
          value={dataCard.job}
        />
      </fieldset>

      <section className="form__buttonsImg">
        <div className="form__buttonsImg--group">
          <GetAvatar
            updateAvatar={handleInput}
            text="Subir foto de proyecto"
            nameInput="photo"
          />
          <GetAvatar
            updateAvatar={handleInput}
            text="Subir foto de autora"
            nameInput="image"
          />
        </div>
        <button className="form__buttonsImg--reset" onClick={handleReset}>Limpiar datos</button>

      </section>
      <section className="form__buttonsImg">
        <button
          className="form__buttonsImg--create"
          onClick={handleClickCreateCard}
        >
          Crear Tarjeta
        </button>
      </section>

      <section>
        {fetchSuccess === null ? null : fetchSuccess ? <Message url={url}/> : <Error isValidInput={isValidInput}/>}
      </section>
        
    </form>
  );
};

export default Form;
