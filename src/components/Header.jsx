import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok, faFacebookF } from "@fortawesome/free-brands-svg-icons";

export const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="w-full top-0 left-0 z-50 sticky bg-white transition-shadow duration-300 pr-[93px]"
      style={{
        boxShadow: isSticky ? "0 2px 8px rgba(0,0,0,0.1)" : "none",
      }}
    >
      <div
        className={`ml-[93px] flex items-center justify-between py-[10px] 
        }`}
      >
        {/* Logo */}
        <Link to="/" className="mx-[50px] rounded-full overflow-hidden">
          <img
            src="https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-6/549062006_122103294549016294_7712740836904410292_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGZ6qZ_bYwUQzo0MYgKfjB9iIFflu3ijSiIgV-W7eKNKNgc498c7IoZVKkEybkzAwkWJiixSXPKJ9zkJnEG4Dke&_nc_ohc=fQQppfHjBzUQ7kNvwF7yFOu&_nc_oc=Adly2gST-2pKO_Xoi0aabMm8Rz649Y3_ifFRVUSapznxeLG7MZIgtRaZ8HK553eRxW4&_nc_zt=23&_nc_ht=scontent.fsgn2-10.fna&_nc_gid=-lTQarxY2tEjoj56mvxobA&oh=00_AfdooX3JV-ApzbvJY1Xr7wW9fLGKtNqUxZQPqf69CFrNCg&oe=68E8E28F"
            alt="Học triết - sống thật"
            width={297}
            height={75}
            className="w-[90px] h-[90px] 2xl:w-[75px] 2xl:h-[75px] object-contain rounded-full"
          />
        </Link>

        {/* Slogan */}
        <div
          className="w-[50%] text-secondary text-[4.5rem] font-[700] text-center"
          style={{
            fontFamily: "Protest Revolution",
          }}
        >
          Học triết - Sống thật
        </div>

        {/* Socials */}
        <div className="flex items-center gap-[8px]">
          <Link
            target="_blank"
            to="https://www.facebook.com/profile.php?id=61580488846551"
            className="w-[4.9rem] h-[4.9rem] 2xl:w-[3.5rem] 2xl:h-[3.5rem] text-secondary border-2 border-secondary flex items-center justify-center rounded-full hover:text-third hover:border-third transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faFacebookF} className="2xl:text-[15px]" />
          </Link>
          <Link
            target="_blank"
            to="https://www.tiktok.com/@hoctriet.songthat"
            className="mr-[33px] w-[4.9rem] h-[4.9rem] 2xl:w-[3.5rem] 2xl:h-[3.5rem] text-secondary border-2 border-secondary flex items-center justify-center rounded-full hover:text-third hover:border-third transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faTiktok} className="2xl:text-[15px]" />
          </Link>
          <Link
            target="_blank"
            to={"https://www.facebook.com/profile.php?id=61580488846551"}
            className="flex items-center text-primary text-[1.8rem] font-[700] py-[30px] px-[32px] 2xl:py-[16px] 2xl:px-[27px] button-follow"
          >
            <span>Đi thôi</span>
            <img
              className="ml-[27px]"
              src="https://avventure.themerex.net/wp-content/uploads/2018/07/arrow-for-button.png"
              alt=""
            />
          </Link>
        </div>
      </div>
    </header>
  );
};
