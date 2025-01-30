import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Analytics = ({ data }) => {
  const chartData = {
    labels: ["Open Issues", "In Progress", "Resolved", "Closed"],
    datasets: [
      {
        label: "Issues by Status",
        data: [
          data.openIssues,
          data.inProgressIssues,
          data.resolvedIssues,
          data.closedIssues,
        ],
        backgroundColor: [
          "rgba(239, 68, 68, 0.5)",
          "rgba(59, 130, 246, 0.5)",
          "rgba(16, 185, 129, 0.5)",
          "rgba(107, 114, 128, 0.5)",
        ],
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Issues Overview</h3>
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-red-50 p-4 rounded-lg">
          <p className="text-red-600 text-sm">Open</p>
          <p className="text-2xl font-bold">{data.openIssues}</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-blue-600 text-sm">In Progress</p>
          <p className="text-2xl font-bold">{data.inProgressIssues}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-green-600 text-sm">Resolved</p>
          <p className="text-2xl font-bold">{data.resolvedIssues}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-600 text-sm">Closed</p>
          <p className="text-2xl font-bold">{data.closedIssues}</p>
        </div>
      </div>
      <Bar data={chartData} />
    </div>
  );
};

export default Analytics;
