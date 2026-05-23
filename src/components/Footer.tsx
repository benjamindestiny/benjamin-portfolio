import { Github, Linkedin, Twitter } from "lucide-react";
import { FaWhatsapp, FaTiktok } from "react-icons/fa";

const socials = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/benjamin-destiny-a90881344/",
    label: "LinkedIn",
  },
  { icon: Github, href: "https://github.com/benjamindestiny", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com/benjamindestiny", label: "X / Twitter" },
  { icon: FaWhatsapp, href: "https://wa.me/07017153753", label: "WhatsApp" },
  { icon: FaTiktok, href: "https://www.tiktok.com/@brigh_dev", label: "TikTok" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 sm:flex-row sm:justify-between">
        <p className="font-display text-xl font-bold text-gradient">Bright.</p>

        <div className="flex gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
            >
              <s.icon size={18} />
            </a>
          ))}
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Benjamin Bright. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
