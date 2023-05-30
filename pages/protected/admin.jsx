import { useSession } from "next-auth/react";

export default function AdminPage() {
	const { data: session } = useSession();

	if (!session || session.user.role !== 'admin') {
		return <p>Access Denied. You need admin permission to see this page.</p>;
	}

	return (
		<main>
			<h1>This page can only be viewed by users with the role admin</h1>
		</main>
	);
}