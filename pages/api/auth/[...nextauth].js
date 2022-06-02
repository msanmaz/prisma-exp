import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from 'lib/prisma'

export default NextAuth({

  //Specify Provider
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "email", type: "text", placeholder: "john@doe.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log(credentials)
        //Find user with the email  
        const result = await prisma.User.findUnique({
          where: {
            email: credentials.email,
          }

        });

        if (!result) {
          throw new Error('No user found with the email');
        }
        if (result !== null) {
          return result
        }
        //Check hased password with DB password
        const checkPassword = credentials.password === result.password
        //Incorrect password - send response
        if (!checkPassword) {
          throw new Error('Password doesnt match');
        }

        return null
      },
    }),
  ],
  secret: process.env.SECRET,
  pages: {
    signIn: '/signin'
  },

  database: process.env.DATABASE_URL,

  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.SECRET,
    encryption: true,
  },

  callbacks: {
    jwt: async ({ token, user }) => {
      if(token.name === null){
     
          const result = await prisma.User.findUnique({
            where: {
              email: token.email,
            }
    
          });
          result.name && (token.name = result.name)
        }
      
      if (user) {
        token.sub = user.id
        token.name = user.name
        token.email = user.email
      }
      return Promise.resolve(token);
    },
    session: async ({ session, token, user }) => {
      if (!session) return null
      session.email = token.email
      session.name = token.name
      session.jti = token.jti
      session.user.name = token.name
      return Promise.resolve(session)
    }
  },

  debug: true,
  adapter: PrismaAdapter(prisma)
})




