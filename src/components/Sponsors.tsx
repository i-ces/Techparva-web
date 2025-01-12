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
import Offensive_Security from "../../public/offensive.png";

const sponsors = {
  Title: [
    {
      name: "Nipuna Prabhidhik Sewa",
      logo: nipuna_sewa,
      link: "https://www.facebook.com/NipunaPrabidhikSewa", // Example link
    },
  ],
  Diamond: [
    {
      name: "AECC Global",
      logo: "https://www.aeccglobal.com.np/images/new-logo.png",
      link: "https://www.aeccglobal.com.np/study-abroad-consultant/pokhara",
    },
    { name: "Infochip (P.) Ltd", logo: info_chip, link: "http://www.infochip.com.np/?fbclid=IwY2xjawHo3cBleHRuA2FlbQIxMAABHdj32IrAjcD43MjEYjYJdOUzrvXyOAa_MsW3sS9cHG69puyuLGikayFCkQ_aem_cdYadxQoo_kdOoElI_YKhA" },
  ],
  Gold: [
    { name: "JanakariTech Pvt. Ltd.", logo: Janakari_tech, link: "https://www.facebook.com/jankaritech" },
    { name: "Rebooted Creation Labs Pvt. Ltd.", logo: Rebooted, link: "https://rcl-website.vercel.app/?fbclid=IwY2xjawHo3eNleHRuA2FlbQIxMAABHUUKG9WutYRTDZqRdR1V_NNcCIKggWh0VG1H6clBNNW-HfOfClaExn16dw_aem_2ajVa7Fj6bRJGNoNLzIGVQ" },
  ],
  E_learning_Partner: [
    { name: "Programiz", logo: programiz_logo, link: "https://www.facebook.com/programiz" },
  ],
  Security_Partner: [
    { name: "Offensive Security", logo: Offensive_Security, link: "https://www.offsec.com/?fbclid=IwY2xjawHwGeBleHRuA2FlbQIxMAABHXliNpORt7ogtruYobHik_TRO13T4bGSfUswnNf76og4b7Iv53cGZQr-sQ_aem_fr1_sToOeHrXTWpMpVum0w" },
  ],
  Silver: [
    { name: "Everest Technomania Pvt. Ltd", logo: "https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/301671258_499152865548827_845228293027469985_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=OyIJocDIWZYQ7kNvgFAc6NH&_nc_zt=23&_nc_ht=scontent.fktm3-1.fna&_nc_gid=AAl9tYwtPIckUvFIiG-M7kI&oh=00_AYAj144sqpvg0FCmR2nDXIWzE3F4b4k_DFmWt-9h_IQ8QA&oe=678273D7", link: "https://www.facebook.com/profile.php?id=100063623531083" },
    { name: "Fresh Elements Restaurant", logo: freshelement, link: "https://www.facebook.com/FreshElementsRestaurant" },
    { name: "Citizen Furniture Trade Link Pvt. Ltd", logo: citizen_furniture, link: "https://www.facebook.com/citizenfurniturepokhara" },
    { name: "MarginTop Solutions", logo: margin_top, link: "https://www.facebook.com/margintopsolutionsnepal" },
    { name: "Black Tech.", logo: Black_Tech, link: "https://www.facebook.com/blacktechnepal" },
    { name: "Panchamrit Bakery and Cafe.", logo: Panchamrit, link: "https://www.facebook.com/profile.php?id=100054501338729" },
  ],
  Gifting: [
    { name: "Book Mart", logo: Bookmart, link: "https://www.facebook.com/bookmart.np" },
    { name: "Books Mandala", logo: Books_Mandala, link: "https://www.facebook.com/booksmandala" },
  ],
};

const Sponsors = () => {
  return (
    <div id="sponsors" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-8">
          Our <span className="text-blue-800">Sponsors</span>
        </h2>

        {Object.keys(sponsors).map((category) => (
          <div className="mb-16" key={category}>
            <h3 className="text-3xl font-semibold text-center text-yellow-600 mb-4">
              {category.replace(/_/g, " ")}
            </h3>
            <div className="flex justify-center flex-wrap gap-8">
              {sponsors[category].map((sponsor, i) => (
                <a
                  key={i}
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 group"
                >
                 <div className="relative w-40 h-40 rounded-full bg-blue-200 group">
                  <div className="absolute inset-0 flex items-center justify-center rounded-full bg-gradient-to-t from-purple-200 via-purple-100 to-transparent scale-110">
                    <img
                      src={sponsor.logo}
                      alt="Sponsor Logo"
                      className="w-36 h-36 object-contain rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2"
                    />
                  </div>
                </div>

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
