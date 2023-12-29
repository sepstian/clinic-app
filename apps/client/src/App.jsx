import { Route, Routes, useNavigate } from 'react-router-dom'
import "./App.css";
import DetailPage from "./pages/DetailPage";
import QueuePage from "./pages/quequePage";
import LoginPage from './pages/Login/Login';

function App() {
  return (
    <>
      <QueuePage/>
      {/* <DetailPage/> */}
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
      </Routes>
    </>
  );
}

export default App;
