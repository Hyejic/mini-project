import { Routes, Route } from 'react-router-dom';
import { Home } from './routes/Home';
import { Detail } from './routes/Detail';
import './css/common.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
