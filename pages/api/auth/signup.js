import prisma from 'lib/prisma'

export default async function SignUp(req, res) {
    
    if(req.method === 'POST') {

        const { password, email} = req.body;         
        //check if user existing
        
        const checkExist = await prisma.User.findUnique({
          where: {
            email: email,
          },
        });

        if (checkExist) {
            res.status(422).json({ message: 'User already exists' });
            return;
        }
  
        const result = await prisma.User.create({
          data: {
            email:email,
            password:password,
          },
        });
        res.status(201).json({ message: 'User created', ...result });
        return
    }

    res.status(405).json({ message: 'Method Not Allowed' })

    res.end()

  }