import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({


providers: [
  CredentialsProvider({
    // The name to display on the sign in form (e.g. "Sign in with...")
    name: "email",
    credentials: {
      username: { label: "Username", type: "text", placeholder: "ayushs1611" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
        const username = credentials?.username
        const password = credentials?.password

        console.log(username)
        console.log(password)
      // Add logic here to look up the user from the credentials supplied
      const user = { id: "1", name: "Ayush", email: "ayushs1611@gmail.com" }

      if (user) {
        // Any object returned will be saved in `user` property of the JWT
        return user
      } else {
        // If you return null then an error will be displayed advising the user to check their details.
        return null

        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
      }
    }
  }),
  GoogleProvider({
    clientId: "asd",
    clientSecret: "asd"
  })

],
secret: process.env.NEXTAUTH_SECRET


})

export { handler as GET, handler as POST }