import prisma from '/lib/prisma'

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req, res) {
  const { brand, model,radio } = req.body;

  const result = await prisma.Car.create({
    data: {
      brand: brand,
      model: model,
    },
  });
  res.status(200) ? res.status(200).json({status:'Submitted'}) : res.status(401).json({status:'error'})

}