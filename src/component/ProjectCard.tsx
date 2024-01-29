import React from "react";
import { Card, Space } from "antd";

interface cardData {
  title: string;
  description: string;
  href: string;
}

interface Props {
  projectData: cardData[];
}

const ProjectCard: React.FC<Props> = ({ projectData }) => (
  <>
    {projectData.map((data, index) => (
      <div key={index} className="py-8">
        <Card
          title={data.title}
          extra={<a href={data.href}>More</a>}
          style={{ width: 300 }}
        >
          <p>{data.title}</p>
          <p>{data.description}</p>
        </Card>
      </div>
    ))}
  </>
);

export default ProjectCard;
