import { useSession } from "next-auth/react";

export default function ClientPage() {
	// required: true makes so that if there is no active session, this page will redirect to the login page
	const { data: session } = useSession();

	if (!session) {
		return <p>Access Denied</p>;
	}

	return (
		<main>
			<h1>Protected Page rendered in the Client</h1>
			<p>You can view this page because you are signed in.</p>
		</main>
	);
}
