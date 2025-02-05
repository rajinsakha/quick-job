/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { signUpFormSchema } from "@/schema/auth-schema";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Button } from "../../ui/button";
import Link from "next/link";
import { Separator } from "../../ui/separator";
import { Checkbox } from "../../ui/checkbox";
import { motion } from "framer-motion";
import { register } from "@/services/auth-api";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { deleteKeys } from "@/lib/utils";
type UserFormValue = z.infer<typeof signUpFormSchema>;

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<UserFormValue>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      email: "",
      password: "",
      confirm_password: "",
      username:"", 
    
      accept_terms: false,
    },
  });

  const onSubmit = async (data: UserFormValue) => {
    try {
      setLoading(true);
      const submissionData = deleteKeys(data, [
        "accept_terms",
        "confirm_password",
      ]);
      const res = await register(submissionData);
      if (res.status === 200) {
        toast({
          variant: "default",
          title: "User Account Created",
          description: "User has been successfully created.",
        });
        router.push("/login");
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        description: error?.response?.data?.error || error?.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto space-y-2"
    >
      <div className="flex flex-col space-y-2 ">
        <h1 className="text-3xl font-semibold tracking-tight">Register</h1>
        <p className="text-sm text-muted-foreground">
          Welcome to WorkSpace Nepal
        </p>
      </div>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2 w-full"
        >
           <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input
                 
                    placeholder="Enter your full name"
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
                      placeholder="Re-enter Password"
                      disabled={loading}
                      {...field}
                      
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
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
          <div className="flex items-center justify-end !mt-2">
            <Link
              href="/login"
              className="text-sm underline-offset-4 hover:text-primary"
            >
              Already have an account?
            </Link>
          </div>

          <FormField
            control={form.control}
            name="accept_terms"
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
                  I hereby accept all the{" "}
                  <Link href="/terms" className="underline hover:text-primary">
                    Terms and Conditions
                  </Link>{" "}
                  of WorkSpace Nepal.
                </FormLabel>
              </FormItem>
            )}
          />

          <Button
            disabled={form.watch("accept_terms") === false || loading}
            className="!mt-4 ml-auto w-full "
            type="submit"
          >
            Sign Up
          </Button>
        </form>
      </Form>
    </motion.div>
  );
}
