const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

async function main() {
  console.log('Connecting to database...');
  const prisma = new PrismaClient();
  
  console.log('Seeding database...');

  // 1. Create Admin Account
  const passwordHash = await bcrypt.hash('It&CareAdm!n', 10);
  const admin = await prisma.admin.upsert({
    where: { username: 'Adm!n' },
    update: { passwordHash },
    create: {
      username: 'Adm!n',
      passwordHash,
    },
  });
  console.log('Admin user seeded:', admin.username);

  // 2. Seed Site Settings
  await prisma.siteSetting.upsert({
    where: { id: 'global' },
    update: {},
    create: {
      heroTitle: 'Transforming Businesses with Premium Digital Solutions',
      heroSubtitle: 'Aavis IT & Care is a leading digital agency specializing in custom software, bespoke website design, and data-driven marketing.',
      heroBtnText: 'Start Your Project',
      heroBtnUrl: '/contact',
      siteName: 'Aavis IT & Care',
      metaTitle: 'Aavis IT & Care - Digital Growth Agency',
      metaDescription: 'Premium digital solutions for enterprise clients.',
    },
  });
  console.log('Site Settings seeded.');

  // 3. Seed Mock Services
  const services = [
    {
      title: "Digital Marketing",
      slug: "marketing",
      shortDescription: "Data-driven acquisition strategies that scale your business.",
      fullDescription: "We don't just run ads; we build comprehensive marketing engines that turn cold traffic into loyal customers and maximize your ROI.",
      icon: "Megaphone",
      benefits: ["Multi-channel Campaign Management", "Conversion Rate Optimization", "Advanced Analytics", "Retargeting"],
    },
    {
      title: "Website Design & Development",
      slug: "web",
      shortDescription: "Premium, high-converting corporate websites built on modern tech stacks.",
      fullDescription: "We craft digital experiences that combine stunning aesthetics with lightning-fast performance.",
      icon: "Globe",
      benefits: ["Custom UI/UX Design", "Next.js & React Development", "Mobile-First Optimization"],
    },
    {
      title: "Software Products",
      slug: "software",
      shortDescription: "Custom software tailored to your specific operations.",
      fullDescription: "From CRM to POS, we build reliable backend systems.",
      icon: "Code",
      benefits: ["Cloud Architecture", "Scalable Solutions"],
    }
  ];

  for (const s of services) {
    await prisma.service.upsert({
      where: { slug: s.slug },
      update: {},
      create: s,
    });
  }
  console.log('Services seeded.');

  console.log('Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // We can call dispose on adapter since we don't have prisma variable exported easily if it fails inside main,
    // wait, we do have it in main, but let's just let Node exit after process.exit(0) at the end, or use process.exit(0) in then()
    process.exit(0);
  });
