import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';

function About(props) {
	return (
		<div>
			<Slide top>
				<div className="container">
					<h1 className="titles">About me</h1>
					<div className="body">
						<hr/>
						<p>
						Hello, my name is Victor Palma (vitico).<br/> 
						I'm a 14 yo' fullstack web developer who loves Js, Py, PHP, C++, BasketBall, Football, cigarettes & their family<br/>
						</p>
						<Link className="cross" to="/">🍩 <span>Go back</span></Link>
						<hr className="hr"/>
					</div>
				</div>
			</Slide>
		</div>
	)
}

export default About;