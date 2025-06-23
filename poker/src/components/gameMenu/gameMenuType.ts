export type GameMenuItem = {
  id: string;
  displayName: string;
  description: string;
  cardCode: string; // card code or something else for image/icon
  badgeText?: string;
  badgeColor?: string;
  enabled: boolean;
  routePath: string; // React Router path to navigate
};
