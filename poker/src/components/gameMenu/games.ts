/**
 * Array of game objects used in the GameMenu.
 * Each game includes:
 * - id: unique string identifier.
 * - displayName: title shown to the user.
 * - description: brief game description.
 * - cardCode: playing card code used as icon.
 * - badgeText: optional label indicating status (e.g., "New", "Coming Soon").
 * - badgeColor: badge label color (hex or CSS color string).
 * - enabled: whether the game is currently playable/selectable.
 * - routePath: React Router path for navigation.
 */
export const games = [
  {
    id: 'five_card_stud',
    displayName: 'Five Card Stud',
    description: 'Classic poker game with five cards.',
    cardCode: 'AS', // Ace of Spades for icon
    badgeText: 'New',
    badgeColor: '#28a745', // green
    enabled: true,
    routePath: '/five-card-stud',
  },
  {
    id: 'texas_holdem',
    displayName: "Texas Hold'em",
    description: 'Popular community card poker game.',
    cardCode: 'KH', // King of Hearts for icon
    badgeText: 'Coming Soon',
    badgeColor: '#6c757d', // gray
    enabled: false,
    routePath: '/texas-holdem',
  },
  {
    id: 'omaha',
    displayName: 'Omaha',
    description: 'Community card game with four hole cards.',
    cardCode: 'QD', // Queen of Diamonds for icon
    badgeText: 'Coming Soon',
    badgeColor: '#6c757d',
    enabled: false,
    routePath: '/omaha',
  },
  {
    id: 'razz',
    displayName: 'Razz',
    description: 'Lowball variant of Seven-Card Stud.',
    cardCode: 'JC', // Jack of Clubs for icon
    badgeText: 'Coming Soon',
    badgeColor: '#6c757d',
    enabled: false,
    routePath: '/razz',
  },
];
