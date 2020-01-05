import React from 'react';

/**
 * General input field used in form submission.
 *
 * @props:
 *  - label: The form label.
 *  - name: The input field name.
 *  - inputType: The type of input field (e.g. text).
 *  - content: The content displayed in the field that'll be submitted.
 *  - placeholder: The placeholder displayed in the field.
 *  - changeHandler: function that handles submission events.
 */
const Input = (props) => {
	return (
		<section className="form-group">
			<label className="form-label" for={props.label}>
				{props.label}
			</label>
			<input
				className="form-input"
				name={props.name}
				type={props.inputType}
				value={props.content}
				placeholder={props.placeholder}
				onChange={props.changeHandler}
			/>
		</section>
	);
};

export default Input;
