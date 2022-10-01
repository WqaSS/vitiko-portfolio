import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';
import { Google, Facebook, Instagram } from 'react-bootstrap-icons';
;
function Contact(props) {

	return (
		<div>
			<Slide top>
				<div className="container">
					<h1 className="titles">Contact</h1>
					<div className="body">
						<hr/>
						<p><strong>You can find me on:</strong></p>
						<ul>
							<li>
								<a target="_blank" href="mailto:v09491115@gmail.com" rel="noreferrer"><Google size={40}/></a>
							</li>
							<li>
								<a target="_blank" href="https://www.facebook.com/profile.php?id=100073700801848" rel="noreferrer"><Facebook size={40}/></a>
							</li>
							<li>
								<a target="_blank" href="https://instagram.com/vitico.plm" rel="noreferrer"><Instagram size={40}/></a>
							</li>
						</ul>
						<Link className="cross" to="/">🍩 <span>Go back</span></Link>
						<hr className="hr"/>
					</div>
				</div>
			</Slide>
		</div>
	)
}

export default Contact;