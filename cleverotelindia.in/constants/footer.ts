export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface ContactItem {
  label: string;
  value: string;
  icon: string;
  href: string;
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Solutions",
    links: [
      { label: "Cloud PBX", href: "#cloud-pbx" },
      { label: "AI Call Center", href: "#call-center" },
      { label: "AI Voice Agent", href: "#ai-voice" },
      { label: "Virtual Numbers", href: "#virtual-numbers" },
      { label: "WhatsApp Business", href: "#whatsapp" },
      { label: "CRM Calling", href: "#crm-calling" },
      { label: "IVR Builder", href: "#ivr" },
      { label: "Voice Broadcasting", href: "#voice-broadcast" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Customers", href: "#customers" },
      { label: "Partners", href: "#partners" },
      { label: "Careers", href: "#careers" },
      { label: "Press", href: "#press" },
      { label: "Blog", href: "#blog" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#docs" },
      { label: "API", href: "#api" },
      { label: "Developers", href: "#developers" },
      { label: "Help Center", href: "#help" },
      { label: "Knowledge Base", href: "#knowledge" },
      { label: "System Status", href: "#status" },
      { label: "Release Notes", href: "#releases" },
      { label: "Security", href: "#security" },
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Facebook", href: "#facebook", icon: "Facebook" },
  { label: "LinkedIn", href: "#linkedin", icon: "Linkedin" },
  { label: "Instagram", href: "#instagram", icon: "Instagram" },
  { label: "YouTube", href: "#youtube", icon: "Youtube" },
  { label: "X", href: "#x", icon: "Twitter" },
  { label: "GitHub", href: "#github", icon: "Github" },
];

export const CONTACT_ITEMS: ContactItem[] = [
  { label: "Phone", value: "+91 9946 88 9229", icon: "Phone", href: "tel:+919946889229" },
  { label: "Email", value: "info@cleverotel.in", icon: "Mail", href: "mailto:info@cleverotel.in" },
  { label: "Website", value: "cleverotel.in", icon: "Globe", href: "https://cleverotel.in" },
  { label: "WhatsApp", value: "Chat with us", icon: "MessageCircle", href: "#whatsapp" },
];

export const BOTTOM_LINKS: FooterLink[] = [
  { label: "Terms", href: "#terms" },
  { label: "Privacy", href: "#privacy" },
  { label: "Cookies", href: "#cookies" },
  { label: "Accessibility", href: "#accessibility" },
  { label: "GDPR", href: "#gdpr" },
  { label: "Sitemap", href: "#sitemap" },
];

export const COUNTRIES = [
  "India",
  "United States",
  "United Kingdom",
  "UAE",
  "Singapore",
  "Australia",
  "Canada",
  "Germany",
] as const;

export const BUSINESS_TYPES = [
  "Startup",
  "Small Business",
  "Mid-Market",
  "Enterprise",
  "Agency",
  "Non-Profit",
] as const;
