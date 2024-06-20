"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

import { RegisterSchema } from "@/zod/schemas/RegisterSchema";
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

import Logo from "@public/svgr/Logo";
import Facebook from "@public/svgr/Facebook";
import Google from "@public/svgr/Google";
import Apple from "@public/svgr/Apple";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/services/firebase/config";
import { useAppDispatch } from "@/hooks/redux-toolkit";
import { actionLogin, actionSetIsAuth } from "@/store/slices/auth";
import { useRouter } from "next-nprogress-bar";

export function SignUpCard({
  mode,
  setMode,
}: {
  mode: string;
  setMode: Dispatch<SetStateAction<"SIGNIN" | "SIGNUP">>;
}) {

  const dispatch = useAppDispatch();
  const router = useRouter();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(data: z.infer<typeof RegisterSchema>) {
    toast({
      title: "Đăng nhập thất bại",
      description: "Sai thông tin đăng nhập",
      variant: "destructive",
    });
  }

  const handleGoogleLogin = async () => {
    try {
      const resFirebase: any = await signInWithPopup(
        auth,
        provider.providerGoogle,
      );
      dispatch(actionLogin(resFirebase?.user));
      dispatch(actionSetIsAuth(true));
      setTimeout(() => {
        router.push("/home");
        router.refresh();
      }, 1000);
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <motion.div
      initial={{
        translateZ: -100,
        scale: 0.75,
        opacity: 0,
      }}
      animate={{
        rotateY: mode === "SIGNUP" ? 0 : -180,
        translateZ: mode === "SIGNUP" ? 0 : -100,
        zIndex: mode === "SIGNUP" ? 50 : 40,
        scale: mode === "SIGNUP" ? [0.75, 1] : [1, 0.75],
        opacity: mode === "SIGNUP" ? 1 : 0,
      }}
      transition={{
        type: "spring",
        duration: 1,
        bounce: 0.2,
      }}
      className="absolute h-full w-full max-w-[calc(100vw-40px)]"
    >
      <div
        className={cn(
          "h-full w-full flex-1 rounded-3xl border-2 border-black bg-white/70 px-4 py-8 shadow-3d transition-all duration-300 hover:shadow-3d-hover sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-10 lg:py-12",
          "backdrop-blur-sm",
        )}
      >
        <Logo />
        <p className="mb-9 mt-6 text-xl">
          Đăng ký tài khoản mới hoàn toàn miễn phí!
        </p>
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
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Xác nhận mật khẩu</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Nhập lại mật khẩu của bạn"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" haveOverlay className="w-full">
              Đăng ký
            </Button>
            <p className="text-center text-xs">
              Đã có tài khoản?
              <span
                className="ml-1 cursor-pointer text-primary hover:underline"
                onClick={() => setMode("SIGNIN")}
              >
                Đăng nhập ngay!
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
export default SignUpCard;
