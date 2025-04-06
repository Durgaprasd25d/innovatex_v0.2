"use client"

import { useState, useEffect } from "react"
import TeamCard from "./TeamCard"
import Loading from "./loading"

// Define the team structure with collegeName
interface Team {
  _id: string
  teamName: string
  track: string
  collegeName: string // Added collegeName to the interface
  members: any[]
  paymentScreenshot: string
  isVerified: boolean
  confirmationSlip: string
}

// Notification type
type Notification = {
  message: string
  type: "success" | "error"
}

const Dashboard = () => {
  const [teams, setTeams] = useState<Team[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [notification, setNotification] = useState<Notification | null>(null)

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch("https://gietx.onrender.com/api/team")
        if (!response.ok) {
          throw new Error(`Failed to fetch teams: ${response.statusText}`)
        }
        const data: Team[] = await response.json()
        setTeams(data)
      } catch (error: any) {
        console.error("Error fetching teams:", error.message || error)
      } finally {
        setLoading(false)
      }
    }

    fetchTeams()
  }, [])

  const showNotification = (message: string, type: "success" | "error" = "success") => {
    setNotification({ message, type })
    setTimeout(() => {
      setNotification(null)
    }, 3000)
  }

  const verifyTeam = async (teamName: string): Promise<void> => {
    try {
      const response = await fetch(`https://gietx.onrender.com/api/admin/verify/${teamName}`, {
        method: "PUT",
      })

      if (!response.ok) {
        throw new Error(`Verification toggle failed: ${response.statusText}`)
      }

      const updatedTeam = await response.json()

      setTeams((prevTeams) =>
        prevTeams.map((team) =>
          team.teamName === teamName
            ? {
                ...team,
                isVerified: updatedTeam.team.isVerified,
                confirmationSlip: updatedTeam.team.confirmationSlip,
              }
            : team,
        ),
      )

      showNotification(`Team "${teamName}" verification updated.`, "success")
    } catch (error: any) {
      console.error("Error toggling verification:", error.message || error)
      showNotification("Failed to update verification.", "error")
    }
  }

  const deleteTeam = async (teamId: string): Promise<void> => {
    try {
      const response = await fetch(`https://gietx.onrender.com/api/admin/delete/${teamId}`, { method: "DELETE" })

      if (!response.ok) {
        throw new Error(`Failed to delete team: ${response.statusText}`)
      }

      setTeams((prevTeams) => prevTeams.filter((team) => team._id !== teamId))

      showNotification("Team deleted successfully.", "success")
    } catch (error: any) {
      console.error("Error deleting team:", error.message || error)
      showNotification("Failed to delete team.", "error")
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 flex flex-col items-center py-10 px-4">
      <h2 className="text-3xl font-bold text-white mb-6">Team Registrations</h2>

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
  )
}

export default Dashboard

