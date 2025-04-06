"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, Trash, Square, CheckSquare, Phone, User, Building2 } from "lucide-react"

const TeamCard = ({ team, onVerify, onDelete }) => {
  const [expanded, setExpanded] = useState(false)
  const [preview, setPreview] = useState(null)

  return (
    <>
      <motion.div
        className="glass rounded-xl p-6 transition-all duration-300 hover:translate-y-[-5px]"
        whileHover={{ scale: 1.02 }}
      >
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-xl font-bold">{team.teamName}</h3>
            <div className="text-sm text-gray-400">{team.track}</div>
            {/* Added college name display */}
            <div className="text-sm text-purple-400 flex items-center mt-1">
              <Building2 className="h-3 w-3 mr-1" />
              {team.collegeName || "No college specified"}
            </div>
          </div>

          {/* Verify Checkbox */}
          <button onClick={onVerify} className="flex items-center space-x-2">
            {team.isVerified ? (
              <CheckSquare className="h-6 w-6 text-green-500" />
            ) : (
              <Square className="h-6 w-6 text-red-500" />
            )}
          </button>
        </div>

        {/* Avatar + Payment Screenshot */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex -space-x-2">
            {team.members.slice(0, 3).map((member, index) => (
              <div
                key={index}
                className="h-10 w-10 rounded-full bg-purple-500 flex items-center justify-center text-white"
              >
                <span>{member.name.charAt(0)}</span>
              </div>
            ))}
            {team.members.length > 3 && (
              <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center">
                <span className="text-xs">+{team.members.length - 3}</span>
              </div>
            )}
          </div>

          {/* Payment Screenshot */}
          <motion.img
            src={team.paymentScreenshot || "/placeholder.svg"}
            alt="Payment Screenshot"
            className="w-48 h-28 rounded-md object-cover border border-gray-700 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => setPreview(team.paymentScreenshot)}
          />
        </div>

        {/* Expandable Team Details */}
        <div className="flex justify-between">
          <div className="text-sm text-gray-400">{team.members.length} team members</div>
          <button onClick={() => setExpanded(!expanded)} className="text-purple-400 flex items-center">
            {expanded ? "Hide details" : "Show details"}
            {expanded ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />}
          </button>
        </div>

        {/* Smooth Animation for Expanding Members List */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              className="mt-4 pt-4 border-t border-gray-700"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <h4 className="text-sm font-medium mb-2">Team Members</h4>
              <div className="space-y-2">
                {team.members.map((member, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col p-2 bg-gray-800 rounded-md shadow-md"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center text-white">
                        {member.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-medium">{member.name}</p>
                        <p className="text-xs text-gray-400">{member.email}</p>
                      </div>
                    </div>

                    <div className="flex items-center mt-2 text-xs text-gray-300 space-x-4">
                      <div className="flex items-center">
                        <Phone className="h-3 w-3 mr-1 text-purple-400" />
                        <span>{member.contactNo}</span>
                      </div>
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1 text-purple-400" />
                        <span className="capitalize">{member.gender}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Show Confirmation Slip Button */}
        {team.isVerified && team.confirmationSlip && (
          <div className="flex justify-center mt-4">
            <a
              href={team.confirmationSlip}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-all duration-300"
            >
              View Confirmation Slip
            </a>
          </div>
        )}

        {/* Delete Button */}
        <div className="flex justify-center mt-4">
          <motion.button
            onClick={() => onDelete(team._id)}
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md flex items-center"
            whileTap={{ scale: 0.95 }}
          >
            <Trash className="h-4 w-4 mr-2" /> Delete Team
          </motion.button>
        </div>
      </motion.div>

      {/* Full-Screen Image Preview */}
      <AnimatePresence>
        {preview && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreview(null)}
          >
            <motion.img
              src={preview}
              alt="Payment Preview"
              className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default TeamCard

