import { useState, useEffect, JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal } from 'react';
import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Favs() {
    var favoritos:any = [];
    favoritos = localStorage.getItem('favoritos');

    
    const imagePath = 'https://www.themoviedb.org/t/p/w220_and_h330_face/';

    return (
        <div className="container">
            <a className='btn btn-info m-3' href="/">Home</a>
            <div className="row">
                <div className="col text-center">
                    <h2>Favoritos</h2>
                    <ListGroup>
                    {JSON.parse(favoritos)?.map((favorit: { id: Key | null | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; overview: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; poster_path: string; }) => (
                            <ListGroup.Item key={favorit.id}>
                                <div className="text-center">
                                    <h4>{favorit.title}</h4>
                                    <p>{favorit.overview}</p>
                                    <img src={imagePath + favorit.poster_path} alt="" />
                                </div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </div>
            </div>
        </div >
    );
}
export default Favs;