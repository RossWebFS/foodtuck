import { useState } from "react";

export const useSupportingByEmail = () => {
  const [ emailValue, setEmailValue ] = useState<string>("");

  const onChangeEmailValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };

  const onSentSupportEmail = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") emailMessageHandler();
  };

  const emailMessageHandler = () => {
    alert(`Sending data to ${emailValue}`);
    setEmailValue("");
  };

  return {
    emailValue,
    onChangeEmailValue,
    onSentSupportEmail,
    emailMessageHandler,
  };
};
