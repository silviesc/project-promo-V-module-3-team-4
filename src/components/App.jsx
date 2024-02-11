import '../scss/App.scss';
import { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import api from '../services/api';
import ls from '../services/localStorage';

function App() {
  const data = {
    name: '',
    slogan: '',
    technologies: '',
    repo: '',
    demo: '',
    desc: '',
    autor: '',
    job: '',
    photo:
      'https://images.pexels.com/photos/7105/coffee-iphone-laptop-notebook.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    image:
      'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=600',
  };
  const [dataCard, setDataCard] = useState(ls.get('card', data));
  const [url, setUrl] = useState('');
  const [fetchSuccess, setFetchSuccess] = useState(null);

  useEffect(() => {
    ls.set('card', dataCard);
  }, [dataCard]);

  const handleInput = (name, value) => {
    const inputValue = value;
    const inputName = name;
    setDataCard({ ...dataCard, [inputName]: inputValue });
    
  };

  const handleClickCreateCard = (e) => {
    e.preventDefault();
    api(dataCard).then((response) => {
      if (response.success) {
        setUrl(response.cardURL);
        setFetchSuccess(true);
      } else {
        setFetchSuccess(false);
      }
    });
  };

  const isValidInput = () => {
    if (dataCard.name === '') {
      return <p>Rellena el nombre del proyecto</p>;
    } else if (dataCard.slogan === '') {
      return <p>Rellena el nombre del slogan</p>;
    } else if (dataCard.repo === '') {
      return <p>Rellena el nombre del repositorio</p>;
    } else if (dataCard.demo === '') {
      return <p>Rellena el nombre de la demo</p>;
    } else if (dataCard.technologies === '') {
      return <p>Rellena el nombre de las tecnologías</p>;
    } else if (dataCard.desc === '') {
      return <p>Rellena el nombre de la descripción</p>;
    } else if (dataCard.author === '') {
      return <p>Rellena el nombre de la autora</p>;
    } else if (dataCard.job === '') {
      return <p>Rellena el trabajo de la autora</p>;
    }
  };
  return (
    <>
      <div className="container">
        <Header />
        <Main
          dataCard={dataCard}
          handleInput={handleInput}
          handleClickCreateCard={handleClickCreateCard}
          url={url}
          fetchSuccess={fetchSuccess}
          isValidInput={isValidInput}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
