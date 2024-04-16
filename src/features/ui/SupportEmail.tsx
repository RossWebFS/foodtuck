import { Input } from "src/components/Input";
import { useSupportingByEmail } from "src/hooks/useSupportingByEmail";
import { Button } from "src/components/Button";

export const SupportEmail = () => {
    const {
      emailValue,
      onChangeEmailValue,
      onSentSupportEmail,
      emailMessageHandler,
    } = useSupportingByEmail();
  
    return (
      <div>
        <Input
          className="mr-3"
          type="email"
          placeholder="Enter your email"
          value={emailValue}
          onChange={onChangeEmailValue}
          onKeyDown={onSentSupportEmail}
          variant="colored"
        />
        <Button onClick={emailMessageHandler}>Subscribe now</Button>
      </div>
    );
  };