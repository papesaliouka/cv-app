import React from 'react';
import Section from '../section/section.component';
import Button from '../button/button.component';


const View = ({sections, handleInput}) =>{
	return(
		<div>
			<article className="">
			  <div className="">
			   {
				 sections.map(section=> {
					 return(
						 <Section title= {section.title} labels = {section.labels} key={section.title} handleInput={handleInput}/>
					 );
				 })  
			   }
			   <div style={{'display' : 'flex', 'justifyContent':'space-around'}}>
					<Button add>Add</Button>
					<Button modify>Delete</Button>
			   </div>
			  </div>
			</article>
		</div>
	);
}
export default View;