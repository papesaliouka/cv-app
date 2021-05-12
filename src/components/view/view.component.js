import React from 'react';
import Input from '../input/input.component';
import Button from '../button/button.component';
import Label from '../label/label.component';
const View = () =>{
	return(
		<div>
			<article className="mw5 mw6-ns center pt4">
			  <div className="aspect-ratio aspect-ratio--4x6 mb4">
			    <div>
					<fieldset id="favorite_movies" class="bn">
						<legend class="fw7 mb2">Personnal Information</legend>
						<div>
						<Label name/>
						<Input />
						<Label email/>
			    		<Input />
						<Label number/>
			    		<Input />
						<div style={{'display': 'flex', 'justifyContent': 'space-between'}}>
							<Button add={'Add'}/>
							<Button delete={'delete'}/>
						</div>
						</div>
					</fieldset>
				</div>
			    <div>
					<fieldset id="favorite_movies" class="bn">
						<legend class="fw7 mb2">Experience</legend>
						<div>
							<Label position  />
							<Input />
							<Label company/>
							<Input />
							<Label task/>
							<Input />
							<div style={{'display': 'flex', 'justifyContent': 'space-between'}}>
								<Button delete={'Delete'}/>
								<Button add={'Add'}/>
							</div>							
						</div>
					</fieldset>
			    </div>
			    <div>
					<fieldset id="favorite_movies" class="bn">
						<legend class="fw7 mb2">Education</legend>
						<div>
							<Label school/>
							<Input />
							<Label date />
							<Input />
							<Label grade/>
							<Input />
							<div style={{'display': 'flex', 'justifyContent': 'space-between'}}>
								<Button add='Add'/>
								<Button delete={'Delete'}/>
							</div>
						</div>
					</fieldset>
			    </div>
			  </div>
			</article>
		</div>
	);
}

export default View;