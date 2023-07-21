import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {label: "Email"},
        password: {label: "Password"}
      },
      authorize(credentials, req) {
        if (credentials?.email === "admin@fuque.app" && credentials?.password === "1234") {
          return {
            id: "1",
            email: "admin@fuque.app"
          };
        }
        return null;
      }
    })
  ]
}

const handler = NextAuth(authOptions)

export {
  handler as GET,
  handler as POST
}