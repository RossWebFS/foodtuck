import { routes } from "src/constants";
import { PageIntro } from "src/containers/features/PageIntro";
import { SignUpForm } from "src/containers/features/SignUpForm";

export const SignUpPage = () => {
  const links = [routes.HOME, routes.SIGN_UP];

  return (
    <main className="py-20">
      <PageIntro title="Sign up page" links={links} />
      <SignUpForm />
    </main>
  );
};
