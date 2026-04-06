import { GoTriangleDown } from "@react-icons/all-files/go/GoTriangleDown";
import { motion } from "framer-motion";
import { useState } from "react";
import certificateData from "../data/CertificateData.json";

export default function Certificate() {
  const [showcert, setShowcert] = useState(true);

  return (
    <motion.div
      className="h-full relative"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
    >
      <div className="grid grid-cols-12">
        <button
          className="md:col-span-3 lg:col-span-2 col-span-full md:border-r border-b border-[#1E2D3D] text-white flex gap-2.5 items-center py-2.5 pl-4"
          onClick={() => setShowcert(!showcert)}
        >
          <GoTriangleDown
            className={`${showcert ? "" : "-rotate-90"} transition-all`}
          />
          <span>certificates</span>
        </button>
        <div className="lg:col-span-10 md:col-span-9 col-span-full border-b border-[#1E2D3D] flex items-center justify-center text-white row-start-1 md:row-start-auto py-2.5 lg-py-0">
          {`${certificateData.length} total certificates`}
        </div>
      </div>

      <div className="grid grid-cols-12 h-full">
        <div className="lg:col-span-2 col-span-full md:col-span-3 md:border-r border-[#1E2D3D] px-0 md:px-5 md:py-4 py-0 flex flex-col gap-4 overflow-hidden">
          <div
            className={`flex flex-col gap-4 overflow-y-auto overflow-x-hidden transition-all ${
              showcert ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            <div className="text-white text-sm px-4 md:px-0 py-2 md:py-0">
              All Certificates
            </div>
          </div>
        </div>

        <div className="lg:col-span-10 md:col-span-9 col-span-full flex items-start justify-center lg:p-16 md:p-8 p-4 overflow-y-auto scrollbar-none">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 h-max w-full">
            {certificateData.map((cert, index) => (
              <CertificateCard key={index} data={cert} index={index} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const CertificateCard = ({ data, index }) => {
  return (
    <motion.div
      className="rounded-2xl border border-[#1E2D3D] bg-[#001221]/50 overflow-hidden flex flex-col justify-between hover:shadow-sm hover:shadow-[#607B96] transition-colors h-auto"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="overflow-hidden h-48 w-full bg-[#101419]">
        <img
          src={data.image}
          alt={data.title}
          className="object-cover h-full w-full"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-white mb-3">{data.title}</h3>
        <div className="space-y-2">
          <p className="text-[#607B96]">
            <span className="text-white/70">Issuer:</span> {data.issuer}
          </p>
          <p className="text-[#607B96]">
            <span className="text-white/70">Date:</span> {data.date}
          </p>
        </div>
        <div className="mt-4 pt-4 border-t border-[#1E2D3D]">
          <p className="text-xs text-[#607B96]">Certificate #{index + 1}</p>
        </div>
      </div>
    </motion.div>
  );
};
