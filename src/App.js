import './App.css';
import {Action, Originals, Comedy, Trending, Romance, Horror} from './urls'
import Banner from './Componets/Banner/Banner';
import Navbar from './Componets/Navbar/Navbar';
import RowPoster from './Componets/RowPosters/RowPoster';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPoster url={Originals} title='Netflix Originals'/>
      <RowPoster url={Trending} isSmall title='Trending'/>
      <RowPoster url={Action} isSmall title='Action'/>
      <RowPoster url={Comedy} isSmall title='Comedy'/>
      <RowPoster url={Romance} isSmall title='Romance'/>
      <RowPoster url={Horror} isSmall title='Horror'/>
    </div>
  );
}

export default App;
