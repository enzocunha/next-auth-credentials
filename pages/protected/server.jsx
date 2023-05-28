import { authOptions } from "pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { useSession } from "next-auth/react";

export async function getServerSideProps(context) {
	const session = await getServerSession(
		context.req,
		context.res,
		authOptions
	);

	return {
		props: {
			session,
		},
	};
}

export default function ServerPage() {
	const { data: session } = useSession();

	if (!session) {
		return <p>Access Denied</p>;
	}

	return (
		<main>
			<h1>Protected Page rendered in the Server</h1>
			<p>You can view this page because you are signed in.</p>
		</main>
	);
}
