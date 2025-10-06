import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok, faFacebookF } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer
      className="pt-[90px] pb-[50px]"
      style={{
        backgroundImage: `url(https://avventure.themerex.net/wp-content/uploads/2018/04/biege_bg_.jpg)`,
      }}
    >
      <div className="w-[1140px] mx-auto px-[15px]">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img
              src="https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-6/549062006_122103294549016294_7712740836904410292_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGZ6qZ_bYwUQzo0MYgKfjB9iIFflu3ijSiIgV-W7eKNKNgc498c7IoZVKkEybkzAwkWJiixSXPKJ9zkJnEG4Dke&_nc_ohc=fQQppfHjBzUQ7kNvwF7yFOu&_nc_oc=Adly2gST-2pKO_Xoi0aabMm8Rz649Y3_ifFRVUSapznxeLG7MZIgtRaZ8HK553eRxW4&_nc_zt=23&_nc_ht=scontent.fsgn2-10.fna&_nc_gid=-lTQarxY2tEjoj56mvxobA&oh=00_AfdooX3JV-ApzbvJY1Xr7wW9fLGKtNqUxZQPqf69CFrNCg&oe=68E8E28F"
              alt="Học triết - sống thật"
              width={297}
              height={75}
              className="w-[90px] h-[90px] 2xl:w-[75px] 2xl:h-[75px] object-contain rounded-full"
            />
          </Link>
          <div className="flex items-center">
            <span className="text-[2.3rem] text-primary font-[500] mr-[10px]">
              Tìm tôi
            </span>
            <div className="flex items-center gap-[5px]">
              <Link
                target="_blank"
                to="https://www.facebook.com/profile.php?id=61580488846551"
                className="w-[4.9rem] h-[4.9rem] 2xl:w-[4rem] 2xl:h-[4rem] text-secondary border-2 border-secondary flex items-center justify-center rounded-full hover:text-third hover:border-third transition-colors duration-300"
              >
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="2xl:text-[15px]"
                />
              </Link>
              <Link
                target="_blank"
                to="https://www.tiktok.com/@hoctriet.songthat"
                className="mr-[33px] w-[4.9rem] h-[4.9rem] 2xl:w-[4rem] 2xl:h-[4rem] text-secondary border-2 border-secondary flex items-center justify-center rounded-full hover:text-third hover:border-third transition-colors duration-300"
              >
                <FontAwesomeIcon icon={faTiktok} className="2xl:text-[15px]" />
              </Link>
            </div>
          </div>
        </div>
        <p className="text-[#746e5e] text-[1.4rem] mt-[50px]">
          <span className="text-[#d0bc80]">ThemeREX</span> © 2025. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};
