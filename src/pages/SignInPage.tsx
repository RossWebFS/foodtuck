import { routes } from "src/constants";
import { PageIntro } from "src/containers/features/PageIntro";
import { SignInForm } from "src/containers/features/SignInForm";

export const SignInPage = () => {
  const links = [routes.HOME, routes.SIGN_IN];

  return (
    <main className="py-20">
      <PageIntro title="Sign in page" links={links} />
        <SignInForm />
    </main>
  );
};
