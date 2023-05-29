import { useState } from "react";
import { signIn } from "next-auth/react";

export default function SignIn() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		signIn("credentials", { username, password, callbackUrl: "/" });
	};

	return (
		<form
			className="flex flex-col justify-center items-center w-full max-w-md bg-white rounded-lg shadow-lg p-6"
			method="post"
			onSubmit={handleSubmit}
		>
			<h2 className="text-center text-2xl mb-6">Login</h2>

			<div className="w-10/12 mb-4">
				<label
					htmlFor="email"
					className="block mb-2 text-sm font-medium text-gray-700"
				>
					Username
				</label>
				<input
					name="username"
					type="text"
					onChange={(e) => setUsername(e.target.value)}
					className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
					required
				/>
			</div>

			<div className="w-10/12 mb-6">
				<label
					htmlFor="password"
					className="block mb-2 text-sm font-medium text-gray-700"
				>
					Password
				</label>
				<input
					name="username"
					type="password"
					onChange={(e) => setPassword(e.target.value)}
					className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
					required
				/>
			</div>

			<div className="w-10/12 flex justify-center">
				<button
					type="submit"
					className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
				>
					Log In
				</button>
			</div>
		</form>
	);
}
