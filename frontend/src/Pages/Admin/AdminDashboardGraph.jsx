import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

const AdminDashboardGraph = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        type: "bar",
        label: "Dataset 1",
        backgroundColor: "orange",
        data: [80, -20, 30, 10, 70, -40, 90],
      },
      {
        type: "bar",
        label: "Dataset 2",
        backgroundColor: "red",
        data: [-30, 50, -20, 15, 60, 30, -10],
      },
      {
        type: "bar",
        label: "Dataset 3",
        backgroundColor: "blue",
        data: [50, 40, -30, 5, 20, 50, 80],
      },
      {
        type: "line",
        label: "User Signups",
        borderColor: "green",
        backgroundColor: "rgba(0, 255, 0, 0.3)",
        fill: true,
        data: [-90, 30, 40, 80, -60, -20, 50],
      },
    ],
  };

  return (
    <div className="container mt-4">
      <Card className="shadow p-3 mb-5">
        <Card.Body>
          <Card.Title className="text-center">User Signup Trends</Card.Title>
          <div style={{ height: "400px" }}> {/* Fixed height to prevent expansion */}
            <Bar 
              data={data} 
              options={{ 
                responsive: true, 
                maintainAspectRatio: false 
              }} 
            />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AdminDashboardGraph;
