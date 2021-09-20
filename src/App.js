import Email from "./component/Email";
import TitleHeader from './component/Header';
import Question from './component/Question';
import './App.css';

function App() {
  return (
		<section className="content">
			<TitleHeader /><br/>
			<Email /><br/>
			<Question /><br/>
			<Question /><br/>
			<Question /><br/>
			<Question /><br/>
			<Question /><br/>
			<Question /><br/>
		</section>
	);
  }

export default App;
