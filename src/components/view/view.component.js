import React from 'react';
import Input from '../input/input.component'

const View = () =>{
	return(
		<div>
			<article className="mw5 mw6-ns center pt4">
			  <div className="aspect-ratio aspect-ratio--1x1 mb4">
			    <div className="aspect-ratio--object cover" >
			    <div>
					<fieldset id="favorite_movies" class="bn">
						<legend class="fw7 mb2">Personnal Information</legend>
						<Input email='email'/>
			    		<Input name='name'/>
			    		<Input number='number'/>
					</fieldset>
				</div>
			    </div>
			  </div>
			</article>
		</div>
	);
}

export default View;