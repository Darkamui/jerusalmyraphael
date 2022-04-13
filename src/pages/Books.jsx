import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MovieState } from "../utils";
import {
	LazyLoadImage,
	LazyLoadComponent,
	trackWindowScroll,
} from "react-lazy-load-image-component";
const Books = ({ scrollPosition }) => {
	const [books, setBooks] = useState(MovieState);
	useEffect(() => {
		setBooks(MovieState);
	}, []);

	return (
		<main id="books">
			<div className="booksContainer">
				{books.map((book) => (
					<LazyLoadComponent key={book.title} scrollPosition={scrollPosition}>
						<div className="bookContainer">
							<Link to={`/books${book.url}`} state={{ book: book }}>
								<LazyLoadImage
									alt={book.title}
									src={book.img}
									delayMethod="debounce"
									scrollPosition={scrollPosition}
								/>
							</Link>
						</div>
					</LazyLoadComponent>
				))}
			</div>
		</main>
	);
};

export default trackWindowScroll(Books);
