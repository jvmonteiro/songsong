import React from 'react';

const Song = (props) => {
	return <li className="song">{props.song.songName}</li>;
};

export default Song;
