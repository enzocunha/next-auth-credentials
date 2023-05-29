import { useState } from "react";
import { signIn } from "next-auth/react";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        name,
        email,
        image,
      }),
    });

    console.log(res.status);

    if (res.status === 201) {
      signIn("credentials", { username, password, callbackUrl: "/" });
    }
  };

  return (
    <form
      className="flex flex-col justify-center items-center w-full max-w-md bg-white rounded-lg shadow-lg p-6"
      method="post"
      onSubmit={handleSubmit}
    >
      <h2 className="text-center text-2xl mb-6">Sign Up</h2>

      <div className="w-10/12 mb-4">
        <label
          htmlFor="username"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Username*
        </label>
        <input
          name="username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>

      <div className="w-10/12 mb-4">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Password*
        </label>
        <input
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>

      <div className="w-10/12 mb-4">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Email*
        </label>
        <input
          name="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>

      <div className="w-10/12 mb-4">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          name="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="w-10/12 mb-6">
        <label
          htmlFor="image"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Image Source
        </label>
        <input
          name="image"
          type="text"
          onChange={(e) => setImage(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="w-10/12 flex justify-center gap-4">
        <button
          onClick={() => signIn()}
          className="w-1/2 text-center px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Go back
        </button>

        <button
          type="submit"
          className="w-1/2 text-center px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
}
