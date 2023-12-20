import React from 'react';
import { useState } from 'react';
import './App.css';
import Searchbar from './components/searchbar/Searchbar';
import SearchResult from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';

function App() {
  const [search, setSearch] = useState("");

  const [tracks, setTracks] = useState([
    {name: "Starboy", artist: "The Weeknd", album: "Starboy", id: 1,},
    {name: "Hello", artist: "Justin Bieber", album: "I'am okay", id: 2,},
    {name: "Side by side", artist: "Coolboy", album: "Cold", id: 3,},
    {name: "Sorry", artist: "Tommy G", album: "Elemor", id: 4,},
  ])
  //playlist számai és playlist neve
  const [pltracks, setPltracks] = useState([]);
  const [plname, setPlname] = useState("");

  function addToPlaylist(track,trackid){
    
    let bennevan = false;
    if(pltracks.length>=1){
      for(let i = 0; i<pltracks.length; i++){
        if(pltracks[i].id===trackid){
          bennevan=true;
        }
      }
    }
    if(bennevan===false){
      setPltracks((prev)=> {return [...prev,
        track
  ]});
    }
};

  function removeFromPlaylist(trackToDeleteid){
    let newPlTracks = [];
    for(let i = 0; i<pltracks.length;i++){
      if(pltracks[i].id!==trackToDeleteid){
        newPlTracks.push(pltracks[i]);
      }
    }
    setPltracks(newPlTracks);
  }

  function handleChangePl(e){
    setPlname(e.target.value);
  }
  function handleSubmitPl(e){
    e.preventDefault();
    alert(plname)
  }


  function handleChangeSearch(e){
    setSearch(e.target.value);
  };
  function handleSearch(e){
    e.preventDefault();
    alert(search)
  }
  

  return (
    <div className="App">
      <Searchbar search={search} handleChange={handleChangeSearch} handleSubmit={handleSearch}  />
      <SearchResult search={search} tracks={tracks} add={addToPlaylist} pltracks={pltracks} />
      <Playlist tracks={pltracks} plname={plname} handleChange={handleChangePl} handleSubmit={handleSubmitPl} handleRemove={removeFromPlaylist} />
    </div>
  );
}

export default App;
