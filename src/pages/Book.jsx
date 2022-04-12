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
							{book.preview && (
								<a
									href={book.preview}
									target="_blank"
									rel="noreferrer"
									className="previewText"
								>
									Lire un extrait
								</a>
							)}
						</div>
						<div className="leftBook">
							<h2>{book.title}</h2>
							<p className="dateText">Paru le {book.date}</p>
							<p className="descText">{book.description}</p>
							<div className="buyBtnContainer">
								<p className="buyText">Commandez maintenant:</p>
								<a
									href={book.amazon}
									className="buyBtn"
									target="_blank"
									rel="noreferrer"
								>
									<img src={images.amazon} alt="" />
								</a>
								<a
									href={book.fnac}
									className="buyBtn"
									target="_blank"
									rel="noreferrer"
								>
									<img src={images.fnac} alt="" />
								</a>
								<a
									href={book.rakuten}
									className="buyBtn"
									target="_blank"
									rel="noreferrer"
								>
									<img src={images.rakuten} alt="" />
								</a>
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
