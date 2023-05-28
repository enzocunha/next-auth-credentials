export async function getServerSideProps(context) {
    // Get the user's session token from the cookies
    const sessionToken = context.req?.cookies['next-auth.session-token'];

	const res = await fetch("http://localhost:3000/api/protected", {
        headers: sessionToken ? { cookie: `next-auth.session-token=${sessionToken}` } : undefined,
        });
    const data = await res.json();

    return {
        props: {
            data,
        },
    };
}

export default function ServerPage({ data }) {

	if (data.error) {
		return <p>{data.error}</p>;
	}

	return (
		<>
			<p>{data.content}</p>
		</>
	);
}
