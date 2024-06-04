import Section from "@/components/ui/section";
import Card from "./card";

const data = [
  {
    id: 1,
    title: "Miễn phí",
    description:
      "Hoàn hảo để dùng thử Tương phản hoặc bắt đầu với hội thảo trên web",
    price: 0,
    features: [
      "Up to 50 active contacts per month",
      "Up to 50 active contacts per month",
    ],
    labelColor: "#fff7ad",
  },
  {
    id: 2,
    title: "Nâng cao",
    description:
      "Hoàn hảo để dùng thử Tương phản hoặc bắt đầu với hội thảo trên web",
    price: 100000,
    features: [
      "Up to 50 active contacts per month",
      "Up to 50 active contacts per month",
      "Up to 50 active contacts per month",
    ],
    isBestSeller: true,
    labelColor: "#ceceff",
  },
  {
    id: 3,
    title: "Chuyên nghiệp",
    description:
      "Hoàn hảo để dùng thử Tương phản hoặc bắt đầu với hội thảo trên web",
    price: 500000,
    features: [
      "Up to 50 active contacts per month",
      "Up to 50 active contacts per month",
    ],
    labelColor: "#ffecee",
  },
];

function MembershipSection() {
  return (
    <Section
      title="Các gói tài khoản"
      subTitle="Bắt đầu với việc học hoàn toàn miễn phí. <br/> Nâng cấp tài khoản để trải nghiệm nhiều tính năng tuyệt vời hơn!"
    >
      <div className="flex w-full flex-col items-stretch gap-8 lg:flex-row lg:items-center">
        {data.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </Section>
  );
}

export default MembershipSection;
