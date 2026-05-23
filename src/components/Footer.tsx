import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaTiktok } from "react-icons/fa";

const socials = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/benjamin-destiny-a90881344/", label: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com/benjamindestiny", label: "GitHub" },
  { icon: FaTwitter, href: "https://twitter.com/benjamindestiny", label: "X / Twitter" },
  { icon: FaWhatsapp, href: "https://wa.me/2347017153753", label: "WhatsApp" },
  { icon: FaTiktok, href: "https://www.tiktok.com/@benjami_des", label: "TikTok" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 sm:flex-row sm:justify-between">
        <p className="font-display text-xl font-bold text-gradient">Bright.</p>
        <div className="flex gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
            >
              {social.icon({ size: 18 })}
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
