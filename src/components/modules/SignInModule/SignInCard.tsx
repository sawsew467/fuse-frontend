"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Dispatch, SetStateAction } from "react";
import { signInWithPopup } from "firebase/auth";
import { useRouter } from "next-nprogress-bar";
import { motion } from "framer-motion";

import { LoginSchema } from "@/zod/schemas/LoginSchema";
import { cn } from "@/lib/utils";
import { auth, provider } from "@/services/firebase/config";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-toolkit";
import { actionLogin } from "@/store/slices/auth";

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
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { access_token, userInfo } = useAppSelector((state) => state.auth);
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
      isRemember: false,
    },
  });

  async function onSubmit(data: z.infer<typeof LoginSchema>) {
    try {
    } catch (error) {}

    // toast({
    //   title: "Đăng nhập thất bại",
    //   description: "Sai thông tin đăng nhập",
    //   variant: "destructive",
    // });
  }

  const handleGoogleLogin = async () => {
    try {
      const resFirebase: any = await signInWithPopup(
        auth,
        provider.providerGoogle,
      );
      console.log(resFirebase);
      dispatch(actionLogin(resFirebase?.user));
      router.push("/");
      router.refresh();
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <motion.div
      animate={{
        rotateY: mode === "SIGNIN" ? 0 : 180,
        translateZ: mode === "SIGNIN" ? 0 : -100,
        zIndex: mode === "SIGNIN" ? 50 : 40,
        scale: mode === "SIGNIN" ? 1 : 0.75,
        transition: {
          duration: 1,
          bounce: 0,
        },
      }}
      className="absolute h-full w-full max-w-[calc(100vw-40px)]"
    >
      <div
        className={cn(
          "h-full w-full flex-1 origin-center rounded-3xl border-2 border-black bg-white/70 px-4 py-8 shadow-3d transition-all duration-300 hover:shadow-3d-hover sm:px-6 sm:py-12 md:max-w-[500px] md:px-8 md:py-16 lg:px-10 lg:py-12",
          "backdrop-blur-sm",
          "z-10",
          // mode === "SIGNIN" ? "z-50" : "z-40",
          mode === "SIGNIN" ? "opacity-100" : "opacity-0 duration-100",
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
                onClick={handleGoogleLogin}
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
    </motion.div>
  );
}
export default SignInCard;
