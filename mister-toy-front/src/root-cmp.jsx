import { Route, Routes } from 'react-router-dom';
import { AppHeader } from './cmps/app-header.jsx';
import { ToyApp } from './views/toy-app.jsx';


import './assets/css/main.css'
import { ToyDetails } from './views/toy-details.jsx';
import { ToyEdit } from './views/toy-edit.jsx';

function App() {
  return (
    <div className="main-app">
      <AppHeader />
      <main className='container'>
        <Routes>
          <Route path='toy/edit/:id' element={<ToyEdit />} />
          <Route path='toy/edit' element={<ToyEdit />} />
          <Route path='' element={<ToyApp />} />
          <Route path='toy/:id' element={<ToyDetails />} />
        </Routes>
      </main>
      <footer>
        <section className='container'>
          Mister Toy 2022 &copy;
        </section>
      </footer>
    </div>
  );
}

export default App;

