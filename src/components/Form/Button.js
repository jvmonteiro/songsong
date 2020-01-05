import React from 'react';

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
