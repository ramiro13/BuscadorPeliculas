import {useState} from 'react';
import List from '../list/List';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Search() {
  const [search, setSearch] = useState<any>("");
  const handleChange = (event: { target: HTMLInputElement; }) => {setSearch({ value: event.target.value })};

  return (     
    <div>
      <div className="container-flud mt-2">
        <Link className='btn btn-danger m-2' to="/">Volver</Link>
      </div>
      <div className="text-center mt-3">
          <form>
            <p>Buscador</p>
            <input className='caret-pink-500 border border-slate-300' type="text" value={search.value??''} onChange={handleChange} />
            <p>Estas buscando peliculas - {search.value}</p>
          </form>
          <List query={search.value??''}/>
      </div>
      <div>
          <img src="https://res.cloudinary.com/deexdnajd/image/upload/v1651677746/26102_gcqawq.jpg" alt="background" width="100%"/>
        </div>
    </div>
  );
}

export default Search;
