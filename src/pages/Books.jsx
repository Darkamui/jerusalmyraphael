import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MovieState } from "../utils";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Books = () => {
	const [books, setBooks] = useState(MovieState);
	useEffect(() => {
		setBooks(MovieState);
	}, []);

	return (
		<main id="books">
			<div className="booksContainer">
				{books.map((book) => (
					<div className="bookContainer" key={book.title}>
						<Link to={`/books${book.url}`} state={{ book: book }}>
							<LazyLoadImage alt={book.title} src={book.img} />
						</Link>
					</div>
				))}
			</div>
		</main>
	);
};

export default Books;
