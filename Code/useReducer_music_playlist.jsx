// Example: Music Playlist Manager
import React, { useReducer, useState } from 'react';

// 1. Define Initial State
const initialState = [];

// 2. Reducer Function
const playlistReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_SONG':
      return [...state, { id: Date.now(), name: action.payload, liked: false }];
    case 'TOGGLE_LIKE':
      return state.map((song) =>
        song.id === action.payload ? { ...song, liked: !song.liked } : song
      );
    case 'REMOVE_SONG':
      return state.filter((song) => song.id !== action.payload);
    default:
      throw new Error('Unknown action type');
  }
};

const PlaylistManager = () => {
  const [playlist, dispatch] = useReducer(playlistReducer, initialState);
  const [songName, setSongName] = useState('');

  const addSong = () => {
    if (songName.trim()) {
      dispatch({ type: 'ADD_SONG', payload: songName });
      setSongName('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Music Playlist Manager</h1>
      <input
        type="text"
        value={songName}
        onChange={(e) => setSongName(e.target.value)}
        placeholder="Add a song"
      />
      <button onClick={addSong}>Add Song</button>

      <ul>
        {playlist.map((song) => (
          <li key={song.id} style={{ margin: '10px 0' }}>
            <span
              style={{
                fontWeight: song.liked ? 'bold' : 'normal',
                cursor: 'pointer',
              }}
              onClick={() => dispatch({ type: 'TOGGLE_LIKE', payload: song.id })}
            >
              {song.name}
            </span>
            <button
              onClick={() => dispatch({ type: 'REMOVE_SONG', payload: song.id })}
              style={{ marginLeft: '10px' }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistManager;