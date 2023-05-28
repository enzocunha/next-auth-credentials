import { authOptions } from "pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { useSession } from "next-auth/react";

export async function getServerSideProps(context) {
	const session = await getServerSession(
		context.req,
		context.res,
		authOptions
	);

	if (!session) {
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		};
	}

	return {
		props: {
			session,
		},
	};
}

export default function ServerPage() {
	const { data: session } = useSession({ required: true });

	if (!session) {
		return <p>Access Denied</p>;
	}

	return (
		<main>
			<h1>Protected Page</h1>
			<p>You can view this page because you are signed in.</p>
		</main>
	);
}
