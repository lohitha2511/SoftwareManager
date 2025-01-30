import React, { useState } from "react";

const CreateIssueForm = ({ onSubmit, onCancel }) => {
  const [issue, setIssue] = useState({
    title: "",
    description: "",
    priority: "Medium",
    type: "Bug",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(issue);
    setIssue({ title: "", description: "", priority: "Medium", type: "Bug" });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Create New Issue</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={issue.title}
            onChange={(e) => setIssue({ ...issue, title: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
            value={issue.description}
            onChange={(e) =>
              setIssue({ ...issue, description: e.target.value })
            }
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="priority"
            >
              Priority
            </label>
            <select
              id="priority"
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={issue.priority}
              onChange={(e) => setIssue({ ...issue, priority: e.target.value })}
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
              <option>Critical</option>
            </select>
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="type"
            >
              Type
            </label>
            <select
              id="type"
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={issue.type}
              onChange={(e) => setIssue({ ...issue, type: e.target.value })}
            >
              <option>Bug</option>
              <option>Feature</option>
              <option>Enhancement</option>
              <option>Documentation</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create Issue
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateIssueForm;
