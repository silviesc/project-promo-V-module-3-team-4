import Form from './Form';
import Preview from './Preview';
import TitleSection from './TitleSection';

const Main = ({ dataCard, handleInput,  handleClickCreateCard, url }) => {
	return (
		<main>
			<TitleSection />
			<div className="main">
				<Preview dataCard={dataCard} />
				<Form handleInput={handleInput} handleClickCreateCard={handleClickCreateCard} url={url} dataCard={dataCard}/>
			</div>
		</main>
	);
};

export default Main;
