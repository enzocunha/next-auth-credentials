import userController from "@/controllers/userController";

export default async function handler(req, res) {
	const { method } = req;

	switch (method) {
		case "POST":
            try {
                const { username, password, email } = req.body;

                if (!username || !password || !email) {
                    return res.status(400).json({error: "All fields are required"});
                }

                let { name, image } = req.body;

                if (!name) {
                    name = username;
                }

                if (!image) {
                    image = "https://www.gravatar.com/avatar/1234567890abcdef1234567890abcdef?d=mp&size=200";
                }

                const user = await userController.createUser({ username, password, name, email, image });
                res.status(201).json(user);
            } catch (error) {
                res.status(500).json({ error: "Error creating the user: " + error.message });
            }
			break;

		default:
            res.status(405).json({error: "Method not allowed"});
			break;
	}
}