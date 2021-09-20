import Email from "./component/Email";
import TitleHeader from './component/Header';
import Question from './component/Question';
import './App.css';

function App() {
  return (
		<section>
			<TitleHeader />
			<Email />
			<Question />
		</section>
	);
  }

export default App;
