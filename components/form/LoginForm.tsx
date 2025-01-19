'use client'
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Checkbox } from "@/components/ui/checkbox";
import { loginFormSchema } from "@/schema/auth";
import { z } from "zod";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { EyeClosedIcon, EyeIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Separator } from "../ui/separator";

type UserFormValue = z.infer<typeof loginFormSchema>;

export default function LoginForm() {
//   const dispatch = useAppDispatch();
//   console.log(dispatch);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<UserFormValue>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  useEffect(() => {
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    if (rememberedEmail) {
      form.setValue("email", rememberedEmail);
      form.setValue("rememberMe", true);
    }
  }, [form]);

  const onSubmit = async (data: UserFormValue) => {
    console.log(data);
    // try {
    setLoading(true);
    //   const res = await loginApi(data);
    //   if (res.status === 200) {
    //     dispatch(setToken(res.data.token));
    //   }
    //   toast({
    //     variant: "default",
    //     description: "Successfully Logged In!",
    //   });
    //   localStorage.setItem("url", res.data.domain.domain);
    //   window.location.href = "/choose-org";
    // } catch (error: any) {
    //   toast({
    //     variant: "destructive",
    //     description: error?.response?.data?.error || error?.message,
    //   });
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <>
      <div className="flex flex-col space-y-2 pb-2 ">
        <h1 className="text-2xl font-semibold text-black tracking-tight">
          Login
        </h1>
        <p className="text-sm text-muted-foreground">Welcome to Actual-Save</p>
      </div>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2 pt-2 w-full"
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
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password..."
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
                        <EyeClosedIcon className="h-4 w-4" aria-hidden="true" />
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
          <div className="flex items-center justify-between !mt-2">
            <FormField
              control={form.control}
              name="rememberMe"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="border-black data-[state=checked]:bg-black"
                    />
                  </FormControl>
                  <FormLabel className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Remember me
                  </FormLabel>
                </FormItem>
              )}
            />
            <Link href="/reset-password" className="text-sm underline-offset-4">
              Forgot Password?
            </Link>
          </div>

          <Button
            disabled={loading}
            className="!mt-4 ml-auto w-full "
            type="submit"
          >
            Login
          </Button>
        </form>
      </Form>
    </>
  );
}
