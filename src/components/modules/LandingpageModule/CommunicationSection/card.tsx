"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface User {
  avatar: string;
  userName: string;
  email: string;
}

interface CardProps {
  data: {
    user: User;
    content: string;
  };
}

function Card({ data }: CardProps) {
  const extractEmailPrefix = (email: string): string => {
    if (!email) return "@member";
    const prefix = email.split("@")[0];
    return `@${prefix}`;
  };

  return (
    <div className="relative max-h-[203px] space-y-3 rounded-3xl border-2 border-black bg-white p-3 shadow-3d transition-all hover:shadow-3d-hover lg:p-5">
      <div className="flex gap-2 justify-start">
        <Avatar>
          <AvatarImage src={data.user?.avatar} />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-semibold">{data?.user?.userName}</span>
          <span>{extractEmailPrefix(data?.user?.email)}</span>
        </div>
      </div>
      <p className="line-clamp-5 leading-4 lg:leading-5">{data?.content}</p>
    </div>
  );
}

export default Card;
