import React from 'react';
import View from '../view/view.component';
import View2 from '../view/view2.component';
const ViewWrapper = ()=>{
	return(
		<article class="cf">
		  <div class="fl w-50 bg-near-white tc">
		    <View/>
		  </div>
		  <div class="fl w-50 bg-light-gray tc">
		  	<View2/>
		  </div>
		</article>
	);
}

export default ViewWrapper;