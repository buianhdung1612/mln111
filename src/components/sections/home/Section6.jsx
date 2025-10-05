import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowArchery, Link as LinkIcon } from "iconoir-react";
import { Link } from "react-router-dom";

export const Section6 = () => {
  const [activeTab, setActiveTab] = useState("facebook");
  const [visibleCount, setVisibleCount] = useState(6);

  const facebookPosts = [
    {
      title: `THA HÓA TRONG BẢN THÂN – KHI BẠN KHÔNG CÒN LÀ "CHÍNH MÌNH"`,
      image:
        "https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-6/555046952_122104743801016294_4095675205837700536_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGsk_wCL8NgRiKt_knoEskYH-KuJwbyIncf4q4nBvIid7VR07HYFBlLx-rTGz70WqGIqW3wDEjDjhttXbq59sEI&_nc_ohc=bjL45GnewfsQ7kNvwF0H47j&_nc_oc=AdmlarKk7vxmzCOG063FidR7QmtrKD7AusmnHS0cTPfB6LMjQWqe9190KBoqseEBhDRWobdf-5adMZnOej3E5KSP&_nc_zt=23&_nc_ht=scontent.fsgn16-1.fna&_nc_gid=D_eogONDG-hAlVXFhBoNtg&oh=00_AfdkY3tNHl9D2rlcgHE9KaYvgTndAM2B6Zq705i3KCpA4A&oe=68E804D9",
      link: "https://www.facebook.com/photo?fbid=122104743795016294&set=a.122104543605016294",
    },
    {
      title: "Tha hoá trong quan hệ xã hội – chuyện không xa vời",
      image: "https://i.imgur.com/bryGQkg.jpeg",
      link: "https://www.facebook.com/photo?fbid=122104336605016294&set=a.122104543605016294",
    },
    {
      title: "LAO ĐỘNG BỊ THA HÓA: KHI HOẠT ĐỘNG SÁNG TẠO TRỞ THÀNH GÁNH NẶNG",
      image: "https://i.imgur.com/yTWL3fB.jpeg",
      link: "https://www.facebook.com/photo?fbid=122105355747016294&set=a.122104543605016294",
    },
    {
      title:
        "THA HÓA TRONG QUAN HỆ XÃ HỘI - KHI SỰ KẾT NỐI BIẾN THÀNH KHOẢNG CÁCH",
      image: "https://i.imgur.com/dlJE6CD.jpeg",
      link: "https://www.facebook.com/photo?fbid=122105624733016294&set=a.122104543605016294",
    },
    {
      title: "Có bao giờ bạn thấy mình giống những hình ảnh này chưa?",
      image:
        "https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-6/557060107_122105717931016294_8056338234696226943_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFMDwEZ2wKdW2thAsJlLrMjqU3lpbg-BUCpTeWluD4FQP_DXkeqFBZAuD7itHqO8eYEXAHmRRzC2rGfksJeuHho&_nc_ohc=OuMi6r2MNqMQ7kNvwGWFmSi&_nc_oc=AdncJnmCxuRkHYAV47qgCF1Wi4jtUaYQYyUKW2q902fY1Qi71weneFPeOKf4I_WUUF0Iyl-QrdedhVST4tXtw5qq&_nc_zt=23&_nc_ht=scontent.fsgn16-1.fna&_nc_gid=l1x7vRh4nhdQcvzmzI-1OQ&oh=00_AfdNGnfCJ4lEuitHcyCvyGTuk8_MDEysAGnTTzKNruGt-Q&oe=68E7D1B3",
      link: "https://www.facebook.com/photo?fbid=122105717925016294&set=a.122104543605016294",
    },
    {
      title:
        "Đi mưa, lội nước, chen chúc kẹt xe… tất cả chỉ để nhận về 5 triệu/tháng.",
      image:
        "https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-6/557049473_122105883657016294_469401593111099045_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGkvbsBzNmPzBJxpT4TwpI6Ev2jarAEGVES_aNqsAQZUb1E_XgeYALnYArZb1-aFEsGaXWyRIFW29Hi5lfPv-Iu&_nc_ohc=E27qdlVz_QwQ7kNvwFzOyK0&_nc_oc=Adm6YR_OHFEN9DbirIrOFbMERwgRWlhapJ2SCyxXA9lbb6CHo3oh_qAZEp0kNKvtAYAnZQLWXOJOumOj4v-zxzRI&_nc_zt=23&_nc_ht=scontent.fsgn16-1.fna&_nc_gid=l1x7vRh4nhdQcvzmzI-1OQ&oh=00_AfdA6eC7PFyOe4-8bBBddl1H_dygiPIRJO1AusPIqxqERw&oe=68E7D19E",
      link: "https://www.facebook.com/photo?fbid=122106030531016294&set=a.122104543605016294",
    },
    {
      title:
        "Tha hóa trong mối quan hệ xã hội: Cổ đại và hiện đại dưới góc nhìn triết học",
      image:
        "https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-6/558428217_122106451035016294_6958972973413921895_n.jpg?stp=dst-jpg_p180x540_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEto_Wu5G7lB_cRCJD-SQjSXbFC_0BCsCpdsUL_QEKwKu6Dd2krY1nRW3jYqxAUOTd1KFH1ZHMOeZNODMAwNTv-&_nc_ohc=_uzy2a6yZ6IQ7kNvwHPqREH&_nc_oc=Adl7TcqRlEnn_Z3QcmFNxnZXj-ycGv5UZuKsoSHhLI1y8vghIv648gxutayzM7NLLe18XTo-lQJler0UlV8B2VoD&_nc_zt=23&_nc_ht=scontent.fsgn16-1.fna&_nc_gid=l1x7vRh4nhdQcvzmzI-1OQ&oh=00_AffOn5_3BceF9sLOmZdyMbWwPsltyCIeXkpfpxOiU5MpWQ&oe=68E7D864",
      link: "https://www.facebook.com/photo?fbid=122106451029016294&set=a.122104285755016294",
    },
    {
      title: "Áp lực thời nay của Digital Marketers",
      image:
        "https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-6/552312823_122104285587016294_3563008038940676757_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHzz6BHOO4HI1PLthsPa423lqb9OBxF56mWpv04HEXnqUxFKJ-ojNquGNKXScVybtRLYCAE4hKNlbW5ArEh6wup&_nc_ohc=oEIezmCL0mEQ7kNvwE4gnDK&_nc_oc=AdlI0lSvRFno2KmNZ9cOPuPcnp5_o7ABxRaR313J1pW_HInDomRlGk8xWOooWSH9eDWbN-8iy3NOBhe4Rjp7tbVE&_nc_zt=23&_nc_ht=scontent.fsgn16-1.fna&_nc_gid=AzqtXr_ywSEn-55fUyGVdg&oh=00_AfczSO4SIpZmnhGLdcKtmSyNAQMETTFCYTacLtk3vihBsw&oe=68E7C461",
      link: "https://www.facebook.com/photo?fbid=122104286721016294&set=a.122104285755016294",
    },
  ];

  const tiktokPosts = Array.from({ length: 9 }).map((_, i) => ({
    id: `tt-${i}`,
    title: `Tha hóa trong lao động`,
    image:
      "https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-6/555541048_122105624739016294_3406924948032419463_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGwjcIUxeqx7drU4ouf5lynPUIRpjfkBCE9QhGmN-QEIXV6olx1odyLMwcc4YpRqPFhkyXDjWPrtUwaPtD2qHbd&_nc_ohc=DxXSvUGlzUcQ7kNvwFvOApS&_nc_oc=AdkcmGmQ_D4hCnI8oOTzulDhvmQ9DfJ4zMG_o_q3eq6uq1tjiJKCvog6pbn5K742FAlgAIJFrMyzpMJmm5qdjWYu&_nc_zt=23&_nc_ht=scontent.fsgn16-1.fna&_nc_gid=SuhI6kQJstK6D430SpzSlw&oh=00_AfeyxW1EXOipPl57XyvzFaxuDgfyx500spmzrKr6WRz9yg&oe=68E7CDC0",
  }));

  const posts = activeTab === "facebook" ? facebookPosts : tiktokPosts;

  return (
    <section className="w-[1110px] mx-auto relative">
      {/* Header */}
      <div className="flex gap-[60px] items-start">
        <h2 className="text-[6rem] text-primary font-[700] leading-[1.2]">
          Khám phá chúng tôi
        </h2>
        <div className="flex-1 flex items-center gap-[20px] justify-end">
          {["facebook", "tiktok"].map((tab) => (
            <div
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setVisibleCount(6);
              }}
              className={`px-[27px] py-[22px] text-[1.6rem] uppercase font-[700] cursor-pointer transition-colors duration-300 ${
                activeTab === tab
                  ? "bg-secondary text-white"
                  : "bg-[#f5f4f0] text-primary hover:bg-secondary hover:text-white"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </div>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="mt-[50px] grid grid-cols-3 gap-[30px]">
        <AnimatePresence mode="wait">
          {posts.slice(0, visibleCount).map((post, index) => (
            <motion.div
              key={index}
              className="relative cursor-pointer overflow-hidden group"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5 }}
              layout
            >
              <img
                className="w-full h-[303px] object-cover"
                src={post.image}
                alt=""
              />

              {/* Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Link
                  target="_blank"
                  to={post.link}
                  className="w-[56px] h-[56px] bg-[#ffffff26] hover:bg-black flex items-center justify-center rounded-full"
                >
                  <LinkIcon className="text-[2rem] text-white rotate-45" />
                </Link>
              </div>

              {/* Title */}
              <div className="absolute bottom-[20%] line-clamp-2 overflow-hidden left-1/2 -translate-x-1/2 px-[10px] pt-[5px] pb-[0px] text-center bg-[#ffffff26] text-[1.4rem] font-[700] text-white w-[80%] uppercase z-20 opacity-0 group-hover:opacity-100 transition-all duration-300">
                {post.title}
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Load more */}
      {visibleCount < posts.length && (
        <div
          onClick={() => setVisibleCount((prev) => prev + 2)}
          className="flex items-center justify-center text-secondary mt-[50px] hover:text-primary hover:border-primary transition-colors duration-300 cursor-pointer group"
        >
          <span className="text-[1.8rem] font-[700] uppercase">Tải thêm</span>
          <div className="w-[50px] h-[50px] border-3 border-secondary ml-[20px] group-hover:border-primary transition-colors duration-300 flex items-center justify-center rounded-full relative">
            <ArrowArchery className="rotate-[134deg]" />
          </div>
        </div>
      )}
    </section>
  );
};
