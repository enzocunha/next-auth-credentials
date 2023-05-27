# Next Auth

Case Study: Implementing Next Auth with Credentials Provider

## Steps

- Setting up the database
1. Set a database connection
2. Create a [user model](prisma/schema.prisma)
>Notes: You might want to add a [route to create a user](pages/api/users/index.js) for easier testing and use the [bcrypt](https://www.npmjs.com/package/bcrypt) package to hash the password

- Setting up Next Auth
1. Install next-auth with `npm i next-auth`
2. Add API route for next-auth in [pages/api/auth/[...nextauth.js]](pages/api/auth/[...nextauth].js) and set the credentials provider calling the user from the database
3. Configure shared session state in [_app.js](pages/_app.js) so you can use the `useSession` hook
4. Set `NEXTAUTH_URL` and `NEXTAUTH_SECRET` in your environment variables before deploying to production

## References

- [Next Auth Docs](https://next-auth.js.org/getting-started/example)