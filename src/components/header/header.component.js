import React from 'react';
import './header.styles.css';

const Header = ()=>{
	return(
		<div style={{'display': 'flex', 'justifyContent' : 'center'}}>
			<header className=' header bg-black-90  tc w-100 ph3 pv3 pv4-ns ph4-m ph5-l'>
				<span className='f2 dim white dib'>CV APP</span>
			</header>
		</div>
	);
}


export default Header;