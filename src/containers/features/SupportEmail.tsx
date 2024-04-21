import { useState } from "react";

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
  const [ emailValue, setEmailValue ] = useState<string>("");

  const onChangeEmailValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };

  return (
    <div>
      <Input
        value={emailValue}
        onChange={onChangeEmailValue}
        variant="colored"
        {...inputProps}
      />
      <Button className={buttonStyles}>
        {buttonContent}
      </Button>
    </div>
  );
};
