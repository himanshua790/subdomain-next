// seed.js
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const profiles = [
    {
      domain: "admin",
      name: "Admin",
      bio: "Sample bio for Admin",
      heading: "Sample Heading 1",
      profile_photo: "https://picsum.photos/200",
      styles: {
        ProfileCard: {
          backgroundColor: "#BFDBFE",
          color: "#1E3A8A",
          padding: "1rem",
          borderRadius: "0.5rem",
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        },
      },
    },
    {
      domain: "user",
      name: "User",
      bio: "Sample bio for User",
      heading: "Sample Heading 2",
      profile_photo: "https://picsum.photos/200",
      styles: {
        ProfileCard: {
          backgroundColor: "#FED7D7",
          color: "#E11D48",
          padding: "1rem",
          borderRadius: "0.5rem",
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        },
      },
    },
    {
      domain: "industry",
      name: "Industry",
      bio: "Sample bio for Industry",
      heading: "Sample Heading 3",
      profile_photo: "https://picsum.photos/200",
      styles: {
        ProfileCard: {
          backgroundColor: "#C6F6D5",
          color: "#065F46",
          padding: "1rem",
          borderRadius: "0.5rem",
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        },
      },
    },
    {
      domain: "supplier",
      name: "Supplier",
      bio: "Sample bio for Supplier",
      heading: "Sample Heading 4",
      profile_photo: "https://picsum.photos/200",
      styles: {
        ProfileCard: {
          backgroundColor: "#FEEBC8",
          color: "#D97706",
          padding: "1rem",
          borderRadius: "0.5rem",
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        },
      },
    },
  ];

  // Remove all records in the profiles table
  await prisma.profile.deleteMany();
  console.log("all profiles removed!");

  for (const profile of profiles) {
    await prisma.profile.create({
      data: profile,
    });
  }

  console.log("Sample profiles created");
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
