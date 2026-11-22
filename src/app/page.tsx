import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { WorkGrid } from "@/components/WorkGrid";
import { MoreProjects } from "@/components/MoreProjects";
import { Process } from "@/components/Process";
import { getProjects } from "@/lib/projects";

export const revalidate = 60;

export default async function HomePage() {
  const projects = await getProjects();

  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <WorkGrid projects={projects} />
      <MoreProjects />
      <Process />
    </>
  );
}
