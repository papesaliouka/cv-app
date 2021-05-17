import React from 'react';

const Button =(props)=>{
	return(
		<div>
			<button type='button' className = 'f6 fw4 no-underline black-70 dn dib-ns pv2 ph3 mt3'>
				{props.delete? 'Delete' : props.submit ? 'Submit' : props.edit ? 'Edit' :  'Download'}
			</button>
		</div>
	);
}

export default Button;