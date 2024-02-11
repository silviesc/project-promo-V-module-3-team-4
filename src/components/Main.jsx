import Form from './Form';
import Preview from './Preview';
import TitleSection from './TitleSection';

const Main = ({ dataCard, handleInput, isValidInput, handleClickCreateCard, url, fetchSuccess}) => {
	return (
		<main>
			<TitleSection />
			<div className="main">
				<Preview dataCard={dataCard} />
				<Form handleInput={handleInput} handleClickCreateCard={handleClickCreateCard} url={url} dataCard={dataCard} fetchSuccess={fetchSuccess} isValidInput={isValidInput}/>
			</div>
		</main>
	);
};

export default Main;
