import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/profile";

export default function SocialLinks({ className = "" }) {
  const links = [
    { href: profile.github, label: "GitHub", icon: Github },
    { href: profile.linkedin, label: "LinkedIn", icon: Linkedin },
    { href: `mailto:${profile.email}`, label: "Email", icon: Mail },
  ];
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map(({ href, label, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel="noreferrer"
          aria-label={label}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-(--color-border-strong) text-(--color-text-secondary) transition-all hover:text-(--color-cyan) hover:border-(--color-cyan) hover:-translate-y-0.5"
        >
          <Icon size={17} />
        </a>
      ))}
    </div>
  );
}
