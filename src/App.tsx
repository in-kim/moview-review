import './App.css';
import Review from './features/review/Review';

function App() {
  const elHeight = window.innerHeight;
  return (
    <div className="App" style={{"height":elHeight}}><Review /></div>
  );
}

export default App;
