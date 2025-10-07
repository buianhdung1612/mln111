import CircleIcon from "@mui/icons-material/Circle";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { Eye } from "iconoir-react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export const LaoDong = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(https://avventure.themerex.net/wp-content/uploads/2018/04/biege_bg_.jpg)`,
        }}
        className="py-[90px] text-center"
      >
        <div className="text-[6rem] text-primary font-[700]">
          Tha hóa trong lao động
        </div>
        <div className="flex items-center justify-center mt-[20px] mr-[150px]">
          <Link
            to={"/"}
            className="text-[1.7rem] text-[#746e5e] font-[700] uppercase hover:text-[#d0bc80] transition-colors duration-300"
          >
            Trang chủ
          </Link>
          <KeyboardDoubleArrowRightIcon
            style={{ fontSize: "2.5rem" }}
            className="mx-[10px] text-[#d0bc80] font-[900]"
          />
          <span className="text-[#d0bc80] font-[700] text-[2.2rem] mx-[5px]">
            .
          </span>
          <span className="text-[#d0bc80] font-[700] text-[2.2rem] mx-[5px]">
            .
          </span>
          <span className="text-[#d0bc80] font-[700] text-[2.2rem] mx-[5px]">
            .
          </span>
          <KeyboardDoubleArrowRightIcon
            style={{ fontSize: "2.5rem" }}
            className="mx-[10px] text-[#d0bc80] font-[900]"
          />
          <span className="text-[1.7rem] text-[#d0bc80] font-[700] uppercase">
            Tha hóa trong lao động
          </span>
        </div>
      </section>

      <section className="py-[110px] w-[1140px] flex mx-auto gap-[40px]">
        <div className="w-[64%]">
          <div className="text-[#d0bc80] font-[700] text-[1.8rem] mb-[22px]">
            Học triết sống thật
          </div>
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className="w-full h-[400x]"
            width={750}
            height={400}
          />
          <div className="flex items-center">
            <div className="text-[#d0bc80] font-[700] my-[40px] pr-[20px] py-0 border-r-[1.6px] border-dashed border-[#f3f1ec]">
              05/10/2025
            </div>
            <div className="ml-[20px] text-[#746e5e]">Group 1 & 5</div>
          </div>
          <p className="text-[2rem] text-[#746e5e] mb-[28px]">
            Tha hoá trong lao động là hình thức cơ bản và sâu sắc nhất của tha
            hoá, gắn liền với việc sức lao động trở thành hàng hoá và quá trình
            sản xuất giá trị thặng dư trong chủ nghĩa tư bản.
          </p>
          <ul>
            <li className="mb-[25px]">
              <span className="text-[2rem] text-[#746e5e] mr-[10px]">1.</span>
              <span className="text-[2rem] text-[#746e5e]">
                Sức lao động là hàng hoá
                <ul className="ml-[50px]">
                  <li className="my-[10px]">
                    <CircleIcon
                      className="mr-[10px] text-[#9694ae] mb-[5px]"
                      sx={{
                        fontSize: "10px",
                      }}
                    />
                    Là toàn bộ năng lực thể chất và tinh thần của con người được
                    sử dụng trong sản xuất.
                  </li>
                  <li className="my-[10px]">
                    <CircleIcon
                      className="mr-[10px] text-[#9694ae] mb-[5px]"
                      sx={{
                        fontSize: "10px",
                      }}
                    />
                    Để sức lao động trở thành hàng hoá, người lao động phải tự
                    do về thân thể nhưng không có tư liệu sản xuất để tự làm
                    việc.
                  </li>
                </ul>
              </span>
            </li>
            <li className="mb-[25px]">
              <span className="text-[2rem] text-[#746e5e] mr-[10px]">2.</span>
              <span className="text-[2rem] text-[#746e5e]">
                Sự bóc lột và giá trị thặng dư
                <ul className="ml-[50px]">
                  <li className="my-[10px]">
                    <CircleIcon
                      className="mr-[10px] text-[#9694ae] mb-[5px]"
                      sx={{
                        fontSize: "10px",
                      }}
                    />
                    Nhà tư bản mua sức lao động của công nhân, nhưng buộc họ làm
                    việc vượt quá thời gian cần thiết để tái tạo giá trị sức lao
                    động.
                  </li>
                  <li className="my-[10px]">
                    <CircleIcon
                      className="mr-[10px] text-[#9694ae] mb-[5px]"
                      sx={{
                        fontSize: "10px",
                      }}
                    />
                    Phần giá trị do công nhân tạo ra ngoài thời gian tất yếu đó
                    chính là giá trị thặng dư, bị nhà tư bản chiếm đoạt.
                  </li>
                </ul>
              </span>
            </li>
            <li className="mb-[25px]">
              <span className="text-[2rem] text-[#746e5e] mr-[10px]">3.</span>
              <span className="text-[2rem] text-[#746e5e]">
                Biểu hiện của sự tha hoá
                <ul className="ml-[50px]">
                  <li className="my-[10px]">
                    <CircleIcon
                      className="mr-[10px] text-[#9694ae] mb-[5px]"
                      sx={{
                        fontSize: "10px",
                      }}
                    />
                    Người lao động không sở hữu sản phẩm, không làm chủ quá
                    trình lao động, và bị biến thành công cụ để tạo lợi nhuận
                    cho người khác.
                  </li>
                  <li className="my-[10px]">
                    <CircleIcon
                      className="mr-[10px] text-[#9694ae] mb-[5px]"
                      sx={{
                        fontSize: "10px",
                      }}
                    />
                    Đây là hình thức tha hoá cơ bản nhất, phản ánh sự mất quyền
                    làm chủ của con người đối với chính hoạt động sống của mình.
                  </li>
                </ul>
              </span>
            </li>
          </ul>
          <div className="mt-[50px] flex items-center justify-between">
            <div className="text-primary text-[2.1rem]">
              <span className="text-[#746e5e]">Từ khóa: </span>Tha hóa lao động
            </div>
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
        <div className="flex-1">
          <div className="w-full bg-[#d0bc80] p-[40px] 2xl:px-[32px] 2xl:py-[36px] text-primary text-[2.4rem] font-[500]">
            Bài viết liên quan
          </div>
          <div
            className="w-full pt-[40px] pb-[60px] px-[40px]"
            style={{
              backgroundImage: `url(https://avventure.themerex.net/wp-content/uploads/2018/04/biege_bg_.jpg)`,
            }}
          >
            <div className="mb-[50px]">
              <div className="relative blog">
                <img
                  src="https://luatduonggia.vn/wp-content/uploads/2024/09/hien-tuong-tha-hoa-la-gi-hien-tuong-tha-hoa-con-nguoi-la-gi.jpg"
                  alt=""
                  width={290}
                  height={152}
                  className="w-[290px] h-[152px]"
                />
                <Link
                  to={"/tha-hoa-ban-than"}
                  className="w-[63px] h-[63px] bg-[#d0bc80] rounded-full text-primary flex items-center justify-center absolute top-[50%] left-[50%] translate-[-50%] eye"
                >
                  <Eye className="text-[1.8rem]" />
                </Link>
              </div>
              <h3 className="text-primary text-[2.2rem] 2xl:text-[2rem] hover:text-[#d0bc80] transition-colors duration-300 my-[10px]">
                <Link to={"/tha-hoa-ban-than"}>Tha hóa bản thân</Link>
              </h3>
              <p className="text-[#d0bc80] text-[1.3rem] font-[700] uppercase">
                Group 1 & 5 | 05/10/2025
              </p>
            </div>
            <div>
              <div className="relative blog">
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                  width={290}
                  height={152}
                  className="w-[290px] h-[152px]"
                />
                <Link
                  to={"/tha-hoa-xa-hoi"}
                  className="w-[63px] h-[63px] bg-[#d0bc80] rounded-full text-primary flex items-center justify-center absolute top-[50%] left-[50%] translate-[-50%] eye"
                >
                  <Eye className="text-[1.8rem]" />
                </Link>
              </div>
              <h3 className="text-primary text-[2.2rem] 2xl:text-[2rem] hover:text-[#d0bc80] transition-colors duration-300 my-[10px]">
                <Link to={"/tha-hoa-xa-hoi"}>Tha hóa trong xã hội</Link>
              </h3>
              <p className="text-[#d0bc80] text-[1.3rem] font-[700] uppercase">
                Group 1 & 5 | 05/10/2025
              </p>
            </div>
          </div>

          <div className="w-full bg-[#d0bc80] mt-[40px] p-[40px] 2xl:px-[32px] 2xl:py-[36px] text-primary text-[2.4rem] font-[500]">
            Từ khóa
          </div>
          <div
            className="w-full pt-[40px] pb-[60px] px-[40px] flex gap-[10px]"
            style={{
              backgroundImage: `url(https://avventure.themerex.net/wp-content/uploads/2018/04/biege_bg_.jpg)`,
            }}
          >
            <Link
              to={"/"}
              className="uppercase bg-[#dbdad4] text-[1.3rem] text-primary font-[600] inline-block px-[10px] py-[6px] hover:text-white hover:bg-secondary transition-colors duration-300 cursor-pointer"
            >
              Học triết sống thật
            </Link>
            <Link
              to={"/tha-hoa-lao-dong"}
              className="uppercase bg-[#dbdad4] text-[1.3rem] text-primary font-[600] inline-block px-[10px] py-[6px] hover:text-white hover:bg-secondary transition-colors duration-300 cursor-pointer"
            >
              Tha hóa lao động
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
