import InfiniteMovingCards from "./InfiniteScroll";

import nipuna_sewa from "../../public/nipuna sewa.png";
import AECC from "../../public/AECC Logo.pdf";
import info_chip from "../../public/infochip_updated.png";
import Janakari_tech from "../../public/JankariTech.png";
import Rebooted from "../../public/Rebooted.png";
import margin_top from "../../public/margintop.svg";
import freshelement from "../../public/freshelementslogo.png";
import everest_testinomial from "../../public/Everest Technomania Pvt.Ltd.pdf";
import citizen_furniture from "../../public/citizen furniture.jpg";
import Bookmart from "../../public/Bookmart logo.png";
import programiz_logo from "../../public/Programiz.svg";

const sponsors = {
  Title: [
    {
      name: "Nipuna Prabhidhik Sewa",
      logo: nipuna_sewa, // Use the imported logo directly
    },
  ],
  Diamond: [
    { name: "AECC Global", logo: AECC },
    { name: "Infochip (P.) Ltd", logo: info_chip },
  ],
  Gold: [
    { name: "JanakariTech Pvt. Ltd.", logo: Janakari_tech },
    { name: "Rebooted Creation Labs Pvt. Ltd.", logo: Rebooted },
  
  ],
  Silver: [
    { name: "Everest Technomania Pvt. Ltd", logo: everest_testinomial },
    { name: "Fresh Elements Restaurant", logo: freshelement },
    { name: "Citizen Furniture Trade Link Pvt. Ltd", logo: citizen_furniture },
    { name: "MarginTop Solutions", logo: margin_top },
      { name: "Black Tech.", logo: "https://via.placeholder.com/150" },
      { name: " Panchamrit Bakery and cafe.", logo: " Panchamrit_Bakery_and_cafe" },

  ],
  General: [
    { name: "Book Mart", logo: Bookmart },
    { name: "Books Mandala", logo: "https://via.placeholder.com/150" },
    { name: "Programiz", logo: programiz_logo },
   
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
              </div>
            ))}
          </div>

                {/* Static gold Section */}
               {/* <div className="text-center">
            {sponsors.Gold.map((sponsor, i) => (
              <div key={i} className="inline-block mx-8 p-4 rounded-lg">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-32 h-32 object-contain mb-4"
                />
              </div>
            ))}
          </div> */}
          
             {/* Static silver Section */}
              {/* <div className="text-center">
            {sponsors.Silver.map((sponsor, i) => (
              <div key={i} className="inline-block mx-8 p-4 rounded-lg">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-32 h-32 object-contain mb-4"
                />
              </div>
            ))}
          </div>  */}

             {/* Static general Section */}
              {/* <div className="text-center">
            {sponsors.General.map((sponsor, i) => (
              <div key={i} className="inline-block mx-8 p-4 rounded-lg">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-32 h-32 object-contain mb-4"
                />
              </div>
            ))}
          </div>  */}

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
