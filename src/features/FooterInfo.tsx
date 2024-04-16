import { Icon } from "src/components/Icon";
import { PiClockClockwiseLight } from "react-icons/pi";

export const FooterInfo = () => {
    return (
      <article className="w-1/4">
        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p className="mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            fugiat nobis voluptas iure eveniet dolore quo earum. Rem illum, sit
            ullam, fugiat doloremque a ipsa totam odit error dolores iusto.
          </p>
        </div>
  
        <div className="flex">
          <Icon variant="boxed">
            <PiClockClockwiseLight size={50} />
          </Icon>
          <div className="pl-4">
            <h5>Opening Houres</h5>
            <p>Mon - Sat(8.00 - 6.00)</p>
            <p>Sunday - Closed</p>
          </div>
        </div>
      </article>
    );
  };