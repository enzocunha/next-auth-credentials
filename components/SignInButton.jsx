import { useSession, signIn, signOut } from "next-auth/react";

export default function SignInButton() {
	const { data: session } = useSession();

	if (!session) {
		return (
			<button
				onClick={() => signIn()}
				className="flex gap-2 items-center justify-start px-4 h-12 font-bold text-gray-800 hover:bg-gray-100 hover:rounded-lg"
			>
				Sign in
			</button>
		);
	}

	return (
		<button onClick={() => signOut()} className="flex gap-2 items-center justify-start px-4 h-12 font-bold text-gray-800 hover:bg-gray-100 hover:rounded-lg">
			<img src={session.user.image} alt="" className="h-8 rounded-full" />
			Sign out
		</button>
	);
}
