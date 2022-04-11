import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MovieState } from "../utils";
const Books = () => {
	const [books, setBooks] = useState(MovieState);
	useEffect(() => {
		setBooks(MovieState);
	}, []);

	console.log(MovieState);
	return (
		<main id="books">
			<div className="booksContainer">
				{books.map((book) => (
					<div className="bookContainer">
						<Link to={`/books${book.url}`} state={{ book: book }}>
							<img src={book.img} alt={book.title} />
						</Link>
					</div>
				))}
			</div>
		</main>
	);
};

export default Books;
