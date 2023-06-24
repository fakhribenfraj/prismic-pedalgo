import { createClient } from "@/prismicio";
import { PrismicText } from "@prismicio/react";

export default async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <footer className="bg-white px-6 py-10 text-slate-500">
      <div className="mx-auto w-full max-w-5xl text-center text-xs">
        <PrismicText field={settings.data.site_title} /> &mdash; Powered by
        Prismic
      </div>
    </footer>
  );
}
