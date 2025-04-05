import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Loader2,
  CheckCircle,
  XCircle,
  Upload,
  Trash2,
  PlusCircle,
} from "lucide-react";
import PaymentUpload from "./PaymentUpload";

interface TeamMember {
  name: string;
  email: string;
  contactNo: string;
  gender: string;
}

const RegistrationForm = () => {
  const [teamName, setTeamName] = useState("");
  const [selectedTrack, setSelectedTrack] = useState("");
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    { name: "", email: "", contactNo: "", gender: "" },
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [paymentScreenshot, setPaymentScreenshot] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);

  const tracks = [
    { id: "hackathon", name: "Hackathon" },
    // { id: "ai", name: "AI & Machine Learning" },
    // { id: "innovation", name: "Open Innovation" },
  ];

  /** Add a new team member */
  const handleAddMember = () => {
    if (teamMembers.length < 5) {
      setTeamMembers([
        ...teamMembers,
        { name: "", email: "", contactNo: "", gender: "" },
      ]);
    }
  };

  /** Remove a team member */
  const handleRemoveMember = (index: number) => {
    if (teamMembers.length > 1) {
      setTeamMembers(teamMembers.filter((_, i) => i !== index));
    }
  };

  /** Update team member fields */
  const handleMemberChange = (
    index: number,
    field: keyof TeamMember,
    value: string
  ) => {
    const updatedMembers = teamMembers.map((member, i) =>
      i === index ? { ...member, [field]: value } : member
    );
    setTeamMembers(updatedMembers);
  };

  /** Handle payment screenshot selection */
  const handlePaymentScreenshotChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setPaymentScreenshot(file);
      setPreviewURL(URL.createObjectURL(file));
    } else {
      alert("Please upload a valid image file (JPG, PNG, etc.)");
    }
  };

  /** Handle form submission */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    if (!teamName || !selectedTrack || !paymentScreenshot) {
      setErrorMessage("Please fill all required fields.");
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    const isAllMembersValid = teamMembers.every(
      (member) =>
        member.name && member.email && member.contactNo && member.gender
    );

    if (!isAllMembersValid) {
      setErrorMessage("Please fill all required fields for each team member.");
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData();
    formData.append("teamName", teamName);
    formData.append("track", selectedTrack);
    formData.append("members", JSON.stringify(teamMembers));
    if (paymentScreenshot) {
      formData.append("paymentScreenshot", paymentScreenshot);
    }

    try {
      const response = await fetch("https://gietx.onrender.com/api/team/register", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      if (response.ok) {
        setSubmitStatus("success");
        setTeamName("");
        setSelectedTrack("");
        setTeamMembers([{ name: "", email: "", contactNo: "", gender: "" }]);
        setPaymentScreenshot(null);
        setPreviewURL(null);
      } else {
        throw new Error(result.message || "Failed to submit registration");
      }
    } catch (error: any) {
      setSubmitStatus("error");
      setErrorMessage(error.message || "Submission failed. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
     <>
     <PaymentUpload/>
    <section className="py-8 md:py-16 bg-[#0a0a0a] text-white min-h-screen flex items-center">
      
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-900 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg border border-gray-700">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
              Team Registration
            </h2>

            {submitStatus === "success" && (
              <div className="flex flex-col items-center justify-center text-green-400 p-4 bg-green-900/20 rounded-lg mb-4 sm:mb-6">
                <div className="flex items-center mb-2">
                  <CheckCircle className="w-6 h-6 mr-2" /> Registration Successful!
                </div>
                <p className="text-sm sm:text-base text-center">
                  Stay tuned, you will get back from the coordinator.
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="flex items-center justify-center text-red-400 mb-4 sm:mb-6">
                <XCircle className="w-6 h-6 mr-2" /> {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Team Name */}
              <div>
                <label className="block text-blue-400 text-sm sm:text-base mb-2">
                  Team Name
                </label>
                <input
                  type="text"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-800 rounded-lg border border-gray-700 text-white placeholder-gray-400"
                  placeholder="Enter your team name"
                />
              </div>

              {/* Track Selection */}
              <div>
                <label className="block text-blue-400 text-sm sm:text-base mb-2">
                  Select Track
                </label>
                <select
                  value={selectedTrack}
                  onChange={(e) => setSelectedTrack(e.target.value)}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-800 rounded-lg border border-gray-700 text-white"
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
              <div>
                <label className="block text-blue-400 text-sm sm:text-base mb-2">
                  Team Members (Max 5)
                </label>
                {teamMembers.map((member, index) => (
                  <div key={index} className="flex flex-col gap-2 sm:gap-3 mb-4">
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                      <input
                        type="text"
                        value={member.name}
                        onChange={(e) =>
                          handleMemberChange(index, "name", e.target.value)
                        }
                        placeholder="Name"
                        required
                        className="w-full sm:w-1/2 px-3 py-2 sm:px-4 sm:py-3 bg-gray-800 rounded-lg border border-gray-700 text-white placeholder-gray-400"
                      />
                      <input
                        type="email"
                        value={member.email}
                        onChange={(e) =>
                          handleMemberChange(index, "email", e.target.value)
                        }
                        placeholder="Email"
                        required
                        className="w-full sm:w-1/2 px-3 py-2 sm:px-4 sm:py-3 bg-gray-800 rounded-lg border border-gray-700 text-white placeholder-gray-400"
                      />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-center">
                      <input
                        type="tel"
                        value={member.contactNo}
                        onChange={(e) =>
                          handleMemberChange(index, "contactNo", e.target.value)
                        }
                        placeholder="Contact Number"
                        required
                        className="w-full sm:w-1/2 px-3 py-2 sm:px-4 sm:py-3 bg-gray-800 rounded-lg border border-gray-700 text-white placeholder-gray-400"
                      />
                      <div className="w-full sm:w-1/2 flex items-center">
                        <select
                          value={member.gender}
                          onChange={(e) =>
                            handleMemberChange(index, "gender", e.target.value)
                          }
                          required
                          className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-800 rounded-lg border border-gray-700 text-white"
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                        {teamMembers.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleRemoveMember(index)}
                            className="text-red-500 p-2 hover:bg-gray-800 rounded-full transition-colors ml-2"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                {teamMembers.length < 5 && (
                  <button
                    type="button"
                    onClick={handleAddMember}
                    className="text-green-400 flex items-center space-x-2 text-sm sm:text-base"
                  >
                    <PlusCircle className="w-5 h-5" /> <span>Add Member</span>
                  </button>
                )}
              </div>

              {/* Payment Screenshot Upload */}
              <div>
                <label className="block text-blue-400 text-sm sm:text-base mb-2">
                  Upload Payment Screenshot
                </label>
                <div className="border-2 border-dashed border-gray-700 rounded-lg p-4 sm:p-6 text-center">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePaymentScreenshotChange}
                    className="hidden"
                    id="payment-screenshot"
                    required
                  />
                  {!previewURL ? (
                    <label
                      htmlFor="payment-screenshot"
                      className="flex flex-col items-center justify-center cursor-pointer py-4"
                    >
                      <Upload className="w-8 h-8 mb-2 text-blue-400" />
                      <span className="text-xs sm:text-sm text-gray-400">
                        Click to upload payment screenshot
                      </span>
                    </label>
                  ) : (
                    <div className="relative">
                      <img
                        src={previewURL || "/placeholder.svg"}
                        alt="Payment Screenshot"
                        className="mt-3 rounded-lg max-w-full max-h-64 mx-auto"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setPaymentScreenshot(null);
                          setPreviewURL(null);
                        }}
                        className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 sm:py-4 rounded-full flex items-center justify-center gap-2 transition-colors text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Submit Registration</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default RegistrationForm;