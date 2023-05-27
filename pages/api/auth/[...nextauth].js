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
					placeholder: "jsmith",
				},
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials, req) {
                const { username, password } = credentials;

				const user = await userController.getUser({ username, password });

                return user;
			},
		}),
	],
};

export default NextAuth(authOptions);
