"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { apiBase } from "@/constants/axiosInstance";
import { setEmail } from "@/lib/redux/features/authReducer";
import { useAppDispatch } from "@/lib/redux/hooks";
import { forgotPasswordFormSchema } from "@/schema/auth-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

type UserFormValue = z.infer<typeof forgotPasswordFormSchema>;

export default function ForgotPasswordForm() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const defaultValues = {
    email: "",
  };
  const form = useForm<UserFormValue>({
    resolver: zodResolver(forgotPasswordFormSchema),
    defaultValues,
  });

  const onSubmit = async (data: UserFormValue) => {
    setLoading(true);

    try {
      const res = await apiBase.post(`/auth/request-otp/`, data);
      if (res.status === 200) {
        dispatch(setEmail(data.email));
        router.replace("/verify-otp");
        // window.location.href = "/otp";
      }
    } catch (error) {
      throw new Error(` error: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col space-y-2 pb-2 ">
        <h1 className="text-2xl font-semibold text-black tracking-tight">
          Forgot Password
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your email address to reset your password
        </p>
      </div>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 pt-4 w-full"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email..."
                    disabled={loading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            disabled={loading}
            className="!mt-4 ml-auto w-full"
            type="submit"
          >
            Send OTP Request
          </Button>
        </form>
      </Form>
    </>
  );
}
