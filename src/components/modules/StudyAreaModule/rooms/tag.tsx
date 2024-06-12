
export type TagType = {
  tagName: string;
};

const Tag = ({ tagName }: TagType) => {
  return (
    <div className="bg-second w-fit rounded-3xl border-2 border-black bg-background px-5 py-1 text-xs font-bold">
      <span className="">{tagName}</span>
    </div>
  );
};

export default Tag;
