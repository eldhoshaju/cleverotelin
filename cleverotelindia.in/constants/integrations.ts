export interface IntegrationPlatform {
  name: string;
  icon: string;
  color: string;
  orbit: number; // 1 = inner, 2 = outer
  angle: number; // degrees position on orbit
}

export const INTEGRATION_PLATFORMS: IntegrationPlatform[] = [
  // Inner orbit
  { name: "Salesforce", icon: "Cloud", color: "#00A1E0", orbit: 1, angle: 0 },
  { name: "HubSpot", icon: "Target", color: "#FF7A59", orbit: 1, angle: 45 },
  { name: "Slack", icon: "Hash", color: "#4A154B", orbit: 1, angle: 90 },
  { name: "Teams", icon: "Monitor", color: "#6264A7", orbit: 1, angle: 135 },
  { name: "Google", icon: "Globe", color: "#4285F4", orbit: 1, angle: 180 },
  { name: "Zoom", icon: "Video", color: "#2D8CFF", orbit: 1, angle: 225 },
  { name: "WhatsApp", icon: "MessageCircle", color: "#25D366", orbit: 1, angle: 270 },
  { name: "Zapier", icon: "Zap", color: "#FF4A00", orbit: 1, angle: 315 },
  // Outer orbit
  { name: "Notion", icon: "FileText", color: "#FFFFFF", orbit: 2, angle: 20 },
  { name: "Shopify", icon: "ShoppingBag", color: "#96BF48", orbit: 2, angle: 60 },
  { name: "Freshdesk", icon: "LifeBuoy", color: "#2CC73B", orbit: 2, angle: 100 },
  { name: "Zendesk", icon: "Headphones", color: "#03363D", orbit: 2, angle: 140 },
  { name: "Jira", icon: "Layers", color: "#0052CC", orbit: 2, angle: 180 },
  { name: "Stripe", icon: "CreditCard", color: "#635BFF", orbit: 2, angle: 220 },
  { name: "Pipedrive", icon: "GitBranch", color: "#1B1B1B", orbit: 2, angle: 260 },
  { name: "Zoho", icon: "Database", color: "#C8202B", orbit: 2, angle: 300 },
  { name: "Intercom", icon: "MessagesSquare", color: "#6AFDEF", orbit: 2, angle: 340 },
];

export const FEATURE_LIST = [
  "Salesforce",
  "HubSpot",
  "Zoho CRM",
  "Microsoft Teams",
  "Slack",
  "Google Workspace",
  "WhatsApp Business",
  "Zapier",
  "REST APIs",
  "Webhooks",
] as const;
