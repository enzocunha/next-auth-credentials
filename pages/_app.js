import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";
import Header from "@/components/Header";

export default function App({ Component, session, pageProps }) {
	return (
		<SessionProvider session={session}>
			<Header />
			<main className="flex justify-center py-24">
				<Component {...pageProps} />
			</main>
		</SessionProvider>
	);
}
