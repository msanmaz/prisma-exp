import prisma from '/lib/prisma'

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req, res) {
  const { input} = req.body;

  const result = await prisma.User.findMany({
    where: {
      name: 'Test',
    },
  });
  res.send(result)

}