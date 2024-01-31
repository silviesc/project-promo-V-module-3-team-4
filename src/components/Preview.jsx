import cover from "../images/cover.jpeg";
import user from "../images/user.jpeg";

const Preview = ({projectName,slogan,repository,demo,tech,desc,userName,job}) => {
    return (
        <section className="preview">
        <img className="image preview__image" src={cover} alt="" />

        <section className="preview__autor">
          <section className="info-project previewProject">
            <p className="subtitle previewProject__subtitle">
              Personal Project Card
            </p>
            <hr className="line previewProject__line" />

            <h2 className="previewProject__title">
              {projectName || "Elegant Workspace"}
            </h2>
            <p className="slogan previewProject__slogan">
              {slogan || "Diseños Exclusivos"}
            </p>
            <p className="previewProject__desc">
              {" "}
              {desc ||
                "Product Description. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptas consequuntur tempore libero veritatis."}
            </p>
            <section className="technologies previewProject__technologies">
              <p className="text previewProject__technologies--text">
                {tech || "React JS, MongoDB"}
              </p>
              <i className="fa-solid fa-globe previewProject__technologies--world">
                <a href={demo}></a>
              </i>
              <i className="fa-brands fa-github previewProject__technologies--github">
                <a href={repository}></a>
              </i>
            </section>
          </section>

          <section className="info-autor previewAutor">
            <img className="image previewAutor__image" src={user} alt="" />
            <p className="job previewAutor__job">
              {job || "Full Stack Developer"}
            </p>
            <p className="name previewAutor__name">
              {userName || "Emmelie Björklund"}
            </p>
          </section>
        </section>
      </section>
    )
}

export default Preview;