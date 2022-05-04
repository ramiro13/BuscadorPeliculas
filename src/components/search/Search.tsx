import {useState} from 'react';
import env from "react-dotenv";
import List from '../list/List';
import 'bootstrap/dist/css/bootstrap.min.css';

function Search() {
  const tittle = env.APP_NAME;
  const [search, setSearch] = useState<any>("");
  const handleChange = (event: { target: HTMLInputElement; }) => {setSearch({ value: event.target.value })};

  return (     
    <div>
      <div className="container-flud mt-2">
        <a className='btn btn-danger m-2' href="/">Volver</a>
      </div>
      <div className="text-center mt-3">
          <form>
            <input type="text" value={search.value??''} onChange={handleChange} />
            <p>Estas buscando peliculas - {search.value}</p>
          </form>
            <List query={search.value??''}/>
      </div>
    </div>
  );
}

export default Search;
