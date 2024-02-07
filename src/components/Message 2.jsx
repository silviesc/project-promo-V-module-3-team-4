
function Message({url}) {
  return (
    <section className="form__card">
      <span className="form__card--text"> La tarjeta ha sido creada: </span>
      <a href={url} className="form__card--link" target="_blank" rel="noreferrer">
        {url}
      </a>
    </section>
  )
}

export default Message