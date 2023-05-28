import userController from "@/controllers/userController";

export default async function handler(req, res) {
	const { method } = req;

	switch (method) {
		case "POST":
            try {
                const { username, password, name, email, image } = req.body;

                if (!username || !password || !name || !email || !image) {
                    return res.status(400).json({error: "All fields are required"});
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