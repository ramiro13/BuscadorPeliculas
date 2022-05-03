import { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import env from "react-dotenv";
import 'bootstrap/dist/css/bootstrap.min.css';

function List(props: any) {
    const [items, setItems] = useState<any[]>([]);
    const [favorite, setFavorite] = useState<any[]>([]);
    
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${env.API_KEY}&query=${props.query}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result.results);
                }
            )
    }, [props.query])

    function saveFavorite(item: any) {
       // console.log([localStorage.getItem('favoritos')]);
       
        const value = localStorage.getItem('favoritos');
         
        console.log(item)
        if(!value){
            console.log("vacio",item);
            setFavorite(items => [...items, item])
            localStorage.setItem('favoritos', JSON.stringify([item]));
        
        }else{
            let newValue = JSON.parse(value);
            newValue.push(item);
            //aqui hay que decir si existe pongo lo que existe mas lo que esta nuevo 
            setFavorite(items => newValue)
            localStorage.setItem('favoritos', JSON.stringify(favorite));
        
        }
       
    }

    function deleteFavorite(item: any) {
        favorite.filter(() => item.id !== item.id);
        localStorage.setItem('favoritos', JSON.stringify(favorite));
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
                                        <button className='btn btn-success'
                                            onClick={
                                                () => saveFavorite(item)
                                            }
                                            >Añadir a favoritos
                                        </button>
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
                                    <img src={imagePath + favorit.poster_path} alt="" />
                                        <button className='btn btn-success' onClick={
                                                () => deleteFavorite(favorit.id)}
                                            >Eliminar de favoritos
                                        </button>
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