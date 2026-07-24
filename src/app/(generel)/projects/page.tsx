import ProjectsPage from "@/app/components/projectsComponents/ProjectsPage";


const Projects = async ({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) => {
  const { page } = await searchParams;
  const initialPage = Number(page) > 0 ? Number(page) : 1;

  return (
    <div>
      <ProjectsPage initialPage={initialPage} />
    </div>
  );
};

export default Projects;
