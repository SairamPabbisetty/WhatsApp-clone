import './App.css';
import {Routes, Route} from 'react-router-dom'
import HomePage from './component/HomePage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
