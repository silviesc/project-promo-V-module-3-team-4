
function Error({isValidInput}) {
  return (
    <section className="form__card">
      <p className="form__card--textError">Error - Revisa los datos introducidos:</p>
      <p className="form__card--textError2">{isValidInput()}</p>
    </section>
  )
}

export default Error