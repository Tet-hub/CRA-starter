import ProjectCard from "../component/ProjectCard";

const projectData = [
  {
    id: 1,
    title: "Title1",
    description: "description1",
    href: "hehehe",
  },
  {
    id: 2,
    title: "Title2",
    description: "description2",
    href: "asdsadas",
  },
  {
    id: 1,
    title: "Title1",
    description: "description1",
    href: "dsadasdsa",
  },
  {
    id: 1,
    title: "Title1",
    description: "description1",
    href: "dasdsadsa",
  },
];

const ProjectsPage = () => {
  return (
    <div className="header-section">
      <div className="static-grid">
        {projectData.map((data, index) => (
          <div key={index}>
            <ProjectCard projectData={[data]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
