export const NAV_LINKS = [
  {
    label: "Solutions",
    href: "#solutions",
    hasDropdown: true,
  },
  {
    label: "Products",
    href: "#products",
    hasDropdown: true,
  },
  {
    label: "Pricing",
    href: "#pricing",
    hasDropdown: false,
  },
  {
    label: "Resources",
    href: "#resources",
    hasDropdown: true,
  },
  {
    label: "Company",
    href: "#company",
    hasDropdown: true,
  },
] as const;

export const FLOATING_WIDGETS = [
  {
    title: "Call Recording",
    description: "HD quality recording",
    icon: "Mic",
    color: "#5B5CF6",
  },
  {
    title: "Lead Management",
    description: "Track & convert leads",
    icon: "Users",
    color: "#D946EF",
  },
  {
    title: "Virtual Numbers",
    description: "+91, +1, +44 & more",
    icon: "Phone",
    color: "#1E3A8A",
  },
  {
    title: "Sentiment Analysis",
    description: "AI-powered insights",
    icon: "Brain",
    color: "#10B981",
  },
  {
    title: "Campaign Analytics",
    description: "Real-time metrics",
    icon: "BarChart3",
    color: "#F59E0B",
  },
  {
    title: "Voice Broadcast",
    description: "Reach thousands instantly",
    icon: "Radio",
    color: "#EF4444",
  },
] as const;

export const ANIMATION_DURATION = {
  fast: 0.4,
  medium: 0.6,
  slow: 0.8,
} as const;

export const COLORS = {
  primary: "#5B5CF6",
  secondary: "#D946EF",
  darkBlue: "#1E3A8A",
  text: "#111827",
  gray: "#6B7280",
  background: "#FFFFFF",
} as const;
