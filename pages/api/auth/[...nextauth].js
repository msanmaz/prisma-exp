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
   
            //Find user with the email  
            const result = await prisma.User.findUnique({
              where:{
                email: credentials.email,
              }

            });

            if (!result) {
                throw new Error('No user found with the email');
            }
            if(result !== null){
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
pages:{
  signIn:'/signin'
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
      if(user) {
        console.log('user',user)
        console.log('token',token)
        token.sub = user.id
        token.email = user.email
      }
      return Promise.resolve(token);
    },
    session:  ({ session, token,user }) => {
      console.log('session',session)
      console.log('token in ses',token)
      console.log('user in ses',user)
      session.email = token.email
      session.name = token.name
      session.accessToken = token.accessToken
      return Promise.resolve(session)
    }
},
jwt: {
  secret: process.env.SECRET,
},

  debug: true,
  adapter: PrismaAdapter(prisma)
})




