import LinkSubmissionForm from './LinkSubmissionForm/LinkSubmissionForm';
import './App.css';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <h1>Link Portfolio Generator</h1>
      <header className="App-header">
        <LinkSubmissionForm />
        <Footer />
      </header>
    </div>
  );
};

export default App;
