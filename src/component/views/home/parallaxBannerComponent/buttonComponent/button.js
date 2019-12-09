import React from 'react';
import {Link} from 'react-router-dom';
import './button.css';

const Button =()=>{
	return(
		<div>
			<Link to="/tourism-in-Budapest" className='button primary'>Read more</Link>
		</div>
	)
}

export default Button;