import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className='container-flex bg-dark'>
      <div className="row">
        <div className="text-center">
          <h1 className='bg-white text-3xl font-bold underline p-3' >Prueba técnica Ramiro</h1>
        </div>
        <div className="col text-center p-2">
          <Link className='btn btn-info m-3' to="favs">Ver peliculas favorita</Link>
        </div>
        <div className="col text-center p-2">
          <Link className='btn btn-info m-3' to="search">Busca tu pelicula favorita</Link>
        </div>
      </div>
      <div className="text-center mt-5">
      </div>
      <div>
        <img src="https://res.cloudinary.com/deexdnajd/image/upload/v1651677746/26102_gcqawq.jpg" alt="fondo" width="100%" />
      </div>
    </div>
  );
}

export default App;
