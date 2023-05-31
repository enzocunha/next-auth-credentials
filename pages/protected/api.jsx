export async function getServerSideProps(context) {
    // Get the user's session token from the cookies
    const cookieName = context.req.cookies['__Secure-next-auth.session-token'] ?
                          '__Secure-next-auth.session-token' :
                            'next-auth.session-token';

    const sessionToken = context.req.cookies[cookieName];

    // Get API url in the server side
    const protocol = context.req.headers.referer.split('://')[0];
    const host = context.req.headers.host;
    const apiURL = `${protocol}://${host}/api/protected`;

	const res = await fetch(apiURL, {
        headers: sessionToken ? { cookie: `${cookieName}=${sessionToken}` } : undefined,
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
