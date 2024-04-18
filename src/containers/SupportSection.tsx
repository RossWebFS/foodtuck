import { SupportEmail } from "./features/SupportEmail";

export const SupportSection = () => {
  return (
    <section className="flex justify-between border-b-2 border-orange-400 p-10">
      <div>
        <h2 className="text-3xl font-bold">
          <span className="text-orange-400">Still</span> you need our support ?
        </h2>
        <p className="mt-2">
          Don’t wait make a smart & logical quote here. Its pretty easy.
        </p>
      </div>

      <SupportEmail
        placeholder="Enter your email"
        type="email"
        className="mr-3"
        buttonContent="Subscribe now"
      />
    </section>
  );
};
