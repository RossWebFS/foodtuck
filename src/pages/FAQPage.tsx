import { routes } from "src/constants";
import { Accordion } from "src/containers/features/Accordion";
import { PageIntro } from "src/containers/features/PageIntro";
import { Wrapper } from "src/containers/layouts/Wrapper";

export const FAQPage = () => {
  const links = [routes.HOME, routes.FAQ];

  return (
    <main className="py-20">
      <PageIntro links={links} title="FAQ Page" />
      <Wrapper wrapStyles="pt-16">
        <section className="grid grid-cols-2 items-start w-full gap-3">
          <Accordion
            title="How we serve food"
            description={`Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Itaque, non quae. Ratione nam, explicabo vero, iste tempora 
            consectetur fugiat, reiciendis maiores facere dolor itaque minima 
            ad sed delectus voluptates ducimus!`}
          />
          <Accordion
            title="How we serve food"
            description={`Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Itaque, non quae. Ratione nam, explicabo vero, iste tempora 
            consectetur fugiat, reiciendis maiores facere dolor itaque minima 
            ad sed delectus voluptates ducimus!`}
          />
          <Accordion
            title="How we serve food"
            description={`Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Itaque, non quae. Ratione nam, explicabo vero, iste tempora 
            consectetur fugiat, reiciendis maiores facere dolor itaque minima 
            ad sed delectus voluptates ducimus!`}
          />
          <Accordion
            title="How we serve food"
            description={`Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Itaque, non quae. Ratione nam, explicabo vero, iste tempora 
            consectetur fugiat, reiciendis maiores facere dolor itaque minima 
            ad sed delectus voluptates ducimus!`}
          />
          <Accordion
            title="How we serve food"
            description={`Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Itaque, non quae. Ratione nam, explicabo vero, iste tempora 
            consectetur fugiat, reiciendis maiores facere dolor itaque minima 
            ad sed delectus voluptates ducimus!`}
          />
          <Accordion
            title="How we serve food"
            description={`Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Itaque, non quae. Ratione nam, explicabo vero, iste tempora 
            consectetur fugiat, reiciendis maiores facere dolor itaque minima 
            ad sed delectus voluptates ducimus!`}
          />
        </section>
      </Wrapper>
    </main>
  );
};
