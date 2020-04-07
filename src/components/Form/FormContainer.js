import React from 'react';
import Input from './InputField';
import Button from './Button';
import crypto from 'crypto';

class FormContainer extends React.Component {
	constructor(props) {
		super(props);
		this.songNameHandler = this.songNameHandler.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleFormClear = this.handleFormClear.bind(this);
		this.insertSong = this.insertSong.bind(this);

		this.songs = { ...JSON.parse(localStorage.getItem('songs')) } || { songList: [] };
		this.state = {
			songName: '',
		};
	}

	// Updates the song name in the state as user types in the field.
	songNameHandler(event) {
		this.setState({ songName: event.target.value });
	}

	// Inserts current song into database.
	handleFormSubmit(event) {
		// Prevents page redirect on submit.
		event.preventDefault();
		// Creates a new object based on state (i.e. snapshot).
		// Generates new UUID to index the song. (src: https://stackoverflow.com/a/14869745)
		const uuid = crypto.randomBytes(20).toString('hex');
		const songData = Object.assign({ id: uuid }, this.state);
		// Inserts song into database.
		this.songs.songList.push(songData);
		this.insertSong(JSON.stringify(this.songs));
		// Resets form.
		this.handleFormClear(event);
		window.location.reload();
	}

	handleFormClear(event) {
		this.setState({ songName: '' });
	}

	insertSong(data) {
		localStorage.setItem('songs', data);
	}

	render() {
		return (
			<form className="form-container" onSubmit={this.handleFormSubmit} id="main-form">
				<h2>{this.props.headingText}</h2>
				<div>
					<span>{this.state.songName}</span>
					<Input
						name={'song-name'}
						inputType={'text'}
						value={this.state.songName}
						placeholder={"What's the song called?"}
						changeHandler={this.songNameHandler}
					/>
				</div>
				<Button
					inputType="submit"
					value="Submit "
					form="main-form"
					clickHandler={this.handleFormSubmit}
				/>
				<Button
					inputType="reset"
					value="Clear Form"
					form="main-form"
					clickHandler={this.handleFormClear}
				/>
			</form>
		);
	}
}

export default FormContainer;
