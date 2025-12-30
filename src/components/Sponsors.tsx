const kangaroopokhara = "https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/491895265_1077511114407514_5421893810400654368_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=HlUX_JoSIfwQ7kNvwGwwLef&_nc_oc=AdkZhN7jaJvANLwvT2AWhZQEHIIVHUccZLw3thDHyUEMbPLjR6mSP3A6tQ9YkpvYTW0&_nc_zt=23&_nc_ht=scontent.fktm3-1.fna&_nc_gid=ny68oBqGAHvJsUb3vPSDow&oh=00_Afnis2CxOEPQUEbloTL-21Ff73pjPDRGA0h4HscMtlrdWA&oe=6959216E";
const yashi = "https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/476394564_122203120112208202_3930788751999818459_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=EdNXUlsBc1YQ7kNvwEoFtT2&_nc_oc=AdleQoEZtooNfAjEi7AsM21zZlR5zUdT-mIu0yNMF-SznV94vsRoHuhVRsXqpwwmz9Q&_nc_zt=23&_nc_ht=scontent.fktm3-1.fna&_nc_gid=flv1pkEsBiZwKnhuOGd7yw&oh=00_Afl96-0VBvntxqpySW8qOHRvbmhoco186YZ2hGV3-Lr1Pg&oe=69591F1A";
const old_lan_hua = "https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/298652431_559165006000056_3699906122409785334_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_aid=0&_nc_ohc=HtN7XCciz-8Q7kNvwHV6jhH&_nc_oc=AdnW6DWbZB05vpcLw6V6fEZh3Pb4Gm4LEmQqECqq3_MvkOLkldaR_U6J8Q0sFYHqpYY&_nc_zt=23&_nc_ht=scontent.fktm3-1.fna&_nc_gid=KmmJFYCksQLF7vjxJMxxvA&oh=00_Afkzob-sC1AG40mfkWm75enNfcXrcpzpHOapBfpz7WVW3A&oe=695903F9";
const infochip = "https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/481972241_1075873271228233_8889409555477099425_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Qtdtq2l5HnAQ7kNvwHFh3xy&_nc_oc=AdlskDF58YEKlCujaaTFZLeo-7-TblqDRMH_gQ8ZghDYRCfyMegH9Y26fWHDMQNo7AQ&_nc_zt=23&_nc_ht=scontent.fktm3-1.fna&_nc_gid=ASO2RFbwtsp2_5kMQLqzZQ&oh=00_AfkwH3wSqL3_1WcKhTL7CiKwbKCPcK_OR6mw-SSxtIM7nA&oe=695923B2";
const mindcraft = "https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/461714494_122110409246521358_4884230586989047632_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ABm97KV1u-8Q7kNvwFvJPU2&_nc_oc=Adl9YInF-ul7yF6kzVYpNpl-kzFikHhvjI_BKlRRuT_I6ZK6SGdU5dCDNOffmp61oMY&_nc_zt=23&_nc_ht=scontent.fktm3-1.fna&_nc_gid=GSm_os49idYZR7S5d0-r2w&oh=00_AfmvLY-q0fMLGVJGUJ1FD0W7tS0lYwl75L4TyumSEdzk8Q&oe=6958FD92";
const jankaritech = "https://scontent.fktm3-1.fna.fbcdn.net/v/t1.6435-9/162117560_191427782781785_7284501706623852323_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=DndB5IWOv4sQ7kNvwFRgP56&_nc_oc=AdnInibSC9uQ5NeTpSJJIa5HCW3te4-12sWLR2Qx7oY-Cf5sS9uYPYDmtdsGSzYU8VQ&_nc_zt=23&_nc_ht=scontent.fktm3-1.fna&_nc_gid=bLziS-LbFYLdIgUJNmSbgg&oh=00_Afl4aj0Ngbbg6wNncTdlfYvikcyoXB93LWq8lEAzImHQgA&oe=697AC4F6";


const sponsors: Record<string, { name: string; logo: string; link: string }[]> = {
  Title: [
    {
      name: "Kangaroo Education",
      logo: kangaroopokhara,
      link: "https://www.facebook.com/kangaroopokhara",
    },
  ],
  Powered_By: [
    {
      name: "Yashi Academy",
      logo: yashi,
      link: "https://www.facebook.com/yashi.academy",
    },
  ],
  Associated_with: [
    {
      name: "Old Lan Hua",
      logo: old_lan_hua,
      link: "https://www.facebook.com/oldlanhuachineserestaurant",
    },
  ],
  General_Partner: [
    {
      name: "Infochip",
      logo: infochip,
      link: "https://www.facebook.com/infochippkr",
    },
    {
      name: "Mind Craft",
      logo: mindcraft,
      link: "https://www.facebook.com/MINDCRAFT.NP",
    },
    {
      name: "Jankari Tech",
      logo: jankaritech,
      link: "https://www.facebook.com/jankaritech",
    },
  ],
  // Gifting: [
  //   { name: "Book Mart", logo: Bookmart, link: "https://www.facebook.com/bookmart.np" },
  //   { name: "Books Mandala", logo: Books_Mandala, link: "https://www.facebook.com/booksmandala" },
  // ],
};

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
            <div className="flex justify-center flex-wrap gap-8">
              {(sponsors[category] as { name: string; logo: string; link: string }[]).map((sponsor, i: number) => (
                <a
                  key={i}
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 group"
                >
                 <div className="relative w-40 h-40 rounded-full bg-purple-900 group">
                  <div className="absolute inset-0 flex items-center justify-center rounded-full bg-gradient-to-t from-purple-400 via-purple-200 to-transparent scale-110">
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
