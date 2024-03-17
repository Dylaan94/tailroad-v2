import { ColumnTextLinkProps } from "../types";
import SimpleButtonLink from "./SimpleButtonLink";

export default function ColumnTextLink({
  mainText,
  subText,
  linkText,
  linkUrl,
}: ColumnTextLinkProps) {
  return (
    <section className="w-full justify-center flex kaisei-decol ">
      <div className="w-3/4 max-w-screen-xl flex justify-between py-36 ">
        {/* Left Column */}
        <div className="w-1/3">
          <h2 className="text-2xl">{mainText}</h2>
        </div>

        {/* Right Column */}
        <div className="w-1/2 flex flex-col">
          {subText.map((text, index) => (
            <p key={index} className="text-lg pb-4">
              {text}
            </p>
          ))}

          <SimpleButtonLink
            internalLink={true}
            text={linkText}
            link={linkUrl}
          />
        </div>
      </div>
    </section>
  );
}
