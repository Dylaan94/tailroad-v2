import Hero from "./components/Hero";
import ColumnTextLink from "./components/ColumnTextLink";

import { columnTextLinkContent } from "./content";

export default function Home() {
  return (
    <main>
      <Hero />
      <ColumnTextLink {...columnTextLinkContent} />
    </main>
  );
}
