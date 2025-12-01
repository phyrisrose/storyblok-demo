import { storyblokEditable, SbBlokData } from "@storyblok/react";
import { Separator } from "@/components/ui/separator";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

interface FooterProps {
  blok: SbBlokData & {
    company_name?: string;
    tagline?: string;
    copyright_text?: string;
    show_social_links?: boolean;
    columns?: Array<{
      title: string;
      links: Array<{ label: string; url: string }>;
    }>;
  };
}

const Footer = ({ blok }: FooterProps) => {
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Mail, label: "Email", href: "#" },
  ];

  return (
    <footer {...storyblokEditable(blok)} className="bg-card border-t border-border">
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              {blok.company_name || "Company"}
            </h3>
            {blok.tagline && (
              <p className="text-muted-foreground text-sm">
                {blok.tagline}
              </p>
            )}
            {blok.show_social_links && (
              <div className="flex gap-3 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Dynamic Columns */}
          {blok.columns?.map((column, index) => (
            <div key={index} className="space-y-4">
              <h4 className="font-semibold text-foreground">{column.title}</h4>
              <ul className="space-y-2">
                {column.links?.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.url}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors story-link"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            {blok.copyright_text || `© ${new Date().getFullYear()} All rights reserved.`}
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
