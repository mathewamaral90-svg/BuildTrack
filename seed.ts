import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const user = await prisma.user.upsert({
    where: { username: "micksgarage" },
    update: {},
    create: { username: "micksgarage", name: "Mick's Garage", bio: "Building, wrenching and sharing the process." }
  });
  const build = await prisma.build.create({
    data: {
      title: "Evo X 5858 Street Build", year: 2014, make: "Mitsubishi", model: "Lancer Evolution X", trim: "GSR",
      status: "BUILDING", progress: 68,
      description: "A street-focused Evo X build with a Precision 5858 turbo setup and supporting fuel/cam upgrades.", ownerId: user.id,
      parts: { create: [
        { name: "Precision 5858 JB Turbo", category: "Turbo", brand: "Precision Turbo" },
        { name: "FIC 1200cc Injectors", category: "Fuel", brand: "Fuel Injector Clinic", partNumber: "IS127-1200H" },
        { name: "AEM 340 LPH Fuel Pump", category: "Fuel", brand: "AEM" },
        { name: "Radium Fuel Rail", category: "Fuel", brand: "Radium Engineering" },
        { name: "Brian Crower S2 Cams", category: "Engine", brand: "Brian Crower" },
        { name: "AEM Fuel Pressure Regulator", category: "Fuel", brand: "AEM" },
        { name: "TiAL Wastegate", category: "Boost", brand: "TiAL" },
        { name: "TiAL BOV", category: "Boost", brand: "TiAL" },
        { name: "GrimmSpeed 3-Port", category: "Boost", brand: "GrimmSpeed" }
      ]},
      tasks: { create: [
        { title: "Baseline compression check", category: "Engine", completed: true },
        { title: "Install turbo and wastegate", category: "Turbo", completed: true },
        { title: "Verify fuel pressure", category: "Fuel", completed: true },
        { title: "Finish boost-control plumbing", category: "Boost", completed: false },
        { title: "Dyno tune and street verification", category: "Tuning", completed: false }
      ]}
    }
  });
  await prisma.journalPost.create({ data: { title: "The 5858 is on", body: "Turbo hardware is in place. Next up is finishing boost control and dialing in the setup.", authorId: user.id, buildId: build.id } });
  await prisma.assistancePost.create({ data: { title: "What should I check before first startup?", body: "Looking for a community checklist for a fresh turbo installation.", category: "Engine", authorId: user.id } });
  console.log(`Seeded BuildTrack with build ${build.id}`);
}
main().finally(() => prisma.$disconnect());
