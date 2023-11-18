import FilmCard from './FilmCard';
import Filter from './Filter';

import './App.css';


function ListFilms(props) {
  const Listfilms = props.films
  const condition = props.cond
  return (
    <div className='ListFilms'>
      {Filter(Listfilms,condition).map((elt) => {
        return (
          <FilmCard titre={elt.titre} description={elt.description} posterUrl={elt.posterURL} note={elt.note} key = {elt.id}/>       
        )})}
    </div>
  );
}

export default ListFilms;