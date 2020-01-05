import React from 'react';
import Input from './InputField';
import Button from './Button';

class FormContainer extends React.Component {
	constructor(props) {
		super(props);
		this.songNameHandler = this.songNameHandler.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.state = {
			songName: '',
		};
	}

	// Updates the song name in the state as user types in the field.
	songNameHandler(event) {
		this.setState({ songName: event.target.value });
	}

	// Inserts current state into database.
	handleFormSubmit(event) {
		event.preventDefault();
		alert('Look for a way to write into json');
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
				<Button inputType="submit" value="Submit " form="main-form" />
				<Button inputType="reset" value="Clear Form" form="main-form" />
			</form>
		);
	}
}

export default FormContainer;
