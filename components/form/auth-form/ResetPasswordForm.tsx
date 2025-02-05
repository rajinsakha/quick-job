"use client"
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
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Separator } from "@/components/ui/separator";
import { useAppSelector } from "@/lib/redux/hooks";
import { resetPasswordSchema } from "@/schema/auth-schema";
import { useRouter } from "next/navigation";
import { apiBase } from "@/constants/axiosInstance";




type ResetFormValue = z.infer<typeof resetPasswordSchema>;

export default function ResetPasswordForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { email } = useAppSelector((state) => state.authReducer);
  const router = useRouter();

  const form = useForm<ResetFormValue>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = async (data: ResetFormValue) => {
    setLoading(true);
    try {
      const newData = {
        email,
        new_password: data.new_password,
        // confirm_password: data.confirmPassword,
      };
      const res = await apiBase.post(`/auth/reset-password/`, newData);
      if (res.status === 200) {
        router.replace("/login");
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
          Reset Password
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter following details to reset your password
        </p>
      </div>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 pt-2 w-full"
        >
          <FormField
            control={form.control}
            name="new_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your new password"
                      disabled={loading}
                      {...field}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword((prev) => !prev)}
                      // disabled={disabled}
                    >
                      {showPassword ? (
                        <EyeIcon className="h-4 w-4" aria-hidden="true" />
                      ) : (
                        <EyeOffIcon className="h-4 w-4" aria-hidden="true" />
                      )}
                      <span className="sr-only">
                        {showPassword ? "Hide password" : "Show password"}
                      </span>
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirm_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Re-enter your new password"
                      disabled={loading}
                      {...field}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
                      // disabled={disabled}
                    >
                      {showConfirmPassword ? (
                        <EyeIcon className="h-4 w-4" aria-hidden="true" />
                      ) : (
                        <EyeOffIcon className="h-4 w-4" aria-hidden="true" />
                      )}
                      <span className="sr-only">
                        {showConfirmPassword
                          ? "Hide password"
                          : "Show password"}
                      </span>
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={loading} className="!mt-4 ml-auto w-full" type="submit">
            Reset Password
          </Button>
        </form>
      </Form>
    </>
  );
}
