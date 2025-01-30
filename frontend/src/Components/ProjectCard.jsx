import React from "react";

const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      onClick={() => onClick(project.id)}
      className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
    >
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {project.name}
      </h3>
      <div className="flex justify-between text-sm text-gray-600">
        <span>Open Issues: {project.openIssues}</span>
        <span>Closed Issues: {project.closedIssues}</span>
      </div>
      <div className="mt-4">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full"
            style={{
              width: `${
                (project.closedIssues /
                  (project.openIssues + project.closedIssues)) *
                100
              }%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
