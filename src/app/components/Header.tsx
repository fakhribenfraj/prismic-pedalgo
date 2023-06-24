import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicText } from "@prismicio/react";
import Link from "next/link";

export default async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <header className="p-6 text-slate-300 md:px-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-baseline gap-4 md:flex-row">
        <Link href="/" className="shrink-0 text-2xl font-medium text-slate-900">
          <PrismicText field={settings.data.site_title} />
        </Link>
        <nav className="grow">
          <ul className="flex flex-wrap gap-x-6 gap-y-4 md:justify-end md:gap-x-12">
            {settings.data.navigation.map((item) => (
              <li key={item.label}>
                <PrismicNextLink field={item.link}>
                  {item.label}
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
