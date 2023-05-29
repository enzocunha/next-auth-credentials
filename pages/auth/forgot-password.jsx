import { signIn } from "next-auth/react";
import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle the forgot password request
    console.log("Forgot password form submitted");
  };

  return (
    <form
      className="flex flex-col justify-center items-center w-full max-w-md bg-white rounded-lg shadow-lg p-2"
      onSubmit={handleSubmit}
    >
      <div className="w-10/12 mb-4">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          We'll send a new password to your e-mail
        </label>
        <input
          name="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>

      <div className="w-10/12 mb-4 flex gap-2">
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
          Reset Password
        </button>
      </div>
    </form>
  );
}
