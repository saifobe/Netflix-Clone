import './App.css';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import FavList from './components/FavList/FavList';
import NavBar from './components/Navbar/NavBar';

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/favList' element={<FavList />}></Route>
    </Routes>
    </>
  );
}

export default App;
