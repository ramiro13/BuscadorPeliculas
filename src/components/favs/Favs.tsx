import React , { useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pelicula } from '../../model/Pelicula';

function Favs() {
    const favoritos: Array<Pelicula>=JSON.parse(localStorage.getItem('favoritos')??'null');

    const imagePath = 'https://www.themoviedb.org/t/p/w220_and_h330_face/';
    console.log(favoritos);
    
    function clearLocalStorage() {
        //hacer peticion fetch para mas informacion de el perfil en nueva ventana
        localStorage.removeItem('favoritos');
    }

    function seeThisFilm(item: any) {
        //hacer peticion fetch para mas informacion de el perfil en nueva ventana
    }

    return (
        <>
            <div className="container">
                <a className='btn btn-info m-3' href="/">Home</a>
                <button className='btn btn-success m-3'
                        onClick={clearLocalStorage}
                    > Eliminar lista 
                </button>
                <div className="row">
                    <div className="col text-center">
                        <h2>Favoritos</h2>
                        <ListGroup>
                            {favoritos?.map((favorit) => (
                                <ListGroup.Item key={favorit.id}>
                                    <div className="text-center">
                                        <h4>{favorit.title}</h4>
                                        <p>{favorit.overview}</p>
                                        <p>hola</p>
                                        <img src={imagePath + favorit.poster_path} alt="" />
                                        <div className="text-center">
                                            <button className='btn btn-success m-3'
                                                onClick={
                                                    () => seeThisFilm(favorit)
                                                }
                                            > Ver 
                                            </button>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </div>
                </div>
            </div >
        </>
    );
}
export default Favs;