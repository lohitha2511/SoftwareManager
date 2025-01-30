import React, { useState } from "react";
import ProjectCard from "../Components/ProjectCard";
import IssueList from "../Components/IssueList";
import Analytics from "../Components/Analytics";
import Navbar from "../components/Navbar";

// Mock data - replace with actual API calls
const mockProjects = [
  { id: 1, name: "E-commerce Platform", openIssues: 5, closedIssues: 15 },
  { id: 2, name: "CRM System", openIssues: 3, closedIssues: 8 },
  { id: 3, name: "Mobile App", openIssues: 7, closedIssues: 12 },
];

const mockIssues = {
  1: [
    {
      id: 1,
      title: "Cart not updating",
      description: "Cart items count not updating after adding products",
      status: "open",
      assignee: "John Doe",
      priority: "High",
    },
    {
      id: 2,
      title: "Payment gateway error",
      description: "Users unable to complete payment",
      status: "closed",
      assignee: "Jane Smith",
      priority: "Critical",
    },
  ],
  // Add more issues for other projects
};

const mockAnalytics = {
  openIssues: 15,
  inProgressIssues: 8,
  resolvedIssues: 12,
  closedIssues: 35,
};

function Developer() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (projectId) => {
    setSelectedProject(projectId);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-10 bg-white shadow-md">
        <Navbar />
      </div>
      <div className="min-h-screen bg-gray-100 pt-16">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">
            Developer Dashboard
          </h1>

          {/* Analytics Section */}
          <div className="mb-8">
            <Analytics data={mockAnalytics} />
          </div>

          {/* Projects Grid */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Your Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {mockProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={handleProjectClick}
              />
            ))}
          </div>

          {/* Issues List */}
          {selectedProject && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Issues for{" "}
                {mockProjects.find((p) => p.id === selectedProject)?.name}
              </h2>
              <IssueList issues={mockIssues[selectedProject] || []} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Developer;
