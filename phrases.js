  // ===== DEVELOPER CONFIG =====
// Discord Developer Portal > your app > Application ID
export const CLIENT_ID = "1560411510168232026";

export const TITLE = "GB&G Bingo";

// Put at least 24 phrases here. Each player gets a random shuffle of 24 of them.
// The center tile is always public/Image.PNG.
// Show "— author" under each phrase on the card.
export const SHOW_AUTHORS = true;

// Authors that should never appear on any card (case-insensitive), e.g. ["Author 2"].
// Players can also switch authors off for themselves in the in-app "Authors" panel.
export const DISABLED_AUTHORS = [];

// Faintly glow tiles that would complete a winning line ("one away").
export const SHOW_HINTS = true;

// Colour per author (any CSS colour). Tiles are tinted with their author's colour and fill with it when unlocked.
// Authors not listed here get a distinct colour generated automatically. Names are case-insensitive.
export const AUTHOR_COLORS = {
  "Everyone": "#ffffff", // white
  "Frosty":   "#00e5ff", // cyan
  "Kitty":    "#F158FF", // pink
  "Kyann":    "#ff4545", // red
  "TXM":      "#3ddc5f", // green
  "Goldy":    "#ffd600", // yellow
  "Duck":     "#ff9100", // orange
};

// Each phrase: ["text", "author", weight]
//  - weight is relative: 2 shows up about twice as often as 1, 0.5 about half as often, 0 never appears.
//  - weight and author are optional; a plain "text" string also works (weight 1, no author).
// You need at least 24 phrases with weight above 0; hundreds are fine.
export const PHRASES = [
  ["That's right!", "Frosty/Goldman", 1],
  ["Hakuna Matata", "Frosty", 2],
  ["Hanzo, down!", "Frosty", 0.5],
  ["Unbelievable", "Everyone", 1],
  ["I'll smoke to that", "Frosty", 1],
  ["I'll drink to that", "Frosty", 2],
  ["Sorry Hanzo", "Frosty", 0.5],
  ["Phrase 8", "Everyone", 1],
  ["Phrase 9", "Frosty", 1],
  ["Phrase 10", "Kitty", 2],
  ["Phrase 11", "Kyann", 0.5],
  ["Phrase 12", "TXM", 1],
  ["Phrase 13", "Goldy", 1],
  ["Phrase 14", "Duck", 2],
  ["Phrase 15", "Everyone", 0.5],
  ["Phrase 16", "Frosty", 1],
  ["Phrase 17", "Kitty", 1],
  ["Phrase 18", "Kyann", 2],
  ["Phrase 19", "TXM", 0.5],
  ["Phrase 20", "Goldy", 1],
  ["Phrase 21", "Duck", 1],
  ["Phrase 22", "Everyone", 2],
  ["Phrase 23", "Frosty", 0.5],
  ["Phrase 24", "Kitty", 1],
];

// Sounds: put these files in the sounds/ folder (missing files are skipped silently).
export const VOLUME = 0.7;
export const SOUNDS = {
  press: "./sounds/button_press.mp3", // any tile or button press
  win: "./sounds/bingo!.mp3",         // bingo achieved
};