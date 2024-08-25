import CongratsPage from './component/congratsPage.jsx';
import InputName from './component/inputName.jsx';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<InputName />} />
    <Route path="/congratsPage" element={<CongratsPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
