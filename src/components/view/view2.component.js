import React from 'react';
import Scroll from '../scroll/scroll.component';
import Section2 from '../section2/section2.component';

const View2 = ({sections, formData})=>{
	return(
		<div>
			<Scroll>
				{
					sections.map(section => <Section2 data={section.title} labels={section.labels} formData={formData} key={section.title}/>)
				}
			</Scroll>
		</div>
	);
}

export default View2;
