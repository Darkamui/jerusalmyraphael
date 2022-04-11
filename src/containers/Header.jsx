import React from "react";
import { Link } from "react-router-dom";
import { images } from "../assets";
const Header = () => {
	return (
		<header>
			<div className="headerContainer">
				<div className="leftHeader">
					<img src={images.inAbsentia} alt="" />
				</div>
				<div className="rightHeader">
					<h2 className="headerTitle">
						Imprévisible et subtilement engagé, Raphaël Jerusalmy orchestre
						brève la rencontre cruciale de deux destins et accomplit un tour de
						force romanesque stupéfiant.
					</h2>
					<p className="headerText">
						Au Struthof (seul camp de concentration nazi ouvert sur le sol
						français), Pierre Delmain, écrivain et déporté politique, endosse un
						rôle déterminant : à mains nues, convoquant ses forces ultimes, il
						achève les déportés quand leur état les rend impropres aux «
						expériences scientifiques » menées sur place. Avec douceur,
						empathie, humanité. Il ne se le pardonne pas pour autant. Alors il
						s’échappe. Dans ses rêves. Littéralement.
						<br />
						<br />À Paris, Saül Berstein, collectionneur d’art, retarde dans les
						vapeurs de mescaline et la fréquentation de la beauté le moment de
						croire à la violence et à la laideur extrêmes de l’horreur qui le
						traque.
					</p>
					<div className="headerBtnContainer">
						<Link to="/" className="primary-button">
							en savoir plus
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
