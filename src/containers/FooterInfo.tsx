import { Icon } from "src/components/Icon";

interface FooterInfoProps {
  title?: string;
  description?: string;
  schedule?: {
    openedHours: string;
    closedHours: string;
  };
  OpenHoursIcon?: React.ElementType;
}

export const FooterInfo = ({
  OpenHoursIcon,
  title,
  description,
  schedule,
}: FooterInfoProps) => {
  return (
    <article className="w-1/4">
      <section>
        <h3 className="text-lg font-bold mb-4">{title}</h3>
        <p className="mb-6">{description}</p>
      </section>

      <section className="flex">
        {OpenHoursIcon && (
          <Icon
            IconComponent={OpenHoursIcon}
            className="w-20 h-20"
            variant="boxed"
          />
        )}
        <div className="pl-4">
          <h5>Opening Houres</h5>
          <p>{schedule?.openedHours}</p>
          <p>{schedule?.closedHours} - Closed</p>
        </div>
      </section>
    </article>
  );
};
