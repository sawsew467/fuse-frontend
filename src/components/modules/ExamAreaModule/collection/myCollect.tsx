import { Search } from "@/components/ui/search";
import Card from "../card";
import Section from "../section";

import { examAreaData } from "@/data/exam-area";

import File from "@public/image/svg/file.svg";

function MyCollect() {
  return (
    <Section className="pt-1" title="Tất cả" icon={File}>
      <Search placeholder="Nhập mã môn" />

      <div className="grid p-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {examAreaData.map((card, index) => (
          <>{card.pinAt && <Card card={card} key={index} />}</>
        ))}
      </div>
    </Section>
  );
}

export default MyCollect;
