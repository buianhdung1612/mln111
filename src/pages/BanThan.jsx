import CircleIcon from "@mui/icons-material/Circle";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { Eye } from "iconoir-react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export const BanThan = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(https://avventure.themerex.net/wp-content/uploads/2018/04/biege_bg_.jpg)`,
        }}
        className="py-[90px] text-center"
      >
        <div className="text-[6rem] text-primary font-[700]">
          Tha hóa bản thân
        </div>
        <div className="flex items-center justify-center mt-[20px] mr-[60px]">
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
            Tha hóa bản thân
          </span>
        </div>
      </section>

      <section className="py-[110px] w-[1140px] flex mx-auto gap-[40px]">
        <div className="w-[64%]">
          <div className="text-[#d0bc80] font-[700] text-[1.8rem] mb-[22px]">
            Học triết sống thật
          </div>
          <img
            alt=""
            src="https://luatduonggia.vn/wp-content/uploads/2024/09/hien-tuong-tha-hoa-la-gi-hien-tuong-tha-hoa-con-nguoi-la-gi.jpg"
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
            Tha hoá bản thân là cấp độ sâu nhất của tha hoá, khi con người đánh
            mất bản chất người của mình – không còn sống cho bản thân mà sống
            như một công cụ trong guồng máy sản xuất.
          </p>
          <ul>
            <li className="mb-[25px]">
              <span className="text-[2rem] text-[#746e5e] mr-[10px]">1.</span>
              <span className="text-[2rem] text-[#746e5e]">
                Sức lao động và tinh thần
                <ul className="ml-[50px]">
                  <li className="my-[10px]">
                    <CircleIcon
                      className="mr-[10px] text-[#9694ae] mb-[5px]"
                      sx={{
                        fontSize: "10px",
                      }}
                    />
                    Khi con người phải bán sức lao động để tồn tại, hoạt động
                    sống của họ bị biến thành phương tiện kiếm sống, thay vì là
                    sự khẳng định bản thân.
                  </li>
                  <li className="my-[10px]">
                    <CircleIcon
                      className="mr-[10px] text-[#9694ae] mb-[5px]"
                      sx={{
                        fontSize: "10px",
                      }}
                    />
                    Con người xa lạ với chính mình, không còn tự do và sáng tạo
                    trong công việc.
                  </li>
                </ul>
              </span>
            </li>
            <li className="mb-[25px]">
              <span className="text-[2rem] text-[#746e5e] mr-[10px]">2.</span>
              <span className="text-[2rem] text-[#746e5e]">
                Mục đích lao động bị biến dạng
                <ul className="ml-[50px]">
                  <li className="my-[10px]">
                    <CircleIcon
                      className="mr-[10px] text-[#9694ae] mb-[5px]"
                      sx={{
                        fontSize: "10px",
                      }}
                    />
                    Lao động vốn là sự thể hiện bản chất con người, nhưng dưới
                    chủ nghĩa tư bản, nó chỉ nhằm tạo ra giá trị thặng dư cho
                    người khác.
                  </li>
                  <li className="my-[10px]">
                    <CircleIcon
                      className="mr-[10px] text-[#9694ae] mb-[5px]"
                      sx={{
                        fontSize: "10px",
                      }}
                    />
                    Người lao động mất đi ý nghĩa sống, chỉ còn làm việc để tồn
                    tại.
                  </li>
                </ul>
              </span>
            </li>
            <li className="mb-[25px]">
              <span className="text-[2rem] text-[#746e5e] mr-[10px]">3.</span>
              <span className="text-[2rem] text-[#746e5e]">
                Sự vật hóa quan hệ con người
                <ul className="ml-[50px]">
                  <li className="my-[10px]">
                    <CircleIcon
                      className="mr-[10px] text-[#9694ae] mb-[5px]"
                      sx={{
                        fontSize: "10px",
                      }}
                    />
                    Quan hệ giữa người với người bị chuyển hóa thành quan hệ
                    giữa vật với vật – điển hình trong trao đổi hàng hóa, chứng
                    khoán, thương hiệu.
                  </li>
                  <li className="my-[10px]">
                    <CircleIcon
                      className="mr-[10px] text-[#9694ae] mb-[5px]"
                      sx={{
                        fontSize: "10px",
                      }}
                    />
                    Con người không còn thấy nhau như chủ thể nhân văn, mà như
                    phương tiện kinh tế.
                  </li>
                </ul>
              </span>
            </li>
          </ul>
          <div className="mt-[50px] flex items-center justify-between">
            <div className="text-primary text-[2.1rem]">
              <span className="text-[#746e5e]">Từ khóa: </span>Tha hóa bản thân
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
                  src="https://lh4.googleusercontent.com/proxy/wr4oHQU8gkPF63JKhDOVdnIzefghH7f5XXLezath0gvq2_0eDGiswq64tM1lu2J4yz89Q1kabf_rdW1_rbUQeaF0bZAAbU86pQT9OBInwEc0vcKBVR446C6wVGCoQBz0g43sXzp3WxTjDdFxVLL5z3NSmkUBdVvUURfSG1QVmw"
                  alt=""
                  width={290}
                  height={152}
                  className="w-[290px] h-[152px]"
                />
                <Link
                  to={"/tha-hoa-lao-dong"}
                  className="w-[63px] h-[63px] bg-[#d0bc80] rounded-full text-primary flex items-center justify-center absolute top-[50%] left-[50%] translate-[-50%] eye"
                >
                  <Eye className="text-[1.8rem]" />
                </Link>
              </div>
              <h3 className="text-primary text-[2.2rem] 2xl:text-[2rem] hover:text-[#d0bc80] transition-colors duration-300 my-[10px]">
                <Link to={"/tha-hoa-lao-dong"}>Tha hóa lao động</Link>
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
                <Link to={"/tha-hoa-xa-hoi"}>Tha hóa xã hội</Link>
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
              to={"/tha-hoa-ban-than"}
              className="uppercase bg-[#dbdad4] text-[1.3rem] text-primary font-[600] inline-block px-[10px] py-[6px] hover:text-white hover:bg-secondary transition-colors duration-300 cursor-pointer"
            >
              Tha hóa bản thân
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
