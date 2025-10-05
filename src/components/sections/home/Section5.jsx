import { Link } from "react-router-dom";
import { Eye, HeartSolid } from "iconoir-react";

export const Section5 = () => {
  return (
    <>
      <section className="mt-[80px] py-[150px] w-[1110px] mx-auto relative">
        <h2 className="text-[6rem] text-primary font-[700] text-center w-full">
          Các hình thức tha hóa
        </h2>
        <div className="flex pt-[50px] gap-[30px]">
          <Link to="/" className="flex-1 block">
            <div className="relative blog">
              <img
                className="w-full h-[320px] object-cover object-[center_30%]"
                src="https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-6/557347049_122105355753016294_7616432181676878605_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFwKC6HZsXiRXC-ZOqLlWbpvOnc082aS8W86dzTzZpLxb7eN-04jjGe59wjaRZ1wQf9O-9SedIcfSA1SMS6oOUz&_nc_ohc=EZuDWCijrA4Q7kNvwFuPt_y&_nc_oc=AdkMd9mT8pjrXsj_lqiifJdYvMBpTdSAllweZHm5CimYe09U02s1cyxVH4QrnVs46Wi9dr_KM-paOKs7XlNJ5E_O&_nc_zt=23&_nc_ht=scontent.fsgn16-1.fna&_nc_gid=SuhI6kQJstK6D430SpzSlw&oh=00_AffeW1vrXVgIXCFzNO8wUWJ0RdxyTrXRKtzJ3NiceCcKfw&oe=68E7D743"
                alt=""
                height={320}
              />
              <div className="w-[63px] h-[63px] bg-[#d0bc80] rounded-full text-primary flex items-center justify-center absolute top-[50%] left-[50%] translate-[-50%] eye">
                <Eye className="text-[1.8rem]" />
              </div>
            </div>
            <h3 className="pt-[20px] text-[3.5rem] font-[500] text-center hover:text-third transition-colors duration-300">
              Tha hoá trong Lao động
            </h3>
            <div className="flex items-center justify-center mt-[10px]">
              <p className="text-[#d0bc80] font-[700]">05/10/2025</p>
              <div className="w-[44px] h-[44px] flex items-center justify-center border-2 border-secondary rounded-full ml-[20px] text-secondary hover:text-[#d0bc80] hover:border-[#d0bc80] transition-colors duration-300">
                <HeartSolid className="text-[1rem]" />
              </div>
            </div>
          </Link>

          <Link to="/" className="flex-1 block">
            <div className="relative blog">
              <img
                className="w-full h-[320px] object-cover object-[center_30%]"
                src="https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-6/558428217_122106451035016294_6958972973413921895_n.jpg?stp=dst-jpg_p180x540_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEto_Wu5G7lB_cRCJD-SQjSXbFC_0BCsCpdsUL_QEKwKu6Dd2krY1nRW3jYqxAUOTd1KFH1ZHMOeZNODMAwNTv-&_nc_ohc=_uzy2a6yZ6IQ7kNvwHPqREH&_nc_oc=Adl7TcqRlEnn_Z3QcmFNxnZXj-ycGv5UZuKsoSHhLI1y8vghIv648gxutayzM7NLLe18XTo-lQJler0UlV8B2VoD&_nc_zt=23&_nc_ht=scontent.fsgn16-1.fna&_nc_gid=l1x7vRh4nhdQcvzmzI-1OQ&oh=00_AffOn5_3BceF9sLOmZdyMbWwPsltyCIeXkpfpxOiU5MpWQ&oe=68E7D864"
                alt=""
                height={320}
              />
              <div className="w-[63px] h-[63px] bg-[#d0bc80] rounded-full text-primary flex items-center justify-center absolute top-[50%] left-[50%] translate-[-50%] eye">
                <Eye className="text-[1.8rem]" />
              </div>
            </div>
            <h3 className="pt-[20px] text-[3.5rem] font-[500] text-center hover:text-third transition-colors duration-300">
              Tha hoá Bản thân
            </h3>
            <div className="flex items-center justify-center mt-[10px]">
              <p className="text-[#d0bc80] font-[700]">05/10/2025</p>
              <div className="w-[44px] h-[44px] flex items-center justify-center border-2 border-secondary rounded-full ml-[20px] text-secondary hover:text-[#d0bc80] hover:border-[#d0bc80] transition-colors duration-300">
                <HeartSolid className="text-[1rem]" />
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};
