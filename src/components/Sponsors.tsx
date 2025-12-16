import InfiniteMovingCards from "./InfiniteScroll";

const nipuna_sewa = "/nipuna sewa.png";
const Janakari_tech = "/JankariTech.png";
const Rebooted = "/Rebooted.png";
const margin_top = "/margintop.svg";
const freshelement = "/freshelementslogo.png";
const citizen_furniture = "/citizen furniture.jpg";
const Bookmart = "/Bookmart logo.png";
const programiz_logo = "/Programiz.svg";
const Panchamrit = "/Panchamrit.png";
const Black_Tech = "/Black Tech.png";
const Books_Mandala = "/Books Mandala.png";
const Offensive_Security = "/security.png";
const Infochip = "/infochip.png";
const everest = "/everest.png";

const sponsors = {
  Title: [
    {
      name: "Nipuna Prabhidhik Sewa",
      logo: nipuna_sewa,
      link: "https://www.facebook.com/NipunaPrabidhikSewa", 
    },
  ],
  Diamond: [
    {
      name: "AECC Global",
      logo: "https://www.aeccglobal.com.np/images/new-logo.png",
      link: "https://www.aeccglobal.com.np/study-abroad-consultant/pokhara",
    },
    { name: "Infochip (P.) Ltd", logo: Infochip, link: "http://www.infochip.com.np/?fbclid=IwY2xjawHo3cBleHRuA2FlbQIxMAABHdj32IrAjcD43MjEYjYJdOUzrvXyOAa_MsW3sS9cHG69puyuLGikayFCkQ_aem_cdYadxQoo_kdOoElI_YKhA" },
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
    { name: "Everest Technomania Pvt. Ltd", logo: everest, link: "https://www.facebook.com/profile.php?id=100063623531083" },
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
