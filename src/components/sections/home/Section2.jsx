import { Link } from "react-router-dom";

const philosophers = [
  {
    name: "Socrates",
    image:
      "https://media.istockphoto.com/id/959577452/fr/photo/ancienne-statue-en-marbre-du-grand-philosophe-grec-socrate-sur-fond-de-ciel-bleu.webp?a=1&b=1&s=612x612&w=0&k=20&c=7AaUS6woyrr9AnlCm9UG41dAG8OB5aX5NX3C3n-d2nk=",
  },
  {
    name: "Plato",
    image:
      "https://media.istockphoto.com/id/1807993751/fr/photo/statue-de-platon-en-gros-plan.webp?a=1&b=1&s=612x612&w=0&k=20&c=YJcuVOXSC_QVkH6KMT8f4A60m1kUh1bCsh39ufQpN1g=",
  },
  {
    name: "Karl Marx",
    image:
      "https://images.unsplash.com/photo-1597238683341-26931c8d9a34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2FybCUyMG1hcnh8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Aristotle",
    image:
      "https://media.istockphoto.com/id/164110515/fr/photo/statue-de-aristote.webp?a=1&b=1&s=612x612&w=0&k=20&c=tQ0V5wLiPcXZAd-wBWa2-4BRCUJ6Uyfj4buEc0mLXX0=",
  },
];

export const Section2 = () => {
  return (
    <section className="py-[130px] w-[1140px] px-[15px] mx-auto flex gap-[30px]">
      {philosophers.map((p, i) => (
        <div
          key={i}
          className="flex-1 h-[504px] 2xl:h-[403px] relative item flex flex-col justify-end p-[40px]"
          style={{
            backgroundImage: `url(${p.image})`,
            backgroundSize: "cover",
            backgroundPosition: "44% center",
          }}
        >
          {/* Tên triết gia */}
          <h3 className="text-[3.5rem] text-white text-center">{p.name}</h3>

          {/* Nút Thêm */}
          <Link
            to={"/"}
            className="flex items-center text-primary text-[1.8rem] font-[700] py-[30px] px-[32px] mt-[130px] button-follow"
          >
            <span>Thêm</span>
            <img
              className="ml-[27px]"
              src="https://avventure.themerex.net/wp-content/uploads/2018/07/arrow-for-button.png"
              alt=""
            />
          </Link>
        </div>
      ))}
    </section>
  );
};
