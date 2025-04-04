"use client";

import type React from "react";

const PaymentUpload: React.FC = () => {
  const downloadQR = () => {
    const link = document.createElement("a");
    link.href = "/qr_code.jpg";
    link.download = "giet-hackathon-qr.png";
    link.click();
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0a0a0a] min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient">
              Payment & Upload
            </h2>
            <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Complete your registration by making a payment and uploading the
              receipt
            </p>
          </div>
        </div>

        <div className="grid place-items-center">
          <div className="w-full max-w-lg rounded-xl bg-zinc-900 border border-zinc-800 text-white overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold">Account Details</h3>
              <p className="text-zinc-400 text-sm mt-1">
                Make a payment to complete your registration
              </p>
            </div>
            <div className="px-6 pb-6 space-y-4">
              {[
                ["Account Name", "GIET Hackathon"],
                ["Account No", "6755000100100285"],
                ["IFSC Code", "PUNB0675500"],
                ["UPI Id", "8458024651@ptyes"],
                ["Bank Name", "PUNJAB NATIONAL BANK"],
                [
                  "Registration Fee",
                  <span className="font-medium text-gradient">Rs. 300</span>,
                ],
              ].map(([label, value], idx) => (
                <div className="space-y-2" key={idx}>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">{label}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                  <div className="h-px bg-zinc-800"></div>
                </div>
              ))}

              <div className="pt-4">
                <div className="bg-zinc-800 border-l-4 border-purple-500 text-white p-4 rounded">
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-sm text-zinc-300">
                      Once payment is confirmed, the registration fee is
                      non-refundable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6 pb-6">
              <button
                onClick={downloadQR}
                className="w-full py-2 px-4 bg-gradient-to-r bg-blue-600 text-white   font-medium rounded-md transition-colors duration-300 flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download QR Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentUpload;
