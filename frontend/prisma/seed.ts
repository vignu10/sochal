const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash('pointbreak', 10);
  await prisma.admin.create({
    data: {
      email: 'admin@example.com',
      password,
    },
  });
}

main()
  .then(() => console.log('Database seeded'))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
