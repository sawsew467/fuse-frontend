import Image from "next/image";

import Card from "./card";

import Section from "@/components/ui/section";


const data = [
  {
    title: "Quản lý nhóm dễ dàng",
    description: "Sắp xếp và quản lý các nhóm, dự án, và thư mục một cách trực quan và hiệu quả.",
  },
  {
    title: "Tích hợp công cụ mạnh mẽ",
    description: "Kết nối và sử dụng các công cụ mạnh mẽ giúp bạn nâng cao hiệu suất làm việc.",
  },
  {
    title: "Tương tác thời gian thực",
    description: "Cộng tác và chia sẻ ý tưởng với đồng đội trong thời gian thực mà không gặp trở ngại.",
  },
  {
    title: "Bảo mật hàng đầu",
    description: "Đảm bảo an toàn dữ liệu với các tiêu chuẩn bảo mật hàng đầu thế giới.",
  },
  {
    title: "Hỗ trợ đa nền tảng",
    description: "Truy cập và làm việc trên mọi thiết bị, từ máy tính để bàn đến điện thoại di động.",
  },
  {
    title: "Tùy chỉnh linh hoạt",
    description: "Tùy chỉnh giao diện và tính năng theo nhu cầu riêng của bạn để tối ưu hóa trải nghiệm.",
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
      <div className="container px-5 pt-10 pb-0 sm:px-8 sm:pt-12 sm:pb-0 md:px-10 md:pt-14 md:pb-0 lg:px-[60px] lg:pt-28 lg:pb-0">
        <ul className="flex flex-col lg:flex-row md:flex-row sm:flex-col justify-between gap-10 ">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex flex-row lg:flex-col md:flex-col justify-between items-center gap-2 transform transition-transform duration-500" >
              <Image
                src={benefit.image}
                alt={benefit.title}
                width={80}
                height={80}
              />
              <div className="flex flex-col gap-0 lg:gap-2 md:gap-2">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-title text-left lg:text-center md:text-center ">{benefit.title}</h3>
                <p className="text-sm sm:text-base md:text-base lg:text-base text-left lg:text-center md:text-center">{benefit.description}</p>
              </div>
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
