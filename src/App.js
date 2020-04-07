import React from 'react';
import FormContainer from './components/Form/FormContainer';
import Playlist from './components/List/Playlist';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<FormContainer />
				<Playlist />
			</header>
		</div>
	);
}

export default App;
