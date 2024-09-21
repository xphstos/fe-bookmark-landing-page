import Facebook from "@assets/icon-facebook.svg?raw";
import Twitter from "@assets/icon-twitter.svg?raw";

type Link = {
  label: string;
  href: string;
};

type SocialLink = {
  href: string;
  ariaLabel: string;
  icon: string;
};

export const links: Array<Link> = [
  {
    label: "Features",
    href: "#0",
  },
  {
    label: "Pricing",
    href: "#0",
  },
  {
    label: "Contact",
    href: "#0",
  },
];

export const headerLinks: Array<Link> = [
  ...links,
  {
    label: "Login",
    href: "#",
  },
];

export const socialLinks: Array<SocialLink> = [
  {
    href: "#0",
    ariaLabel: "Facebook link",
    icon: Facebook,
  },
  {
    href: "#0",
    ariaLabel: "Twitter link",
    icon: Twitter,
  },
];
