import React from 'react';
import Input from '../input/input.component';
import Label from '../label/label.component';


const Section= ({title, labels, handleInput})=>{
	return(
		<div>
		  <div>
			<fieldset id="favorite_movies" className="bn mt4">
			  <legend className="fw7 mb2 ">{title}</legend>
				<Label data={labels[0]} />
				<Input handleInput= {handleInput} />
				<Label data={labels[1]}/>
				<Input handleInput= {handleInput} />
				<Label data={labels[2]}/>
				<Input handleInput= {handleInput} />
			</fieldset>
			</div>
		</div>
	);
  }
  
  export default Section;