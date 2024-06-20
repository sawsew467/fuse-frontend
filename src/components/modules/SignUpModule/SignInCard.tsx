"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Dispatch, SetStateAction } from "react";

import { LoginSchema } from "@/zod/schemas/LoginSchema";
import { cn } from "@/lib/utils";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Checkbox } from "@/components/ui/checkbox";

import Logo from "@public/svgr/Logo";
import Facebook from "@public/svgr/Facebook";
import Google from "@public/svgr/Google";
import Apple from "@public/svgr/Apple";

export function SignInCard({
  mode,
  setMode,
}: {
  mode: string;
  setMode: Dispatch<SetStateAction<"SIGNIN" | "SIGNUP">>;
}) {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
      isRemember: false,
    },
  });

  function onSubmit(data: z.infer<typeof LoginSchema>) {
    toast({
      title: "Đăng nhập thất bại",
      description: "Sai thông tin đăng nhập",
      variant: "destructive",
    });
  }

  return (
    <div
      className={cn(
        "min-h-[400px] w-full max-w-[calc(100vw-40px)] flex-1 rounded-3xl border-2 border-black bg-white/70 px-4 py-8 shadow-3d transition-all duration-500 hover:shadow-3d-hover sm:px-6 sm:py-12 md:max-w-[500px] md:px-8 md:py-16 lg:px-10 lg:py-12",
        "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform backdrop-blur-sm transition-all duration-500",
        "z-10",
        mode === "SIGNIN" ? "z-50" : "z-40",
      )}
    >
      <Logo />
      <p className="mb-9 mt-6 text-xl">Nhập thông tin tài khoản của bạn!</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Nhập email của bạn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mật khẩu</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Nhập mật khẩu của bạn"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="isRemember"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="ml-2">Nhớ mật khẩu</FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" haveOverlay className="w-full">
            Đăng nhập
          </Button>
          <p className="text-center text-xs">
            Chưa có tài khoản?
            <span
              className="ml-1 cursor-pointer text-primary hover:underline"
              onClick={() => setMode("SIGNUP")}
            >
              Đăng ký ngay!
            </span>
          </p>
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              haveOverlay
              className="h-auto py-4"
              type="button"
            >
              <Facebook />
            </Button>
            <Button
              variant="outline"
              haveOverlay
              className="h-auto py-4"
              type="button"
            >
              <Google />
            </Button>
            <Button
              variant="outline"
              haveOverlay
              className="h-auto py-4"
              type="button"
            >
              <Apple />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
export default SignInCard;
