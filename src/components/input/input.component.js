import React from 'react';

const Input = (props)=>{
	return(
	  <div className="mt3 mb3">
        <label className="db fw4 lh-copy f6" for="email-address">{props.name ? props.name: props.email?props.email:props.number }</label>
        <input className="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address"  id="email-address"/>
      </div>
	);
}

export default Input