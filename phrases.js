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
 
// How strongly tiles show their author colour (for multi-author phrases, the blended colour).
export const TILE_TINT = 40;       // 0–100, locked tiles
export const UNLOCKED_FILL = 100;  // 0–100, unlocked tiles
 
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
  ["That's right!", ["Goldy", "Frosty"], 1],
  ["Hakuna Matata", ["Frosty"], 1],
  ["Hanzo, down!", ["Frosty"], 1],
  ["Unbelievable", ["Everyone"], 1],
  ["I'll smoke to that", ["Goldy", "Frosty"], 1],
  ["I'll drink to that", ["Goldy", "Frosty"], 1],
  ["Sorry Hanzo", ["Frosty"], 1],
  ["What the fuck", ["Everyone"], 1],
  ["No way", ["Everyone"], 1],
  ["Holy shit!", ["Everyone"], 1], 
  ["What the fuck", ["Everyone"], 1],
  ["WOAH!", ["Everyone"], 1],
  ["Nae chance", ["Goldy", "Frosty"], 1],
  ["Oops", ["Everyone"], 1],
  ["Awwww", ["Everyone"], 1],
  ["I don't care", ["Everyone"], 1],
  ["Ayeeee", ["Goldy", "Frosty"], 1],
  ["Who's that?", ["Everyone"], 1],
  ["I'm going to bed", ["Everyone"], 1],
  ["Launching now", ["Everyone"], 1],
  ["That's so annoying", ["Everyone"], 1],
  ["Absolutely not", ["Everyone"], 1],
  ["Iknew it", ["Everyone"], 1],
  ["Do  you remember...", ["Everyone"], 1],
  ["Go to bed", ["Kyann"], 1],
  ["No idea", ["Everyone"], 1],
  ["67", ["Everyone"], 1],
  ["That's a good idea", ["Everyone"], 1],
  ["I don't know", ["Everyone"], 1],
  ["Take a drink", ["Everyone"], 1],
  ["Take a drink", ["Everyone"], 1],
  ["Stella", ["Frosty"], 1],
  ["Fuck", ["Everyone"], 1],
  ["[dabs]", ["Everyone"], 1],
];
 
// Sounds: put these files in the sounds/ folder (missing files are skipped silently).
export const VOLUME = 0.7;
export const SOUNDS = {
  press: "./sounds/button_press.mp3", // any tile or button press
  win: "./sounds/bingo!.mp3",         // bingo achieved
};
