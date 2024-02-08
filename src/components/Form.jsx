import GetAvatar from "./GetAvatar";
import Message from "./Message";
import Error from "./Error";

const Form = ({ handleInput, handleClickCreateCard, url, dataCard, fetchSuccess}) => {

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
          placeholder="Repo"
          onChange={(e) => handleInput(e.target.name, e.target.value)}
          value={dataCard.repo}
        />
        <input
          className="form__project--input"
          type="text"
          placeholder="Demo"
          name="demo"
          id="demo"
          onChange={(e) => handleInput(e.target.name, e.target.value)}
          value={dataCard.demo}
        />
        <input
          className="form__project--input"
          type="text"
          placeholder="Tecnologías"
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
        <GetAvatar
          updateAvatar={handleInput}
          text="Subir foto de proyecto"
          nameInput="image"
        />
        <GetAvatar
          updateAvatar={handleInput}
          text="Subir foto de autora"
          nameInput="photo"
        />
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
        {fetchSuccess === null ? null : fetchSuccess ? <Message url={url}/> : <Error/>}
      </section>
        
    </form>
  );
};

export default Form;