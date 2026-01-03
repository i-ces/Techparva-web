import { sponsors } from "../data/sponser";

const Sponsors = () => {
  return (
    <div id="sponsors" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-8">
          Our <span className="text-blue-800">Partners</span>
        </h2>

        {Object.keys(sponsors).map((category) => (
          <div className="mb-16" key={category}>
            <h3 className="text-3xl font-semibold text-center text-yellow-600 mb-4">
              {category.replace(/_/g, " ")}
            </h3>
            <div className="bg-white/85 p-4 flex justify-center flex-wrap gap-10 rounded-lg">
              {(
                sponsors[category] as {
                  name: string;
                  logo: string;
                  link: string;
                }[]
              ).map((sponsor, i: number) => (
                <a
                  key={i}
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 group"
                >
                  <img
                    src={sponsor.logo}
                    alt="Sponsor Logo"
                    className="w-60 h-60 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2"
                  />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
