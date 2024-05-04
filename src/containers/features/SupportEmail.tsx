import { FormEvent, useState } from "react";

import { InputHTMLAttributes } from "react";

import { Input } from "src/components/Input";
import { Button } from "src/components/Button";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { cn } from "src/utils";

interface SupportEmailProps {
  buttonStyles?: string;
  buttonContent?: any;
}

interface SupportEmailProps extends InputHTMLAttributes<HTMLInputElement> {}

export const SupportEmail = ({
  buttonStyles,
  buttonContent,
  ...inputProps
}: SupportEmailProps) => {
  const [emailValue, setEmailValue] = useState<string>("");
  const [emailLabel, setEmailLabel] = useState<string>("Enter Your Email:");

  const serviceId = "service_rcsekh3";
  const templateId = "template_u4o3rgj";
  const publicKey = "_zajCCUuez3mjqb2k";
  const form = useRef(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    const emailValidation:RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/

    if (!emailValidation.test(emailValue.toLowerCase())) {
      setEmailLabel("Email is not correct!")
    }

    if (form.current)
      emailjs
        .sendForm(serviceId, templateId, form?.current, {
          publicKey: publicKey,
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
  };

  const onChangeEmailValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };

  return (
    <form ref={form}>
      <label
        className={cn("block text-sm text-gray-400 mb-1", {
          "text-orange-400 text-md": emailLabel === "Email is not correct!"
        })
        }
        htmlFor="support-email"
      >
        {emailLabel}
      </label>
      <Input
        id="support-email"
        value={emailValue}
        onChange={onChangeEmailValue}
        variant="colored"
        {...inputProps}
        name="reply_to"
      />
      <Button className={buttonStyles} onClick={sendEmail}>
        {buttonContent}
      </Button>
    </form>
  );
};
