import InfiniteMovingCards from "./InfiniteScroll";

import nipuna_sewa from "../../public/nipuna sewa.png";
// import AECC from "../../public/AECC Logo.pdf";
import info_chip from "../../public/infochip_updated.png";
import Janakari_tech from "../../public/JankariTech.png";
import Rebooted from "../../public/Rebooted.png";
import margin_top from "../../public/margintop.svg";
import freshelement from "../../public/freshelementslogo.png";
// import everest_testinomial from "../../public/Everest Technomania Pvt.Ltd.pdf";
import citizen_furniture from "../../public/citizen furniture.jpg";
import Bookmart from "../../public/Bookmart logo.png";
import programiz_logo from "../../public/Programiz.svg";

const sponsors = {
  Title: [
    {
      name: "Nipuna Prabhidhik Sewa",
      logo: nipuna_sewa, 
    },
  ],
  Diamond: [
    { name: "AECC Global", logo: "https://www.aeccglobal.com.np/images/new-logo.png" },
    { name: "Infochip (P.) Ltd", logo: info_chip },
  ],
  Gold: [
    { name: "JanakariTech Pvt. Ltd.", logo: Janakari_tech },
    { name: "Rebooted Creation Labs Pvt. Ltd.", logo: Rebooted },
  
  ],
  Silver: [
    { name: "Everest Technomania Pvt. Ltd", logo: "https://scontent.fktm21-2.fna.fbcdn.net/v/t39.30808-6/301671258_499152865548827_845228293027469985_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=BrlVK7pV8owQ7kNvgE2JjiW&_nc_zt=23&_nc_ht=scontent.fktm21-2.fna&_nc_gid=Ak4tl3v2ngfX0ig4QucsYBO&oh=00_AYAaOYQCFZZ4ozXH1c-hi2EJhMp0aXqDg7onQUT1mVjUuA&oe=6779A9D7  " },
    { name: "Fresh Elements Restaurant", logo: freshelement },
    { name: "Citizen Furniture Trade Link Pvt. Ltd", logo: citizen_furniture },
    { name: "MarginTop Solutions", logo: margin_top },
      { name: "Black Tech.", logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAATlBMVEUAAAAoKCXZ2dj////39/fFxsRiYmJkY2Q6OjqxsbEjJiUJBwAwLy6urq4rLCsRDg3KycrNzc3i4uKqqqo3NTUQFRNQTU89PTtTU1Jra2paD/exAAAAZklEQVR4Ad2NxQGAMAADA4e7y/6Dor/KAJB6Y/oAAvkR4uciYtlIklRSBrnNFUApVVDbZAO0z5G7SUmFl+y6fnCSFS+cndkbKxjdZCC1TnICJml2x76kxjGxyQWQDymsXnJj149xAs/sAw/uDqKRAAAAAElFTkSuQmCC" },
      { name: " Panchamrit Bakery and cafe.", logo: "https://scontent.fktm21-1.fna.fbcdn.net/v/t39.30808-6/408803472_854376033055767_6050547739695413894_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=efgS88vi1MwQ7kNvgEK_iMi&_nc_zt=23&_nc_ht=scontent.fktm21-1.fna&_nc_gid=AauGBGatsoqN-puAVQZtp0y&oh=00_AYCibfZ-VT_wEYKu82I1u5PqXT35rxgk3aIs_tQMfEmarA&oe=6779CFC1" },

  ],
  General: [
    { name: "Book Mart", logo: Bookmart },
    { name: "Books Mandala", logo: "https://booksmandala.com/_next/image?url=%2FImages%2FWhiteModelogo.png&w=2048&q=75" },
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

        <div className="">
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
          <div className="text-center flex justify-center">
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
