
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Details from './pages/Details';
import CreateProject from './pages/CreateProject';
import EditProject from './pages/EditProject';

function App() {
  return (
    <div className="App">
    <h1 className='mt-5' style={{color: '#E8E9EB', fontSize: '60px'}} >PROJECT TRACKER</h1>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/project/details/:detailid' element={<Details/>}></Route>
      <Route path='/project/create' element={<CreateProject/>}></Route>
      <Route path='/project/edit/:editid' element={<EditProject/>}></Route>
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
