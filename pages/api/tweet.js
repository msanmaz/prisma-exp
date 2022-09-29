import prisma from 'lib/prisma'
import { getSession } from 'next-auth/react'

export default async function handler(req, res) {
  if (req.method !== 'POST' && req.method !== 'DELETE') {
    return res.status(501).end()
  }

  const session = await getSession({ req })



  const user = await prisma.User.findUnique({
    where: {
      email: session.user.email,
    },
  })

  if (req.method === 'POST') {
   const tweet = await prisma.tweet.create({
      data: {
        content: req.body.input,
        parent: req.body.parent || null,
        author: {
          connect: { id: user.id },
        },
      },
    })

    const tweetWithAuthorData = await prisma.tweet.findUnique({
      where: {
        id:tweet.id,
      },
      include:{
        author:true,
      }
    })
    res.json(tweetWithAuthorData)
    res.end()
  }


  if (req.method === 'DELETE') {
		const id = req.body.id

    const tweet = await prisma.tweet.findUnique({
      where: {
        id,
      },
      include: {
        author: true,
      },
    })

    if (tweet.authorId !== user.id) {
      res.status(401).end()
      return
    }

    await prisma.tweet.delete({
      where: { id },
    })
    res.status(200).end()
    return
  }


}