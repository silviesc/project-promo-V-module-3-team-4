import '../scss/App.scss';
import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
	const [dataCard, setDataCard] = useState({
		name: '',
		slogan: '',
		technologies: '',
		repo: '',
		demo: '',
		desc: '',
		autor: '',
		job: '',
		image: '',
		photo: '',
	});
	const handleInput = (name, value) => {
		const inputValue = value;
		const inputName = name;
		setDataCard({ ...dataCard, [inputName]: inputValue });
	};

	return (
		<>
			<div className="container">
				<Header />
				<Main dataCard={dataCard} handleInput={handleInput} />
				<Footer />
			</div>
		</>
	);
}

export default App;
