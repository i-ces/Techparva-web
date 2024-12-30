import React from "react";
import { motion } from "framer-motion";

const sponsors = {
  Title: [
    {
      name: "Nipuna Sewa",
      logo: "https://via.placeholder.com/150",
    },
  ],
  Diamond: [
    { name: "Diamond Sponsor 1", logo: "https://via.placeholder.com/150" },
    { name: "Diamond Sponsor 2", logo: "https://via.placeholder.com/150" },
    { name: "Diamond Sponsor 1", logo: "https://via.placeholder.com/150" },
    { name: "Diamond Sponsor 2", logo: "https://via.placeholder.com/150" },
  ],
  Gold: [
    { name: "Gold Sponsor 1", logo: "https://via.placeholder.com/150" },
    { name: "Gold Sponsor 2", logo: "https://via.placeholder.com/150" },
    { name: "Gold Sponsor 1", logo: "https://via.placeholder.com/150" },
    { name: "Gold Sponsor 2", logo: "https://via.placeholder.com/150" },
    { name: "Gold Sponsor 1", logo: "https://via.placeholder.com/150" },
    { name: "Gold Sponsor 2", logo: "https://via.placeholder.com/150" },
  ],
  Silver: [
    { name: "Silver Sponsor 1", logo: "https://via.placeholder.com/150" },
    { name: "Silver Sponsor 2", logo: "https://via.placeholder.com/150" },
    { name: "Silver Sponsor 1", logo: "https://via.placeholder.com/150" },
    { name: "Silver Sponsor 2", logo: "https://via.placeholder.com/150" },
  ],
  General: [
    { name: "General Sponsor 1", logo: "https://via.placeholder.com/150" },
    { name: "General Sponsor 2", logo: "https://via.placeholder.com/150" },
    { name: "General Sponsor 1", logo: "https://via.placeholder.com/150" },
    { name: "General Sponsor 2", logo: "https://via.placeholder.com/150" },
    { name: "General Sponsor 1", logo: "https://via.placeholder.com/150" },
    { name: "General Sponsor 2", logo: "https://via.placeholder.com/150" },
    { name: "General Sponsor 1", logo: "https://via.placeholder.com/150" },
    { name: "General Sponsor 2", logo: "https://via.placeholder.com/150" },
    { name: "General Sponsor 1", logo: "https://via.placeholder.com/150" },
    { name: "General Sponsor 2", logo: "https://via.placeholder.com/150" },
    { name: "General Sponsor 1", logo: "https://via.placeholder.com/150" },
    { name: "General Sponsor 2", logo: "https://via.placeholder.com/150" },
  ],
};

const Sponsors = () => {
  return (
    <div id="sponsors" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8">
          Our <span className="text-orange-600">Sponsors</span>
        </h2>
        <div className="space-y-16">
          {Object.entries(sponsors).map(([category, sponsorsList], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              className="bg-white shadow-lg rounded-lg p-8"
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-center">
                {sponsorsList.map((sponsor, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="w-24 h-24 object-contain mb-4"
                    />
                    <p className="text-lg font-medium">{sponsor.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
