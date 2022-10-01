import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';

function Votes(props) {
	return (
		<div>
			<Slide top>
				<div className="container">
					<h1 className="titles">Votes</h1>
					<div className="body">
						<p>Incoming..</p>
						<hr/>
						<Link className="cross" to="/">🍩 <span>Go back</span></Link>
						<hr className="hr"/>
					</div>
				</div>
			</Slide>
		</div>
	)
}

export default Votes;