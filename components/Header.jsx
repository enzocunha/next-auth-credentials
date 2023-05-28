import Link from "next/link";
import SignInButton from "./SignInButton";

export default function Header() {
	return (
		<header className="flex items-center justify-between h-24 p-4 bg-gray-200">
			<SignInButton />
            <Link href='/' className="flex items-center justify-center h-12 text-center px-4 py-2 text-gray-800 hover:bg-gray-100 hover:rounded-lg">Home</Link>
			<Link href='/protected/client' className="flex items-center justify-center h-12 text-center px-4 py-2 text-gray-800 hover:bg-gray-100 hover:rounded-lg">Client Page</Link>
			<Link href='/protected/server' className="flex items-center justify-center h-12 text-center px-4 py-2 text-gray-800 hover:bg-gray-100 hover:rounded-lg">Server Page</Link>
			<Link href='/protected/api' className="flex items-center justify-center h-12 text-center px-4 py-2 text-gray-800 hover:bg-gray-100 hover:rounded-lg">API Call</Link>
		</header>
	);
}
