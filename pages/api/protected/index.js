import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async (req, res) => {
	const session = await getServerSession(req, res, authOptions);

	if (!session) {
		res.status(401).json({ error: "Unauthorized" });
		return;
	}

	res.status(200).json({
		content:
			"This is protected content. You can access this content because you are signed in.",
	});
};
