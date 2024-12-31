import React, { useState, useCallback } from 'react';

const Song = React.memo(({ song, onPlay }) => {
  console.log(`Rendering Song: ${song.title}`);
  return (
    <div>
      <span>{song.title}</span>
      <button onClick={() => onPlay(song.id)}>Play</button>
    </div>
  );
});

const Playlist = () => {
  const [songs, setSongs] = useState([
    { id: 1, title: 'Shape of You' },
    { id: 2, title: 'Blinding Lights' },
    { id: 3, title: 'Levitating' },
  ]);
  const [currentSong, setCurrentSong] = useState(null);

  // Memoized play function
  const playSong = useCallback((id) => {
    const song = songs.find((song) => song.id === id);
    setCurrentSong(song);
    console.log(`Playing: ${song.title}`);
  }, [songs]); // Dependency - Only recreate if 'songs' changes

  return (
    <div>
      <h1>Playlist</h1>
      <ul>
        {songs.map((song) => (
          <Song key={song.id} song={song} onPlay={playSong} />
        ))}
      </ul>
      {currentSong && <h2>Now Playing: {currentSong.title}</h2>}
    </div>
  );
};

export default Playlist;