import prisma from "@/lib/prisma";
const { hash, compare } = require("bcryptjs");

const userController = {
	async createUser({ username, password }) {
		const hashedPassword = await hash(password, 8);

		const user = await prisma.Users.create({
			data: {
				username: username,
				password_hash: hashedPassword,
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

		return { username: user.username };
	},
};

export default userController;
