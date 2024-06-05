import Card from "@/components/modules/LandingpageModule/InforTeamSection/card";
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

function InforTeamSection() {
  return (
    <Section
      title="Đội ngũ phát triển"
      subTitle="Những lập trình viên tài năng đã cùng tạo nên “fuse”"
    >
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-rows-2  gap-10">
          {data.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </div>
    </Section>
  );
}

export default InforTeamSection;