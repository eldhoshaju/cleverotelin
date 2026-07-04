export interface NavLink {
  label: string;
  href: string;
  hasDropdown: boolean;
}

export interface FloatingWidget {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface AnimationConfig {
  initial: Record<string, number | string>;
  animate: Record<string, number | string>;
  transition: Record<string, number | string>;
}
