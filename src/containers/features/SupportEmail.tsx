import { FormEvent, useState, InputHTMLAttributes } from "react";
import emailjs from "@emailjs/browser";

import { Input } from "src/components/Input";
import { Button } from "src/components/Button";

import { icons } from "src/constants";
import { cn } from "src/utils";
import { Modal } from "./Modal";

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
      <Modal
        succesfulMes="Sent Succesfully"
        errorMes="Something went wrong. Try again"
        isActive={isActiveSendingModal}
        isSuccesful={isSent}
      />
    </>
  );
};
