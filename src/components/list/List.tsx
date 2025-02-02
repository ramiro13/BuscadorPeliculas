import React, { useState, useEffect } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import env from "react-dotenv";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pelicula } from '../../interface/Pelicula';

function List(props: any) {
    const [items, setItems] = useState<Pelicula[]>([]);
    const favoritos: Array<Pelicula> = JSON.parse(localStorage.getItem('favoritos') ?? 'null');
    const [favorite, setFavorite] = useState<Pelicula[]>(favoritos);

    useEffect(() => {
        if (props.query && props.query !== '') {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${env.API_KEY}&query=${props.query}`)
                .then(res => res.json())
                .then(
                    (result) => {
                        setItems(result.results);
                    }
                ).catch((e) => {
                    console.log("Error themoviedb", e);
                })
        } else {
            setItems([])
        }

    }, [props.query])


    function saveFavorite(item: Pelicula) {
        //si existe el id no duplicar
        const valueListNow = localStorage.getItem('favoritos');

        if (!valueListNow) {
            setFavorite([item]);
            localStorage.setItem('favoritos', JSON.stringify([item]));
        } else {
            const ifexist = favoritos.find(fav => fav.id === item.id);
            if (!ifexist) {
                let newValue = JSON.parse(valueListNow);
                newValue.push(item);
                setFavorite(newValue);
                localStorage.setItem('favoritos', JSON.stringify(newValue));
            }
        }
    }


    const imagePath = 'https://www.themoviedb.org/t/p/w220_and_h330_face/';

    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h2>Resultado</h2>
                    <ListGroup>
                        {items?.map(item => (
                            <ListGroup.Item key={item.id}>
                                <div className="text-center">
                                    <h4>{item.title}</h4>
                                    <p>{item.overview}</p>
                                    <img src={imagePath + item.poster_path} alt="" />
                                    <div className="text-center m-2">
                                        <Button className='btn btn-success'
                                            onClick={
                                                () => saveFavorite(item)
                                            }
                                        >Añadir a favoritos
                                        </Button>
                                    </div>
                                </div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </div>
                <div className="col text-center">
                    <h2>Favoritos</h2>
                    <ListGroup>
                        {favorite?.map(favorit => (
                            <ListGroup.Item key={favorit.id}>
                                <div className="text-center">
                                    <h4>{favorit.title}</h4>
                                    <p>{favorit.overview}</p>
                                    <img src={imagePath + favorit.poster_path} alt="picture" />
                                </div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </div>
            </div>
        </div >
    );
}
export default List;