import React from 'react';
import Input from './InputField';
import Button from './Button';
import songs from 'data/songs.json';
import crypto from 'crypto';

class FormContainer extends React.Component {
	constructor(props) {
		super(props);
		this.songNameHandler = this.songNameHandler.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleFormClear = this.handleFormClear.bind(this);
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
		const songData = Object.assign({}, this.state);
		// Generates new UUID to index the song. (src: https://stackoverflow.com/a/14869745)
		const uuid = crypto.randomBytes(20).toString('hex');
		// Inserts song into database.
		songs[uuid] = songData;
		console.table(songs);
		// Resets form.
		this.handleFormClear(event);
	}

	handleFormClear(event) {
		this.setState({ songName: '' });
	}

	render() {
		return (
			<form
				className="form-container"
				onSubmit={this.handleFormSubmit}
				id="main-form">
				<h2>{this.props.headingText}</h2>
				<div>
					<span>{this.state.songName}</span>
					<Input
						name={'song-name'}
						inputType={'text'}
						value={this.state.songInfo}
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
