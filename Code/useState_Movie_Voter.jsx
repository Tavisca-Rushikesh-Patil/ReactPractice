// We’re building a Movie Voting App where users can vote for their favorite movies. We’ll use useState to track the vote count.
import React, { useState } from 'react';

const MovieVotingApp = () => {
  // Step 1: Declare states for votes
  const [inceptionVotes, setInceptionVotes] = useState(0);
  const [avatarVotes, setAvatarVotes] = useState(0);

  // Step 2: Update votes using setState
  const voteForInception = () => setInceptionVotes(inceptionVotes + 1);
  const voteForAvatar = () => setAvatarVotes(avatarVotes + 1);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Movie Voting App 🎥</h1>

      <div style={{ margin: '10px 0' }}>
        <h3>Inception - {inceptionVotes} votes</h3>
        <button onClick={voteForInception}>Vote for Inception</button>
      </div>

      <div style={{ margin: '10px 0' }}>
        <h3>Avatar - {avatarVotes} votes</h3>
        <button onClick={voteForAvatar}>Vote for Avatar</button>
      </div>
    </div>
  );
};

export default MovieVotingApp;
