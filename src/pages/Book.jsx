import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MovieState } from "../utils";
import { images } from "../assets";

const Book = () => {
	const location = useLocation();
	const url = location.pathname.substring(6);
	const [books] = useState(MovieState);
	const [book, setBook] = useState(null);
	useEffect(() => {
		books.forEach((book) => {
			if (book.url === url) {
				setBook(book);
			}
		});
	}, [books, url]);
	return (
		<div>
			{book ? (
				<main id="book">
					<div className="bookPageContainer">
						<div className="rightBook">
							<img src={book.img} alt="" />
						</div>
						<div className="leftBook">
							<h2>{book.title}</h2>
							<p className="dateText">Paru le {book.date}</p>
							<p className="descText">{book.description}</p>
							<div className="buyBtnContainer">
								<p className="buyText">Commandez maintenant:</p>
								<div className="buyBtn">
									<img src={images.amazon} alt="" />
								</div>
								<div className="buyBtn">
									<img src={images.fnac} alt="" />
								</div>
								<div className="buyBtn">
									<img src={images.rakuten} alt="" />
								</div>
							</div>
							<div className="bgBlock"></div>
						</div>
					</div>
				</main>
			) : (
				"No book to display.."
			)}
		</div>
	);
};

export default Book;
