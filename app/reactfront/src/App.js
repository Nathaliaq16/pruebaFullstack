import logo from './logo.svg';
import './App.css';

//importamos los componentes
import CompShowBlogs from './blog/ShowBlogs';
import CompCreateBlog from './blog/CreateBlog';
import CompEditBlog from './blog/EditBlog';

//importamos el router
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
              
      </header>
      <BrowserRouter>
        <Routes>
            <Route path='/create' element={ <CompShowBlogs />} />
            <Route path='/' element={ <CompCreateBlog />} />
            <Route path='/edit/:id' element={ <CompEditBlog />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
