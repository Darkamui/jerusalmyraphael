import React from "react";
import { Link } from "react-router-dom";
import { images } from "../assets";
const About = () => {
	return (
		<section id="about">
			<div className="aboutContainer">
				<div className="aboutTitleContainer">
					<h3>Sur Raphaël Jerusalmy</h3>
					<img src={images.undertitle} alt="" />
				</div>
				<div className="aboutContent">
					<div className="aboutLeft">
						<p>
							Diplômé de l’École Normale Supérieure, après ses études, il
							s'engage dans l'armée israélienne, au sein de laquelle il évolue
							rapidement vers le service de renseignement.
							<br /> <br />
							Après une quinzaine d'années, il prend sa retraite de l'armée et
							mène des actions éducatives et humanitaires, puis devient
							négociant en livres anciens à Tel Aviv.
							<br /> <br />
							Il est également expert sur la chaîne de télévision I24news.
						</p>
						<div className="aboutBtnContainer">
							<Link to="/" className="primary-button">
								consulter la bio
							</Link>
						</div>
					</div>
					<div className="aboutRight">
						<img src={images.raphy} alt="" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
