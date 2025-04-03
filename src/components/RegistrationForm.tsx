"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Loader2, CheckCircle, XCircle } from "lucide-react"

interface TeamMember {
  name: string
  email: string
  role: string
}

const RegistrationForm = () => {
  const [teamName, setTeamName] = useState("")
  const [selectedTrack, setSelectedTrack] = useState("")
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([{ name: "", email: "", role: "" }])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const tracks = [
    { id: "blockchain", name: "Blockchain & Web3" },
    { id: "ai", name: "AI & Machine Learning" },
    { id: "innovation", name: "Open Innovation" },
  ]

  const handleAddMember = () => {
    if (teamMembers.length < 8) {
      setTeamMembers([...teamMembers, { name: "", email: "", role: "" }])
    }
  }

  const handleRemoveMember = (index: number) => {
    if (teamMembers.length > 1) {
      const newMembers = teamMembers.filter((_, i) => i !== index)
      setTeamMembers(newMembers)
    }
  }

  const handleMemberChange = (index: number, field: keyof TeamMember, value: string) => {
    const newMembers = teamMembers.map((member, i) => {
      if (i === index) {
        return { ...member, [field]: value }
      }
      return member
    })
    setTeamMembers(newMembers)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    // Create form data object
    const formData = new FormData()
    formData.append("teamName", teamName)
    formData.append("selectedTrack", selectedTrack)
    formData.append("teamMembers", JSON.stringify(teamMembers))

    try {
      // Use a CORS proxy to make the request
      // Option 1: Using a public CORS proxy (not recommended for production)
      const targetUrl = "https://script.google.com/macros/s/AKfycbzbet6oP1ZALlNynrKG5djsDWIKUvbZHGqFS2Xxx2JPY8TYcwZ7JLkeJuKoLGfBVuvBUg/exec"

      const response = await fetch(targetUrl, {
        method: "POST",
        body: formData,
      })
      

      // Since we're using a CORS proxy, we should be able to read the response
      if (!response.ok) {
        throw new Error("Failed to submit registration")
      }

      setSubmitStatus("success")
      setTeamName("")
      setSelectedTrack("")
      setTeamMembers([{ name: "", email: "", role: "" }]) // Reset form
    } catch (error: any) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
      setErrorMessage(error.message || "Submission failed. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="register" className="py-16 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl" />
          <div className="relative bg-glass rounded-lg p-8 neon-border">
            <h2 className="text-3xl font-bold text-center mb-8 text-gradient">Team Registration</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Team Name */}
              <div>
                <label className="block text-blue-400 mb-2">Team Name</label>
                <input
                  type="text"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  required
                  className="w-full px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Enter your team name"
                />
              </div>

              {/* Track Selection */}
              <div>
                <label className="block text-blue-400 mb-2">Select Track</label>
                <select
                  value={selectedTrack}
                  onChange={(e) => setSelectedTrack(e.target.value)}
                  required
                  className="w-full px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-colors"
                >
                  <option value="">Select a track</option>
                  {tracks.map((track) => (
                    <option key={track.id} value={track.id}>
                      {track.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Team Members */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-blue-400">Team Members (Optional)</label>
                  <button
                    type="button"
                    onClick={handleAddMember}
                    disabled={teamMembers.length >= 8}
                    className="px-4 py-2 text-sm rounded-lg bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Add Member ({teamMembers.length}/8)
                  </button>
                </div>

                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="p-4 bg-gray-800/30 rounded-lg space-y-3"
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="text-white">Member {index + 1}</h4>
                      {index > 0 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveMember(index)}
                          className="text-red-400 hover:text-red-300"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <input
                        type="text"
                        value={member.name}
                        onChange={(e) => handleMemberChange(index, "name", e.target.value)}
                        placeholder="Name"
                        className="px-3 py-2 bg-gray-800/50 rounded-lg border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                      />
                      <input
                        type="email"
                        value={member.email}
                        onChange={(e) => handleMemberChange(index, "email", e.target.value)}
                        placeholder="Email"
                        className="px-3 py-2 bg-gray-800/50 rounded-lg border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                      />
                      <input
                        type="text"
                        value={member.role}
                        onChange={(e) => handleMemberChange(index, "role", e.target.value)}
                        placeholder="Role (e.g., Developer, Designer)"
                        className="px-3 py-2 bg-gray-800/50 rounded-lg border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                  <span>Submit Registration</span>
                </button>
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 rounded-lg"
                >
                  <div className="flex items-center justify-center text-green-400 space-x-2 mb-2">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-semibold">Registration submitted successfully!</span>
                  </div>
                  <p className="text-center text-green-300 text-sm">
                    Thank you for registering! Please check your email for updates about your registration status.
                  </p>
                </motion.div>
              )}
              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 rounded-lg"
                >
                  <div className="flex items-center justify-center text-red-400 space-x-2">
                    <XCircle className="w-5 h-5" />
                    <span>{errorMessage}</span>
                  </div>
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default RegistrationForm

