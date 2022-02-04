import { Routes, Route } from 'react-router-dom';
import { Home } from './routes/Home';
import { Detail } from './routes/Detail';
import { Error } from './routes/Error';
import {User} from './routes/User';
import './css/common.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
