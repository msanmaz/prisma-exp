import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from 'lib/prisma'

export default NextAuth({

//Specify Provider
providers: [
    CredentialsProvider({
      name:"Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
        async authorize(credentials) {
            //Get all the users
            const users = await prisma.User.findMany();
            //Find user with the email  
            const result = await prisma.User.findUnique({
              where:{
                email: credentials.email,
              }

            });

            if (!result) {
                throw new Error('No user found with the email');
            }
            //Check hased password with DB password
            const checkPassword = credentials.password === result.password
            //Incorrect password - send response
            if (!checkPassword) {
                throw new Error('Password doesnt match');
            }
            return { email: result.email };
        },
    }),
],
pages:{
  signIn:'/signin'
},

  database: process.env.DATABASE_URL,
  secret: process.env.SECRET,

  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60 // 30 days
  },

  debug: true,
  adapter: PrismaAdapter(prisma)
})




