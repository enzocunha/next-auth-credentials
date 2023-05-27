import prisma from "@/lib/prisma";
const {hash} = require("bcryptjs");

const userController = {
	async createUser({username, password}) {
        const hashedPassword = await hash(password, 8);

        const user = await prisma.Users.create({
            data: {
                username: username,
                password_hash: hashedPassword,
            }
        });

        return user;
    },
};

export default userController;