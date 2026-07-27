# Calculator Web Application

A modern, interactive calculator built with HTML, CSS, and JavaScript. This project demonstrates fundamental web development skills including DOM manipulation, event handling, and responsive UI design.

## 📋 Overview

This is a fully functional calculator that performs basic arithmetic operations with a clean, modern interface. The calculator features a sleek dark theme with a gradient background and smooth button interactions.

## 🎯 Features

- **Basic Operations**: Addition (+), Subtraction (-), Multiplication (*), Division (/)
- **Additional Functions**: 
  - Percentage (%) calculation
  - Clear All (AC) button to reset the calculator
  - Delete (DEL) button to remove the last entered digit
- **Decimal Support**: Perform calculations with decimal numbers
- **Double Zero**: Quick input of 00 for faster number entry
- **Responsive Display**: Real-time display of entered numbers and results
- **Modern UI**: 
  - Dark theme with gradient background
  - Circular buttons with shadow effects
  - Smooth hover and click interactions
  - Clean typography using Roboto font

## 📁 Project Structure

```
Calculator.html/
├── index.html      # HTML structure
├── style.css       # Styling and layout
├── script.js       # JavaScript functionality
└── README.md       # Documentation (this file)
```

## 🚀 How to Use

1. **Open the Calculator**: Open `index.html` in any modern web browser
2. **Enter Numbers**: Click on number buttons (0-9) to enter values
3. **Select Operation**: Click on operator buttons (+, -, *, /)
4. **Enter Another Number**: Click number buttons for the second operand
5. **Calculate Result**: Click the "=" button to get the result
6. **Clear**: 
   - Use "AC" to clear everything and start fresh
   - Use "DEL" to remove only the last digit

## 💻 Technologies Used

- **HTML5**: Semantic markup for calculator structure
- **CSS3**: 
  - Flexbox for layout
  - Linear gradients for background
  - Box shadows for depth and styling
  - Google Fonts (Roboto) for typography
- **JavaScript (Vanilla)**: 
  - DOM manipulation
  - Event listeners for button clicks
  - String concatenation and arithmetic evaluation

## 📝 Code Explanation

### HTML Structure
The calculator is built using a simple semantic HTML structure with:
- Input field for displaying numbers and results
- Button rows organized in divs for number pad layout
- Different button classes for styling (operator, equalBtn)

### CSS Styling
- **Dark Theme**: Gradient background from near-black to slate gray
- **Centered Layout**: Flexbox ensures calculator is centered on screen
- **Button Design**: Circular buttons with shadow effects and hover states
- **Color Coding**: 
  - Operators are green (#6dee0a)
  - Equal button is orange (#fb7c14)

### JavaScript Functionality
- Selects all buttons and attaches click event listeners
- Concatenates user input into a string
- Handles special operations (AC, DEL, =)
- Uses `eval()` to calculate mathematical expressions (Note: eval() should be used with caution in production environments)

## 🎨 Styling Details

| Element | Color | Details |
|---------|-------|---------|
| Background | Gradient | `linear-gradient(45deg, #0a0a0a, #3a4452)` |
| Calculator Box | Transparent | Border with shadow for depth |
| Buttons | Transparent | Circular, 60px size, white text |
| Operator Buttons | Green | `#6dee0a` |
| Equal Button | Orange | `#fb7c14` |
| Input Display | White | Right-aligned, 40px font |

## 🔧 Installation

No installation required! Simply:
1. Download or clone the repository
2. Open `index.html` in your web browser
3. Start calculating!

## 📱 Browser Compatibility

Works on all modern browsers that support:
- HTML5
- CSS3 (Flexbox, Gradients)
- ES6 JavaScript

Tested on:
- Chrome
- Firefox
- Safari
- Edge

## ⚠️ Known Limitations

- Uses `eval()` for calculation - consider safer alternatives for production
- No keyboard input support
- No calculation history
- Basic error handling

## 🚀 Future Enhancements

- Add keyboard support for number and operation input
- Implement calculation history
- Add scientific calculator functions (sin, cos, tan, etc.)
- Improve error handling and validation
- Add theme toggle (light/dark mode)
- Implement memory functions (M+, M-, MR, MC)
- Add responsive design for mobile devices
- Use safer evaluation methods instead of `eval()`

## 📚 Learning Outcomes

This project is perfect for learning:
- DOM manipulation with `getElementById()` and `querySelectorAll()`
- Event handling with `addEventListener()`
- String manipulation and concatenation
- CSS Flexbox and modern styling techniques
- Responsive UI design principles
- JavaScript arrow functions and array methods

## 👨‍💻 Author

Created by: **abhishekCode7266**

## 📄 License

This project is part of the educational repository and is available for learning and reference purposes.

---

**Happy Calculating!** 🧮
