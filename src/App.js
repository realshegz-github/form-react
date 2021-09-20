import Email from "./component/Email";
import TitleHeader from './component/Header';
import Question from './component/Question';
import './App.css';

function App() {
  return (
		<section className="content">
			<TitleHeader />
			<Email />
			<Question />
			<Question />
			<Question />
			<Question />
			<Question />
			<Question />
		</section>
	);
  }

export default App;
