/**
 * GameMenuItem type defines the shape of a single game option.
 * - id: unique identifier for the game.
 * - displayName: title shown to the user.
 * - description: brief info about the game.
 * - cardCode: code used to render the card image/icon.
 * - badgeText: optional label shown on the card (e.g. "New", "Beta").
 * - badgeColor: optional color for the badge label.
 * - enabled: whether the game is selectable.
 * - routePath: React Router path to navigate on selection.
 */
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
