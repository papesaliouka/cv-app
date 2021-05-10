import React from 'react';
import Button from '../button/button.component.js';
import './header.styles.css';

const Header = ()=>{
	return(
		<header className=' header bg-black-90  w-100 ph3 pv3 pv4-ns ph4-m ph5-l'>
			<span className='f2 dim white dib mr3'>Title</span>
			<Button className= 'link dim white dib mr3'/>
		</header>
	);
}


export default Header;