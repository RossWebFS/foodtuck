import { FormEvent, useState, InputHTMLAttributes } from "react";
import emailjs from "@emailjs/browser";

import { Input } from "src/components/Input";
import { Button } from "src/components/Button";

import { icons } from "src/constants";
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
  const [isActiveSendingModal, setisActiveSendingModal] =
    useState<boolean>(false);
  const [isSent, setIsSent] = useState<boolean>(true);

  const serviceId = "service_rcsekh3";
  const templateId = "template_u4o3rgj";
  const publicKey = "_zajCCUuez3mjqb2k";

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    try {
      emailjs.init(publicKey);
      emailjs.send(serviceId, templateId, {
        to: emailValue,
      });

      setIsSent(true);
    } catch {
      setIsSent(false);
    } finally {
      setisActiveSendingModal(true);
      setTimeout(() => {
        setisActiveSendingModal(false);
      }, 2000);
      setEmailValue("");
    }
  };

  const onChangeEmailValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };

  return (
    <>
      <form onSubmit={sendEmail}>
        <Input
          id="support-email"
          value={emailValue}
          onChange={onChangeEmailValue}
          variant="colored"
          name="reply_to"
          pattern=".+@gmail.com"
          title="Ваша електронна адреса має містити домен gmail.com"
          required
          {...inputProps}
        />
        <Button className={buttonStyles}>{buttonContent}</Button>
      </form>
      <div
        className={cn(
          "fixed w-full left-0 -top-14 z-[51] text-orange-400 flex justify-center items-center transotion-all duration-[600ms]",
          {
            "top-5": isActiveSendingModal,
          }
        )}
      >
        {isSent ? (
          <span className="bg-gray-100 px-4 py-2">
            Sent Succesfully{" "}
            <icons.check.icon className="w-10 h-10 inline-block" />
          </span>
        ) : (
          <span className="bg-gray-100 px-4 py-2">
            Something went wrong. Try again{" "}
            <icons.close.icon className="w-10 h-10 inline-block" />
          </span>
        )}
      </div>
    </>
  );
};
