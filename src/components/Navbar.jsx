import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="bgContainer">
			<nav>
				<div className="logoContainer">
					<p className="logoText">Raphaël Jerusalmy</p>
				</div>
				<div className="navLinksContainer">
					<ul className="navLinksList">
						<li>
							<Link to="" className="navLink">
								Accueil
							</Link>
						</li>
						<li>
							<Link to="/books" className="navLink">
								Oeuvres
							</Link>
						</li>
						<li>
							<Link to="/biographie" className="navLink">
								Biographie
							</Link>
						</li>
						<li>
							<a href="mailto:sjerusalmy@gmail.com" className="navLink">
								Contact
							</a>
						</li>
					</ul>
				</div>
				<div className="manuelContainer">
					<a
						href="https://manuelbleu.com"
						target="_blank"
						rel="noopener noreferrer"
						className="primary-button"
					>
						Le Manuel Bleu
					</a>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
