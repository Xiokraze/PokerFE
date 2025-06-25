# Five-Card Stud Poker – Frontend

This is the React-based frontend for the Five-Card Stud Poker take-home project. It provides a clean, responsive UI for simulating poker rounds, interacting with the backend API to display hands, evaluate results, and highlight winners.

## Features

- 🧠 Game Menu to select poker games (currently Five-Card Stud)
- 👤 Player Form with dynamic player addition
- 🃏 Card-based UI with themed poker card visuals and animations
- 🪄 Animated transitions for dealing cards and loading indicators
- ♿ Accessibility features including keyboard navigation and semantic HTML
- 💅 Light/dark theme support with context API
- 🔁 Full game flow: add players → deal cards → show results → play again

## Technologies Used

- React with TypeScript
- CSS Modules for scoped styling
- Context API for theming
- Fetch API for backend communication

## Setup

```bash
npm install
npm start
```

Make sure the backend API is running at http://localhost:5285 or update the API URL accordingly.

## Folder Structure Highlights

- components/: Reusable UI elements like PlayingCard, PokerButton, and PokerLoader
- pages/: Main game logic and screens (e.g., FiveCardStud)
- context/: Theme and other React contexts
- styles/: CSS Modules and global styles

## Future Enhancements

- Support for more poker variants and game modes
- Multiplayer or turn-based gameplay
- More animations and audio effects
- Enhanced accessibility and validation

## Related Project

This frontend pairs with the backend API in the Poker Backend Repo: https://github.com/Xiokraze/PokerBE
