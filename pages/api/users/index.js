import userController from "@/controllers/userController";

export default async function handler(req, res) {
	const { method } = req;

	switch (method) {
		case "POST":
            try {
                const { username, password } = req.body;

                if (!username || !password) {
                    return res.status(400).json({error: "Username and password are required"});
                }

                const user = await userController.createUser({ username, password });
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