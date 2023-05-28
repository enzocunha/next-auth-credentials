import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import userController from "@/controllers/userController";

export const authOptions = {
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				username: {
					label: "Username",
					type: "text",
				},
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials, req) {
                const { username, password } = credentials;

				const user = await userController.getUser({ username, password });

				// Adding placeholder parameters since server getServerSession expects them
                return { ...user, name: 'test', email: 'test@test.com', image: 'https://www.gravatar.com/avatar/1234567890abcdef1234567890abcdef?d=mp&size=200' };
			},
		}),
	],
	// Custom auth pages
	pages: {
		signIn: "/login",
	},
};

export default NextAuth(authOptions);
