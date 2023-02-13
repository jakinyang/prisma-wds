import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function main() {
  const user = prisma.user.create({
    data: {
      name: "Bacon"
    }
  })
  console.log(user);
}

main()
  .catch(e => console.error(e.message))
  .then(async () => {
    await prisma.$disconnect();
  });