import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pelicula } from '../../interface/Pelicula';
import { Link } from 'react-router-dom';

function Favs() {

    const imagePath = 'https://www.themoviedb.org/t/p/w220_and_h330_face/';
    const favoritos: Array<Pelicula> = JSON.parse(localStorage.getItem('favoritos') ?? 'null');
    const [listfavoritos, setListfavoritos] = useState<Pelicula[]>(favoritos)

    function clearLocalStorage() {
        localStorage.removeItem('favoritos');
        setListfavoritos([]);
    }

    function seeThisFilm(item: any) {
        //pasar a una ruta por props la informacion del item.id
    }

    return (
        <>
            <div className="container">
                <Link className='btn btn-info m-3' to="/">Home</Link>
                <button className='btn btn-success m-3'
                    onClick={clearLocalStorage}
                > Eliminar lista
                </button>
                <div className="row">
                    <div className="col text-center">
                        <h2 className=''>Favoritos</h2>
                        <ListGroup>
                            {listfavoritos?.map((favorit) => (
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