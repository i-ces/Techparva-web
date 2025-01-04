import InfiniteMovingCards from "./InfiniteScroll";

import nipuna_sewa from "../../public/nipuna sewa.png";
import info_chip from "../../public/infochip_updated.png";
import Janakari_tech from "../../public/JankariTech.png";
import Rebooted from "../../public/Rebooted.png";
import margin_top from "../../public/margintop.svg";
import freshelement from "../../public/freshelementslogo.png";
import citizen_furniture from "../../public/citizen furniture.jpg";
import Bookmart from "../../public/Bookmart logo.png";
import programiz_logo from "../../public/Programiz.svg";
import Panchamrit from "../../public/Panchamrit.png";
import Black_Tech from "../../public/Black Tech.png";
import Books_Mandala from "../../public/Books Mandala.png";

const sponsors = {
  Title: [
    {
      name: "Nipuna Prabhidhik Sewa",
      logo: nipuna_sewa,
    },
  ],
  Diamond: [
    {
      name: "AECC Global",
      logo: "https://www.aeccglobal.com.np/images/new-logo.png",
    },
    { name: "Infochip (P.) Ltd", logo: info_chip },
  ],
  Gold: [
    { name: "JanakariTech Pvt. Ltd.", logo: Janakari_tech },
    { name: "Rebooted Creation Labs Pvt. Ltd.", logo: Rebooted },
  ],

  E_learning_Partner: [
    { name: "Programiz", logo: programiz_logo },
  ],

  Silver: [
    { name: "Everest Technomania Pvt. Ltd",logo: "https://scontent.fktm21-2.fna.fbcdn.net/v/t39.30808-6/301671258_499152865548827_845228293027469985_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=BrlVK7pV8owQ7kNvgE2JjiW&_nc_zt=23&_nc_ht=scontent.fktm21-2.fna&_nc_gid=Ak4tl3v2ngfX0ig4QucsYBO&oh=00_AYAaOYQCFZZ4ozXH1c-hi2EJhMp0aXqDg7onQUT1mVjUuA&oe=6779A9D7  "},
    { name: "Fresh Elements Restaurant", logo: freshelement },
    { name: "Citizen Furniture Trade Link Pvt. Ltd", logo: citizen_furniture },
    { name: "MarginTop Solutions", logo: margin_top },
    { name: "Black Tech.",logo: Black_Tech,},
    { name: " Panchamrit Bakery and cafe.",logo: Panchamrit},
  ],
  Gifting: [
    { name: "Book Mart", logo: Bookmart },
    { name: "Books Mandala", logo: Books_Mandala},
  ],
};


const Sponsors = () => {
  return (
    <div id="sponsors" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-8">
          Our <span className="text-blue-800">Sponsors</span>
        </h2>

        {/* Title Sponsor */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-center text-yellow-600 mb-4">
            Title Sponsor
          </h3>
          <div className="flex justify-center">
            {sponsors.Title.map((sponsor, i) => (
              <div key={i} className="mx-4 p-4">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-64 h-64 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Diamond Sponsors */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center text-yellow-600 mb-4">
            Diamond Sponsors
          </h3>
          <div className="flex justify-center flex-wrap gap-8">
            {sponsors.Diamond.map((sponsor, i) => (
              <div key={i} className="p-4">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-48 h-48 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center text-yellow-600 mb-4">
            Gold Sponsors
          </h3>
          <div className="flex justify-center flex-wrap gap-6">
            {sponsors.Gold.map((sponsor, i) => (
              <div key={i} className="p-4">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-36 h-36 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* E-learning Partner */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center text-yellow-600 mb-4">
            E-learning Partner
          </h3>
          <div className="flex justify-center flex-wrap gap-8">
            {sponsors.E_learning_Partner.map((sponsor, i) => (
              <div key={i} className="p-4">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-28 h-28 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center text-yellow-600 mb-4">
            Silver Sponsors
          </h3>
          <div className="flex justify-center flex-wrap gap-8">
            {sponsors.Silver.map((sponsor, i) => (
              <div key={i} className="p-4">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-28 h-28 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Gifting Sponsors */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center text-yellow-600 mb-4">
            Gifting Sponsors
          </h3>
          <div className="flex justify-center flex-wrap gap-8">
            {sponsors.Gifting.map((sponsor, i) => (
              <div key={i} className="p-4">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-36 h-36 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default Sponsors;
