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
  const transformedSponsors = Object.entries(sponsors).flatMap(
    ([category, sponsorsList]) =>
      sponsorsList.map((sponsor) => ({
        quote: "",
        name: sponsor.name,
        title: category,
        logo: sponsor.logo,
      }))
  );

  return (
    <div id="sponsors" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8">
          Our <span className="text-orange-600">Sponsors</span>
        </h2>
        <InfiniteMovingCards
          items={transformedSponsors}
          direction="left"
          speed="normal"
          pauseOnHover={true}
          className=""
        />
      </div>
    </div>
  );
};

export default Sponsors;
