"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ChatIcon from "@public/icons/studyroom/chat.svg";
import { cn } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import AvatarImage from "@public/images/avatartwo.jpg";
import { TMessage, fakeMessageData } from "@/data/stuty-room-themes";


const FormSchema = z.object({
  message: z
    .string()
    .min(1, { message: "Vui lòng nhập tin nhắn trước khi gửi đi" }),
});
function ChatOutSide() {
  const [isOpenChat, setIsOpenChat] = useState<boolean>(false);

  const [chatState, setChatState] = useState<TMessage[]>(fakeMessageData);

  const [messageInput, setMessageInput] = useState<string | undefined>(undefined);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const messageContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    if (messageContainerRef.current) {
      const { current: container } = messageContainerRef;
      container.scrollTop = container.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatState]);

  const handleSendMessage = () => {
    const dataSend: TMessage = {
      avatar: "https://i.ibb.co/qBNhB8Q/z4906224013507-d649511249cf5ef7e835baf8a498b877.jpg",
      from: "Vu Vu",
      message: messageInput!,
      role: "host",
      time: new Date().toLocaleTimeString().slice(0, -3),
    };
    setChatState([...chatState, dataSend]);
    setMessageInput("");
  };

  const handleSendMessageOnEnter = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="absolute bottom-4 right-4 z-[1] h-[calc(100%-96px)] w-[480px]">
      <div
        className={cn(
          "absolute bottom-0 right-[0px] flex h-full w-full flex-row items-end gap-4 transition duration-500",
          `${isOpenChat ? "translate-x-0" : "translate-x-[430px]"}`,
        )}
      >
        <div
          className="h-fit w-fit cursor-pointer rounded-lg border-2 border-black bg-white/80 p-2 backdrop-blur-sm transition hover:shadow-3d-hover"
          onClick={() => setIsOpenChat(!isOpenChat)}
        >
          <Image
            src={ChatIcon}
            alt="icons"
            height={40}
            width={40}
            className="h-[35px] w-[35px]"
            unoptimized
          />
        </div>
        <div className="flex h-full w-full flex-col gap-2 rounded-lg border-2 border-black bg-white/80 p-3 backdrop-blur-sm transition hover:shadow-3d-hover">
          <div>
            <h3 className="font-title text-2xl font-bold">Chat</h3>
          </div>
          <div className="border-b-2" />
          <div
            ref={messageContainerRef}
            className="flex h-[calc(100%-60px)] w-full flex-col gap-3 overflow-auto rounded-md bg-white/20 p-2 backdrop-blur-sm scrollbar-hide"
          >
            {chatState.map((_, index) => (
              <div key={index} className="flex flex-row items-center gap-2">
                <div>
                  <Image
                    src={_.avatar}
                    alt="image"
                    height={200}
                    width={200}
                    className="h-[42px] w-[42px] rounded-full object-cover border-2 border-primary"
                    unoptimized
                  />
                </div>
                <div className="flex w-full flex-col items-center">
                  <div className="flex w-full flex-row items-center justify-between gap-2">
                    <p className="text-sm font-bold">{_.from}</p>
                    <div className="flex flex-row gap-2">
                      {/* <p className="rounded-lg bg-primary px-1 py-[2px] text-[10px] text-white">
                        {_.role}
                      </p> */}
                      <p className="text-[12px]">{_.time}</p>
                    </div>
                  </div>
                  <p className="w-full text-start text-sm">{_.message}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full">
            <Form {...form}>
              <form onSubmit={() => {}}>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Nhập tin nhắn"
                          className="resize-none"
                          {...field}
                          value={messageInput}
                          onChange={(e) => {
                            setMessageInput(e.target.value);
                          }}
                          onKeyDown={(e) => handleSendMessageOnEnter(e)}
                        />
                      </FormControl>
                      <div className="absolute bottom-5 right-5">
                        <button
                          type="button"
                          className="w-fit rounded-md bg-white px-2 hover:shadow-3d-light"
                          onClick={() => handleSendMessage()}
                        >
                          Gửi
                        </button>
                      </div>
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatOutSide;
