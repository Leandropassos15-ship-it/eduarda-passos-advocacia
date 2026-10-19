import { FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { LINKS } from "../data/content";

const SOCIALS = [
  { key: "instagram", label: "Instagram", href: LINKS.instagram, icon: <FaInstagram size={17} /> },
  { key: "linkedin", label: "LinkedIn", href: LINKS.linkedin, icon: <FaLinkedinIn size={16} /> },
  { key: "tiktok", label: "TikTok", href: LINKS.tiktok, icon: <SiTiktok size={15} /> },
  { key: "youtube", label: "YouTube", href: LINKS.youtube, icon: <FaYoutube size={18} /> },
  { key: "whatsapp", label: "WhatsApp", href: LINKS.whatsapp, icon: <FaWhatsapp size={18} /> },
];

type SocialLinksProps = {
  only?: string[];
  className?: string;
};

function SocialLinks({ only, className = "" }: SocialLinksProps) {
  const items = only ? SOCIALS.filter((s) => only.includes(s.key)) : SOCIALS;

  return (
    <ul className={`socials ${className}`}>
      {items.map((social) => (
        <li key={social.key}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            title={social.label}
          >
            {social.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
