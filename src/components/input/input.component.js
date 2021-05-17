import React from 'react';

const Input = ({name, handleSubmit})=>{
	return(
		<div className="measure">
            <label  className="f6 b db mb2">{name}</label>
            <input  className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" onChange={handleSubmit} name={name} />
        </div>
	);
}

export default Input