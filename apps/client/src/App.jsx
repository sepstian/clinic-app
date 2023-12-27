import { Route, Routes, useNavigate } from 'react-router-dom'
import "./App.css";
import LoginPage from './pages/Login/Login';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
      </Routes>
    </>
  );
}

export default App;
