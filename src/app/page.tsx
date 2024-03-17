import Hero from "./components/Hero";
import ColumnTextLink from "./components/ColumnTextLink";

import { columnTextLinkContent, ourBrandsContent } from "./content";
import OurBrands from "./components/OurBrands";

export default function Home() {
  return (
    <main>
      <Hero />
      <ColumnTextLink {...columnTextLinkContent} />
      <OurBrands {...ourBrandsContent} />
    </main>
  );
}
