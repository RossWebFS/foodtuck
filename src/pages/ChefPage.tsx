import { routes } from "src/constants";
import { PageIntro } from "src/containers/features/PageIntro";
import { team } from "src/constants/teamMembers";
import { Wrapper } from "src/containers/layouts/Wrapper";

export const ChefPage = () => {
  const links = [routes.HOME, routes.CHEFS];

  const chefs = team.map((member) => {
    return (
      <li className="w-[24%] shrink-0 shadow-lg">
        <img src={member.avatar} alt={member.status} />
        <div>
          <h2 className="text-center text-xl font-semibold mt-3">
            {member.name}
          </h2>
          <p className="text-center">{member.status}</p>
        </div>
      </li>
    );
  });
  return (
    <main className="py-20">
      <PageIntro links={links} title="Our Chefs" />

      <Wrapper>
        <section>
          <ul className="flex gap-4 flex-wrap">{chefs}</ul>
        </section>
      </Wrapper>
    </main>
  );
};
