import emailIcon from "../assets/email-icon.svg";
import githubIcon from "../assets/github-icon.svg";
import linkedinIcon from "../assets/linkedin-icon.svg";

const socials = [
  {
    label: "Email",
    href: "mailto:jacob@example.com",
    icon: emailIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/JakeFen",
    icon: githubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jacob-fenwick/",
    icon: linkedinIcon,
  },
];

function Footer() {
  return (
    <footer className="flex items-center justify-center gap-3 bg-neutral-800 px-8 py-6">
      {socials.map(({ label, href, icon }) => (
        <a
          key={label}
          href={href}
          target={label === "Email" ? undefined : "_blank"}
          rel={label === "Email" ? undefined : "noopener noreferrer"}
          aria-label={label}
          className="flex rounded-[4px] p-2 text-neutral-300 no-underline transition-opacity hover:opacity-75"
        >
          <img src={icon} alt="" className="h-8 w-8 invert" />
        </a>
      ))}
    </footer>
  );
}

export default Footer;
