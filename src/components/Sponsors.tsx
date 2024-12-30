import InfiniteMovingCards from "./InfiniteScroll";

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
          {/* Static Title Section */}
          <div className="text-center">
            {sponsors.Title.map((sponsor, i) => (
              <div key={i} className="inline-block mx-8 p-4 rounded-lg">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-32 h-32 object-contain mb-4"
                />
                {/* <p className="text-xl font-semibold">{sponsor.name}</p> */}
              </div>
            ))}
          </div>

          {/* Static Diamond Section */}
          <div className="text-center">
            {sponsors.Diamond.map((sponsor, i) => (
              <div key={i} className="inline-block mx-8 p-4 rounded-lg">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-32 h-32 object-contain mb-4"
                />
                {/* <p className="text-xl font-semibold">{sponsor.name}</p> */}
              </div>
            ))}
          </div>

          {/* Dynamic Scrolling Sections */}
          <InfiniteMovingCards items={sponsors.Gold} />
          <InfiniteMovingCards items={sponsors.Silver} direction="right" />
          <InfiniteMovingCards items={sponsors.General} />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
