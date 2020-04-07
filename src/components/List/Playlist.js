import React, { useState } from 'react';
import Song from './Song.js';

const Playlist = (props) => {
	const data = JSON.parse(localStorage.getItem('songs'));
	let pl;
	if (data) pl = [...data['songList']];
	const [playlist, setPlaylist] = useState(pl || []);
	return (
		<section className="playlist">
			<ul className="song">
				{playlist.map((s) => (
					<Song song={s} />
				))}
			</ul>
		</section>
	);
};

export default Playlist;
