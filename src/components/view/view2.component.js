import React from 'react';
import Input from '../input/input.component';

const View2 = ()=>{
	return(
		<div>
			<article className="mw5 mw6-ns center pt4" >
			  <div className="aspect-ratio aspect-ratio--4x6 mb4">
				  <main className=' ml4 bg-dark-blue' style={{'width':'80%', 'height': '100%' }}>
				  	<div className="fl w-30 bg-near-white tc">
						<div style= {{'minHeight': '80vh'}}>
					  		<fieldset id="favorite_movies" class="bn">
								<legend class="fw7 mb2">Personnal Information</legend>
								<div>
								</div>
							</fieldset>
						</div>	
					</div>
					<div className="fl w-70 bg-white tc">
						<div style= {{'minHeight': '80vh'}}>
								<fieldset id="favorite_movies" class="bn">
									<legend class="fw7 mb2">Personnal Information</legend>
									<div>
									</div>
								</fieldset>
						</div>	
					</div>
				  </main>
			  </div>
			</article>
		</div>
	);
}

export default View2;