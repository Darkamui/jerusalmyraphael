import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Bio from "./pages/Bio";
import Book from "./pages/Book";
import Books from "./pages/Books";
import Home from "./pages/Home";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/books" element={<Books />}></Route>
				<Route path="/books/:bookName" element={<Book />}></Route>
				<Route path="/biographie" element={<Bio />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
