export interface Industry {
  id: string;
  name: string;
  description: string;
  gradient: string;
  icon: string;
}

export const INDUSTRIES: Industry[] = [
  {
    id: "sales-marketing",
    name: "Sales & Marketing",
    description: "Boost conversions with AI-powered outbound calling and lead nurturing.",
    gradient: "from-pink-600/80 to-purple-900/90",
    icon: "TrendingUp",
  },
  {
    id: "call-center",
    name: "Call Center",
    description: "Enterprise contact center with intelligent routing and real-time analytics.",
    gradient: "from-blue-600/80 to-indigo-900/90",
    icon: "Headphones",
  },
  {
    id: "delivery-logistics",
    name: "Delivery & Logistics",
    description: "Streamline dispatch communication with automated notifications.",
    gradient: "from-emerald-600/80 to-teal-900/90",
    icon: "Truck",
  },
  {
    id: "office-communication",
    name: "Office Communication",
    description: "Unified business phone system with extensions, IVR, and remote access.",
    gradient: "from-violet-600/80 to-purple-900/90",
    icon: "Building2",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    description: "HIPAA-compliant communication for patient engagement and appointment reminders.",
    gradient: "from-cyan-600/80 to-blue-900/90",
    icon: "Heart",
  },
  {
    id: "banking",
    name: "Banking & Finance",
    description: "Secure communications with compliance recording and fraud detection.",
    gradient: "from-amber-600/80 to-orange-900/90",
    icon: "Landmark",
  },
  {
    id: "education",
    name: "Education",
    description: "Connect students, faculty and administration with smart campus telephony.",
    gradient: "from-indigo-600/80 to-blue-900/90",
    icon: "GraduationCap",
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    description: "Handle order queries, returns and support with omnichannel automation.",
    gradient: "from-rose-600/80 to-pink-900/90",
    icon: "ShoppingCart",
  },
  {
    id: "hospitality",
    name: "Hospitality",
    description: "Elevate guest experience with concierge calling and booking management.",
    gradient: "from-orange-600/80 to-red-900/90",
    icon: "UtensilsCrossed",
  },
  {
    id: "real-estate",
    name: "Real Estate",
    description: "Capture property inquiries with auto-dialers and lead tracking.",
    gradient: "from-teal-600/80 to-emerald-900/90",
    icon: "Home",
  },
  {
    id: "insurance",
    name: "Insurance",
    description: "Automate policy renewals, claims follow-ups and customer engagement.",
    gradient: "from-sky-600/80 to-blue-900/90",
    icon: "Shield",
  },
  {
    id: "customer-support",
    name: "Customer Support",
    description: "Deliver 24/7 support with AI chatbots, ticketing and voice automation.",
    gradient: "from-purple-600/80 to-indigo-900/90",
    icon: "MessageCircle",
  },
];
