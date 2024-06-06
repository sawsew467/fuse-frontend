"use client";
import Image from "next/image";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import scopyFeedback from "@public/scopyFeedback.svg";

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email chưa được nhập!" })
    .regex(/^\S+@\S+\.\S+$/, {
      message: "Email chưa đúng định dạng!",
    }),
  question: z.string().min(1, {
    message: "Câu hỏi chưa được nhập!",
  }),
});

const Feedback = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      question: "",
    },
  });

  const onSubmit = (value: any) => {
    console.log(value);
  };

  return (
    <div className="flex w-full gap-20">
      <span className="hidden w-96 lg:block">
        <Image
          src={scopyFeedback}
          alt="scopy"
          width={200}
          height={200}
          className="w-full"
        ></Image>
      </span>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex-1 space-y-8"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel className="text-sm font-bold md:text-base lg:text-lg">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ví dụ: thangtvb@gmail.com"
                    className="border-[1px] border-black/50 text-xs md:text-sm lg:text-base"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs md:text-sm lg:text-base" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="question"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-bold md:text-base lg:text-lg">
                  Câu hỏi
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Nhập câu hỏi của bạn"
                    {...field}
                    className="border-[1px] border-black/50 text-xs md:text-sm lg:text-base"
                  />
                </FormControl>
                <FormMessage className="text-xs md:text-sm lg:text-base" />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="border-2 border-black text-base shadow-3d hover:shadow-3d-hover active:shadow-3d-active md:text-lg lg:text-xl"
          >
            Gửi đi
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Feedback;
