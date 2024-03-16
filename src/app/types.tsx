// Component Types

export interface SimpleButtonLinkProps {
  internalLink: boolean;
  text: string;
  link: string;
  bgColour?: string;
  textColour?: string;
}

export interface ColumnTextLinkProps {
  mainText: JSX.Element;
  subText: JSX.Element;
  linkText: string;
  linkUrl: string;
}
