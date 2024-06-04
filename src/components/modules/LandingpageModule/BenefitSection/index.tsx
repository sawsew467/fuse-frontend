import Image from "next/image";

import Card from "./card";

import Section from "@/components/ui/section";


const data = [
  {
    title: "Teams, Projects & Folders",
    description: "Create teams and organize your 3d designs in folders and projects.",
  },
  {
    title: "Teams, Projects & Folders",
    description: "Create teams and organize your 3d designs in folders and projects.",
  },
  {
    title: "Teams, Projects & Folders",
    description: "Create teams and organize your 3d designs in folders and projects.",
  },
  {
    title: "Teams, Projects & Folders",
    description: "Create teams and organize your 3d designs in folders and projects.",
  },
  {
    title: "Teams, Projects & Folders",
    description: "Create teams and organize your 3d designs in folders and projects.",
  },
  {
    title: "Teams, Projects & Folders",
    description: "Create teams and organize your 3d designs in folders and projects.",
  },
]

const benefits = [
  {
    image: "/lightning.svg",
    title: "Nhanh chóng và dễ dàng",
    description: "Nhanh chóng và dễ dàng để bạn có thể dành thời gian tạo nội dung tuyệt vời. Dễ dàng vì không ai thích sự khó khăn."
  },
  {
    image: "/chain.svg",
    title: "Hiệu quả và linh hoạt",
    description: "Hiệu quả và linh hoạt để đáp ứng mọi nhu cầu của bạn. Linh hoạt để bạn có thể làm việc theo cách của mình."
  },
  {
    image: "/heart_hand.svg",
    title: "Được yêu thích và tin tưởng",
    description: "Được yêu thích và tin tưởng bởi hàng triệu người dùng trên toàn thế giới. Tin tưởng để bạn biết rằng dữ liệu của bạn an toàn."
  },
]

function BenefitSection() {
  return (
    <>
      <div className="px-5 pt-10 pb-0 sm:px-8 sm:pt-12 sm:pb-0 md:px-10 md:pt-14 md:pb-0 lg:px-[60px] lg:pt-28 lg:pb-0">
          <ul className="flex flex-col lg:flex-row md:flex-row sm:flex-col justify-between gap-10 ">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex flex-col justify-between items-center gap-2" >
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  width={80}
                  height={80}
                />
                <h3 className="text-2xl lg:text-3xl md:text-3xl sm:text-3xl font-title text-center ">{benefit.title}</h3>
                <p className="text-base text-center">{benefit.description}</p>
              </li>
            ))}
          </ul>
      </div>
      <Section
        title="Và còn nhiều hơn thế nữa"
        subTitle="Hãy sử dụng hiệu quả để tạo nên sự khác biệt"
      >
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-rows-2  gap-10">
          {data.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </div>
      </Section>
    </>
  );
}

export default BenefitSection;
