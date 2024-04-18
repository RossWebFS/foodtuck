import { useSupportingByEmail } from "src/hooks/useSupportByEmail";

import { InputHTMLAttributes } from "react";

import { Input } from "src/components/Input";
import { Button } from "src/components/Button";

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
  const {
    emailValue,
    onChangeEmailValue,
    onSentSupportEmail,
    emailMessageHandler,
  } = useSupportingByEmail();

  return (
    <div>
      <Input
        value={emailValue}
        onChange={onChangeEmailValue}
        onKeyDown={onSentSupportEmail}
        variant="colored"
        {...inputProps}
      />
      <Button className={buttonStyles} onClick={emailMessageHandler}>
        {buttonContent}
      </Button>
    </div>
  );
};
