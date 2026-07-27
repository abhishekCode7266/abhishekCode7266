# 🎮 Tic Tac Toe Game

A classic, interactive two-player Tic Tac Toe game built with HTML, CSS, and JavaScript. Play against your friend in this timeless strategy game!

## 📋 Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [How to Play](#how-to-play)
- [Technologies Used](#technologies-used)
- [File Descriptions](#file-descriptions)
- [Game Logic](#game-logic)
- [Installation](#installation)
- [Usage](#usage)
- [Responsive Design](#responsive-design)
- [Future Enhancements](#future-enhancements)

## ✨ Features

- **Two-Player Gameplay**: Player X vs Player O in turn-based gameplay
- **Win Detection**: Automatic detection of winning combinations
- **Tie Detection**: Recognizes when the game ends in a draw
- **Restart Functionality**: Reset the game board and play again
- **Interactive UI**: Hover effects and smooth transitions
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Alerts**: Displays current player turn and game results
- **Modern Styling**: Dark theme with clean, user-friendly interface

## 📁 Project Structure

```
Tic Tac Toe.html/
├── index.html        # Main HTML file with game board structure
├── style.css         # Styling and responsive design
├── script.js         # Game logic and event handlers
└── README.md         # Project documentation
```

## 🎯 How to Play

1. **Start the Game**
   - Open `index.html` in your web browser
   - The game starts with Player X (Player 1)

2. **Taking Turns**
   - Players alternate turns
   - Click on any empty cell to place your mark (X or O)
   - The current player's turn is displayed in the alert box

3. **Winning**
   - Connect three of your marks in a row (horizontal, vertical, or diagonal)
   - The winner is announced immediately
   - All cells are disabled to prevent further moves

4. **Tie Game**
   - If all 9 cells are filled without a winner, the game is a tie
   - Message "It's a Tie!" is displayed

5. **Restart**
   - Click the "Restart Game" button to clear the board
   - Start a new game immediately

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and game structure
- **CSS3**: Modern styling, flexbox, grid layout, and media queries
- **JavaScript (Vanilla)**: Game logic, event handling, and win detection

## 📝 File Descriptions

### index.html
- Contains the game board structure with 9 cells (3x3 grid)
- Player information display area
- Restart button for resetting the game
- Alert box for game messages
- Links to CSS and JavaScript files

### style.css
- **Container**: Centered game layout with full viewport height
- **Game Board**: 3x3 grid with cells
- **Cell Styling**: 120px squares with borders, hover effects
- **Player Display**: Shows current player information
- **Restart Button**: Styled button with hover and scale animations
- **Alert Box**: Fixed notification system at the top of the page
- **Responsive Design**: Media queries for mobile devices (max-width: 550px)
- **Color Scheme**: 
  - Background: #334155 (dark slate)
  - Cells: #1e293b (darker slate)
  - Borders: #ffffff (white)
  - Button: #5f5fc4 (purple-blue)

### script.js
Key Functions:
- `startGame()`: Initializes game and adds click event listeners
- `handleClick()`: Processes cell clicks and updates game state
- `changePlayerTurn()`: Switches between X and O players
- `checkWin()`: Validates winning conditions (8 possible combinations)
- `checkTie()`: Checks if all cells are filled with no winner
- `disableCells()`: Prevents further moves after game ends
- `restartGame()`: Resets the game board and starts a new game
- `showAlert()`: Displays messages to the player (auto-hides after 2 seconds)

## 🧠 Game Logic

### Winning Conditions (8 Combinations)
```
[0,1,2]  [3,4,5]  [6,7,8]  // Rows
[0,3,6]  [1,4,7]  [2,5,8]  // Columns
[0,4,8]  [2,4,6]           // Diagonals
```

### Game Flow
1. Player X makes the first move
2. After each move:
   - Check if current player has won
   - Check if the board is full (tie)
   - Switch to the other player
3. Game ends when there's a winner or a tie
4. Player can restart to play again

## 🚀 Installation

1. **Download or Clone**
   ```bash
   git clone https://github.com/abhishekCode7266/abhishekCode7266.git
   cd "web development_mini project/Tic Tac Toe.html"
   ```

2. **Open in Browser**
   - Double-click `index.html` or
   - Right-click → "Open with" → Choose your browser

3. **No Additional Setup Required**
   - No server needed
   - Works offline
   - Compatible with all modern browsers

## 💻 Usage

1. Open the game in your web browser
2. Two players sit together at the same computer
3. Player 1 uses X, Player 2 uses O
4. Click cells to make moves
5. First player to get 3 in a row wins!
6. Use "Restart Game" button to play again

## 📱 Responsive Design

The game is fully responsive with breakpoints for:
- **Desktop**: Full-size 120px cells with optimized spacing
- **Tablet**: Slightly smaller interface
- **Mobile** (≤550px width):
  - Reduced cell size (90px)
  - Adjusted font sizes
  - Optimized button and alert box dimensions
  - Better touch targets for mobile devices

### Breakpoint
```css
@media (max-width: 550px) {
  /* Mobile-specific styles */
}
```

## 🎨 Styling Highlights

- **Color Scheme**: Professional dark theme with good contrast
- **Animations**: 
  - Smooth hover transitions on cells (0.3s)
  - Button scale animation on hover
  - Alert box with auto-dismiss (2s)
- **Cursor Feedback**: Pointer cursor on interactive elements
- **Border Removal**: Clean grid appearance with hidden outer borders

## 🚀 Future Enhancements

Possible improvements for future versions:
- [ ] AI opponent (computer player with difficulty levels)
- [ ] Score tracking across multiple games
- [ ] Sound effects for moves and wins
- [ ] Game statistics and leaderboard
- [ ] Different themes/color schemes
- [ ] Local storage for game history
- [ ] Network multiplayer (WebSocket integration)
- [ ] Animated piece placement
- [ ] Game timer for speed challenges
- [ ] Undo move functionality

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created by [@abhishekCode7266](https://github.com/abhishekCode7266)

---

**Enjoy the game! Have fun playing Tic Tac Toe! 🎮✨**
