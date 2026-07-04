export interface FlowNodeData {
  id: string;
  type: string;
  label: string;
  icon: string;
  color: string;
  x: number;
  y: number;
}

export interface FlowEdge {
  from: string;
  to: string;
}

export interface ToolbarItem {
  type: string;
  label: string;
  icon: string;
  color: string;
}

export const FLOW_NODES: FlowNodeData[] = [
  { id: "1", type: "incoming", label: "Incoming Call", icon: "PhoneIncoming", color: "#10B981", x: 80, y: 60 },
  { id: "2", type: "greeting", label: "Greeting", icon: "MessageSquare", color: "#6366F1", x: 220, y: 60 },
  { id: "3", type: "ivr", label: "IVR Menu", icon: "LayoutGrid", color: "#7C3AED", x: 380, y: 60 },
  { id: "4", type: "hours", label: "Business Hours", icon: "Clock", color: "#F59E0B", x: 380, y: 180 },
  { id: "5", type: "queue", label: "Queue", icon: "Users", color: "#3B82F6", x: 540, y: 40 },
  { id: "6", type: "agent", label: "Agent", icon: "Headphones", color: "#EC4899", x: 680, y: 40 },
  { id: "7", type: "voicemail", label: "Voicemail", icon: "Voicemail", color: "#8B5CF6", x: 540, y: 160 },
  { id: "8", type: "ai-bot", label: "AI Voice Bot", icon: "Bot", color: "#14B8A6", x: 680, y: 160 },
  { id: "9", type: "hangup", label: "Hang Up", icon: "PhoneOff", color: "#EF4444", x: 820, y: 100 },
];

export const FLOW_EDGES: FlowEdge[] = [
  { from: "1", to: "2" },
  { from: "2", to: "3" },
  { from: "3", to: "5" },
  { from: "3", to: "4" },
  { from: "4", to: "7" },
  { from: "5", to: "6" },
  { from: "6", to: "9" },
  { from: "7", to: "8" },
  { from: "8", to: "9" },
];

export const TOOLBAR_ITEMS: ToolbarItem[] = [
  { type: "incoming", label: "Incoming Call", icon: "PhoneIncoming", color: "#10B981" },
  { type: "greeting", label: "Greeting", icon: "MessageSquare", color: "#6366F1" },
  { type: "ivr", label: "IVR Menu", icon: "LayoutGrid", color: "#7C3AED" },
  { type: "hours", label: "Business Hours", icon: "Clock", color: "#F59E0B" },
  { type: "ai-bot", label: "AI Voice Bot", icon: "Bot", color: "#14B8A6" },
  { type: "queue", label: "Queue", icon: "Users", color: "#3B82F6" },
  { type: "ring-group", label: "Ring Group", icon: "Phone", color: "#0EA5E9" },
  { type: "agent", label: "Agent", icon: "Headphones", color: "#EC4899" },
  { type: "voicemail", label: "Voicemail", icon: "Voicemail", color: "#8B5CF6" },
  { type: "crm", label: "CRM Lookup", icon: "Database", color: "#F97316" },
  { type: "webhook", label: "Webhook", icon: "Webhook", color: "#84CC16" },
  { type: "sms", label: "SMS", icon: "MessageCircle", color: "#06B6D4" },
  { type: "email", label: "Email", icon: "Mail", color: "#E879F9" },
  { type: "hangup", label: "Hang Up", icon: "PhoneOff", color: "#EF4444" },
];
