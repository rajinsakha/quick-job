"use client"

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { apiBase } from "@/constants/axiosInstance";
import { useAppSelector } from "@/lib/redux/hooks";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

const OTPForm = () => {
  const length = 4;
  const inputRef = useRef<HTMLInputElement[]>(Array(length).fill(null));
  const [OTP, setOTP] = useState<string[]>(Array(length).fill(""));
  const [joinedOtp, setJoinedOtp] = useState("");
  const [leftOtp, setLeftOtp] = useState("");
  const [isError, setIsError] = useState<boolean>(false);
  const router = useRouter();
  const { email } = useAppSelector((state) => state.authReducer);

  const handleTextChange = (input: string, index: number) => {
    const newPin = [...OTP];
    newPin[index] = input;
    setOTP(newPin);

    if (input.length === 1 && index < length - 1) {
      inputRef.current[index + 1]?.focus();
    }

    if (input.length === 0 && index > 0) {
      inputRef.current[index - 1]?.focus();
    }

    setLeftOtp(newPin.join(""));

    if (newPin.every((digit) => digit !== "")) {
      setJoinedOtp(newPin.join(""));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (leftOtp.length !== length) {
        setIsError(true);
        return;
      }
      const res = await apiBase.post(`auth/forgot-password/verify/`, {
        email: email,
        code: joinedOtp,
      });
      if (res.status === 200) {
        router.push("/reset-password");
      }

      setIsError(false);
    } catch (error) {
      throw new Error(` error: ${error}`);
    }
  };

  return (
    <>
      <div className="flex flex-col space-y-2 pb-2 ">
        <h1 className="text-2xl font-semibold text-black tracking-tight">
          Verify OTP
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your OTP that you received in your email
        </p>
      </div>
      <Separator />
      <form onSubmit={handleSubmit} className="grid pt-6 gap-8">
        <div className={`grid grid-cols-4 gap-5`}>
          {Array.from({ length }, (_, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={OTP[index]}
              onChange={(e) => handleTextChange(e.target.value, index)}
              ref={(ref) => {
                inputRef.current[index] = ref as HTMLInputElement;
              }}
              className={`border p-5 outline-none ${
                isError && !OTP[index]
                  ? "border-red-500"
                  : "border-border-slate-500 focus:border-blue-600"
              }`}
              style={{ marginRight: index === length - 1 ? "0" : "10px" }}
            />
          ))}
        </div>
        <Button className="!mt-4 ml-auto w-full" type="submit">
          Verify OTP
        </Button>
      </form>
    </>
  );
};

export default OTPForm;
