import React, { useState } from "react";
import ProjectCard from "../Components/ProjectCard";
import IssueList from "../Components/IssueList";
import Analytics from "../Components/Analytics";
import CreateIssueForm from "../Components/CreateIssue";
import Navbar from "../components/Navbar";

// Mock data for tester dashboard
const mockProjects = [
  { id: 1, name: "E-commerce Platform", openIssues: 8, closedIssues: 12 },
  { id: 2, name: "CRM System", openIssues: 5, closedIssues: 10 },
  { id: 3, name: "Mobile App", openIssues: 6, closedIssues: 8 },
  { id: 4, name: "API Gateway", openIssues: 3, closedIssues: 15 },
];

const mockIssues = {
  1: [
    {
      id: 1,
      title: "Search functionality broken",
      description: "Product search returns incorrect results",
      status: "open",
      assignee: "QA Team",
      priority: "High",
      type: "Bug",
    },
    {
      id: 2,
      title: "Mobile responsiveness issues",
      description: "Layout breaks on small screens",
      status: "open",
      assignee: "QA Team",
      priority: "Medium",
      type: "Bug",
    },
  ],
  // Add more issues for other projects
};

const mockAnalytics = {
  openIssues: 22,
  inProgressIssues: 10,
  resolvedIssues: 15,
  closedIssues: 45,
};

function TesterDashboard() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showCreateIssue, setShowCreateIssue] = useState(false);
  const [issues, setIssues] = useState(mockIssues);

  const handleProjectClick = (projectId) => {
    setSelectedProject(projectId);
    setShowCreateIssue(false);
  };

  const handleCreateIssue = (newIssue) => {
    if (selectedProject) {
      const issueId = Math.max(...issues[selectedProject].map((i) => i.id)) + 1;
      const createdIssue = {
        id: issueId,
        ...newIssue,
        status: "open",
        assignee: "QA Team",
      };

      setIssues((prev) => ({
        ...prev,
        [selectedProject]: [...(prev[selectedProject] || []), createdIssue],
      }));

      setShowCreateIssue(false);
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-10 bg-white shadow-md">
        <Navbar />
      </div>
      <div className="min-h-screen bg-gray-100 pt-16">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">
            Tester Dashboard
          </h1>

          {/* Analytics Section */}
          <div className="mb-8">
            <Analytics data={mockAnalytics} />
          </div>

          {/* Projects Grid */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Test Projects
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

          {/* Issues Section */}
          {selectedProject && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Issues for{" "}
                  {mockProjects.find((p) => p.id === selectedProject)?.name}
                </h2>
                <button
                  onClick={() => setShowCreateIssue(true)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Create New Issue
                </button>
              </div>

              {showCreateIssue ? (
                <CreateIssueForm
                  onSubmit={handleCreateIssue}
                  onCancel={() => setShowCreateIssue(false)}
                />
              ) : (
                <IssueList issues={issues[selectedProject] || []} />
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default TesterDashboard;
