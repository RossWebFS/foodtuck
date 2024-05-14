import { Link } from "src/components/Link";
import { routes } from "src/constants";
import { PageIntro } from "src/containers/features/PageIntro";

export const ErrorPage = () => {
  const links = [routes.HOME, routes.ERROR];
  return (
    <main className="py-20">
      <PageIntro links={links} title="404 Error" />

      <section className="w-1/2 mx-auto text-center flex flex-col items-center py-12">
        <h1 className="text-7xl text-orange-400 font-semibold mb-12">404</h1>
        <p className="text-3xl font-semibold">
          Oops! Looks like something went wrong
        </p>
        <p className="w-[70%] py-8">
          Page cannot be found. We'll have it figured out in no time. Menwhile,
          check out this fresh ideas:
        </p>
        <Link to="/" variant="button" rounded="default" size="lg" className="text-gray-100 font-semibold text-lg">Go To Home</Link>
      </section>
    </main>
  );
};
