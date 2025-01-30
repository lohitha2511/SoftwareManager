import axios from "axios";
import React, { useEffect, useState } from "react";

const IssueList = ({ issues, onCloseIssue }) => {
  const [showCloseIssue, setShowCloseIssue] = useState(false);

  return (
    <div className="space-y-4">
      {issues.map((issue) => (
        <div key={issue.id} className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-medium text-gray-800">{issue.title}</h4>
            <span
              className={`px-2 py-1 rounded-full text-sm ${
                issue.status === "open"
                  ? "bg-red-100 text-red-800"
                  : "bg-green-100 text-green-800"
              }`}
            >
              {issue.status}
            </span>
          </div>
          <p className="text-gray-600 mt-2">{issue.description}</p>
          <div className="mt-4 flex justify-between text-sm text-gray-500">
            <span>Assigned to: {issue.assignee}</span>
            <span>Priority: {issue.priority}</span>
          </div>
          {issue.status === "open" && (
            <button
              onClick={() => onCloseIssue(issue.id)}
              className="mt-4 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
            >
              Close Issue
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default IssueList;
