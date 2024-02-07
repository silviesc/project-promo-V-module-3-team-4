
function Message() {
  return (
    <>
    <span className="form__card--text"> La tarjeta ha sido creada: </span>
    <a href={url} className="form__card--link" target="_blank" rel="noreferrer">
      {url}
    </a>
    </>
  )
}

export default Message