import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Seed team members
  const team = [
    { name: "João Gabriel", role: "CEO · Editor · Influencer", icon: "engineering", color: "var(--color-cyan)", bio: "Fundador e líder visionário da JALEP.", skills: "Liderança,Conteúdo,Estratégia", order: 1 },
    { name: "André", role: "TI · Técnico · Security Researcher", icon: "code", color: "var(--color-green)", bio: "Security Researcher comprovado — CVE-2026-43499, root Samsung Galaxy SM-A576B.", skills: "Security,Hardware,Kernel Exploit,Bug Bounty", proof: "sudoxddx.github.io/Who-Am-I,github.com/sudoxddx/Root-My-Galaxy-SM-a576b", order: 2 },
    { name: "Lucas", role: "Escritor · Conteúdo", icon: "edit_note", color: "var(--color-amber)", bio: "Escritor e criador de conteúdo.", skills: "Redação,Conteúdo,Comunicação", order: 3 },
    { name: "João Lucas", role: "Técnico · Substituto", icon: "build", color: "var(--color-violet)", bio: "Técnico de suporte e substituto.", skills: "Suporte,Flexibilidade", order: 4 },
    { name: "Pedro", role: "Auxiliar · Montagem", icon: "support_agent", color: "var(--color-primary)", bio: "Auxiliar geral responsável por montagem.", skills: "Montagem,Assistência", order: 5 },
  ];

  for (const member of team) {
    await prisma.teamMember.upsert({
      where: { id: `seed-${member.name.toLowerCase().replace(/\s/g, "-")}` },
      update: member,
      create: { id: `seed-${member.name.toLowerCase().replace(/\s/g, "-")}`, ...member },
    });
  }

  console.log(`✅ ${team.length} team members seeded`);
  console.log("🎉 Seed complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
