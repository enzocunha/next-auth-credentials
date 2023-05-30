import prisma from "@/lib/prisma";
const { hash, compare } = require("bcryptjs");

const userController = {
	async createUser({ username, password, name, email, image }) {
		const hashedPassword = await hash(password, 8);

		const user = await prisma.Users.create({
			data: {
				username: username,
				password_hash: hashedPassword,
				name: name,
				email: email,
				image: image,
				role: "user",
			},
		});

		return user;
	},

	async getUser({ username, password }) {
		const user = await prisma.Users.findUnique({
			where: {
				username: username,
			},
		});

		if (!user) {
			return null;
		}

		const passwordMatch = await compare(password, user.password_hash);

		if (!passwordMatch) {
			return null;
		}

		// Destructure the user object and return everything except the password_hash
		const { password_hash, ...rest } = user;

		return rest;
	},
};

export default userController;
