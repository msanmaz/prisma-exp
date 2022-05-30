import prisma from 'lib/prisma'
import { getSession } from 'next-auth/react'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(501).end()
  }

  const session = await getSession({ req })

  const user = await prisma.User.findUnique({
    where: {
      email: session.user.email,
    },
  })
  console.log('bodyreq',req.body)
  if (req.method === 'POST') {
    await prisma.tweet.create({
      data: {
        content: req.body.input,
        author: {
          connect: { id: user.id },
        },
      },
    })
    res.end()
    return
  }
}