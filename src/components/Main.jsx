import Form from './Form';
import Preview from './Preview';
import TitleSection from './TitleSection';

const Main = ({ dataCard, handleInput }) => {
	return (
		<main>
			<TitleSection />
			<div className="main">
				<Preview dataCard={dataCard} />
				<Form handleInput={handleInput} />
			</div>
		</main>
	);
};

export default Main;
