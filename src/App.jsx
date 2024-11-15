import { useEffect, useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import Signup from "./components/Signup";
import SignIn from "./components/SignIn"; 

async function fetchProduct() {
	const data = await fetch("https://dummyjson.com/products", {
		method: "GET",
	})
		.then((res) => res.json())
		.then((data) => data);

	return data;
}

function App() {
	const [product, setProduct] = useState([]);
	const [showSignup, setShowSignup] = useState(true); 

	useEffect(() => {
		fetchProduct().then((data) => setProduct(data.products));
	}, []);

	return (
		<>
			{/* Toggle between Signup and SignIn */}
			<div className="flex justify-center space-x-4 mb-4">
				<button
					className={`py-2 px-4 ${showSignup ? "bg-blue-500 text-white" : "bg-gray-200"}`}
					onClick={() => setShowSignup(true)}
				>
					Sign Up
				</button>
				<button
					className={`py-2 px-4 ${!showSignup ? "bg-blue-500 text-white" : "bg-gray-200"}`}
					onClick={() => setShowSignup(false)}
				>
					Sign In
				</button>
			</div>

			{/* Conditional rendering of Signup or SignIn */}
			{showSignup ? <Signup /> : <SignIn />}

			<main className='relative justify-center grid grid-cols-3 gap-10 items-center text-center'>
				{product.map((data, i) => {
					return (
						<ProductCard
							key={i}
							props={data}
						/>
					);
				})}
			</main>
		</>
	);
}

export default App;