import { useState, useEffect } from "react";
import TeamCard from "./TeamCard";
import Loading from "./loading";

const Dashboard = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch("https://gietx.onrender.com/api/team");
        const data = await response.json();
        setTeams(data);
      } catch (error) {
        console.error("Error fetching teams:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  // Function to show notifications with animation
  const showNotification = (message, type = "success") => {
    setNotification({ message, type });

    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const verifyTeam = async (teamName) => {
    try {
      const response = await fetch(
        `https://gietx.onrender.com/api/admin/verify/${teamName}`,
        {
          method: "PUT",
        }
      );

      if (!response.ok) throw new Error("Verification toggle failed");

      const updatedTeam = await response.json();
      setTeams((prevTeams) =>
        prevTeams.map((team) =>
          team.teamName === teamName
            ? {
                ...team,
                isVerified: updatedTeam.team.isVerified,
                confirmationSlip: updatedTeam.team.confirmationSlip,
              }
            : team
        )
      );

      showNotification(
        `Team "${teamName}" verification updated.`,
        "success"
      );
    } catch (error) {
      console.error("Error toggling verification:", error);
      showNotification("Failed to update verification.", "error");
    }
  };

  const deleteTeam = async (teamId) => {
    try {
      const response = await fetch(
        `https://gietx.onrender.com/api/admin/delete/${teamId}`,
        { method: "DELETE" }
      );

      if (!response.ok) throw new Error("Failed to delete team");

      setTeams((prevTeams) => prevTeams.filter((team) => team._id !== teamId));

      showNotification("Team deleted successfully.", "success");
    } catch (error) {
      console.error("Error deleting team:", error);
      showNotification("Failed to delete team.", "error");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 flex flex-col items-center py-10 px-4">
      <h2 className="text-3xl font-bold text-white mb-6">Team Registrations</h2>

      {/* Notification Box - Bottom Right */}
      {notification && (
        <div
          className={`fixed bottom-5 right-5 px-3 py-2 rounded-md shadow-lg text-sm transition-all duration-300 ${
            notification.type === "success"
              ? "bg-green-500 text-white animate-fadeIn"
              : "bg-red-500 text-white animate-fadeIn"
          }`}
        >
          {notification.message}
        </div>
      )}

      {loading ? (
        <Loading />
      ) : (
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
          {teams.map((team) => (
            <TeamCard
              key={team._id}
              team={team}
              onVerify={() => verifyTeam(team.teamName)}
              onDelete={() => deleteTeam(team._id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
