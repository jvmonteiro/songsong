import React from 'react';

/**
 * Generic button used throughout the application.
 *
 * @props:
 *  - inputType: The type of the button action (e.g. submit, reset).
 *  - clickHandler: The handler function called when the button is clicked.
 *  - name: The button name that'll be sent when it's clicked..
 *  - value: The value of the button that'll be sent when it's clicked.
 */
const Button = (props) => {
	return (
		<section className="btn">
			<button
				type={props.inputType}
				value={props.value}
				onClick={props.clickHandler}
				form={props.formId}>
				{props.value}
			</button>
		</section>
	);
};

export default Button;
