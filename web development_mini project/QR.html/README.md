# QR Code Generator

A simple and interactive web application that allows users to generate QR codes from text or URLs. This project demonstrates frontend development using HTML, CSS, and JavaScript with an external QR code library.

## Features

- **Generate QR Codes**: Convert any text or URL into a QR code instantly
- **Customizable Size**: Choose from 10 different size options (100×100 to 1000×1000 pixels)
- **Download QR Codes**: Save generated QR codes as PNG images
- **Real-time Generation**: QR code updates automatically when size is changed
- **Responsive Design**: Mobile-friendly interface that works on all devices
- **User-friendly Interface**: Clean and intuitive UI for easy navigation

## Project Structure

```
QR.html/
├── index.html      # Main HTML markup
├── style.css       # Styling and responsive design
├── script.js       # JavaScript functionality
└── README.md       # Documentation
```

## Files Description

### index.html
- Structured HTML5 markup
- Input field for text/URL entry
- Size selection dropdown
- QR code display container
- Generate and Download buttons
- External QR code library integration via CDN

### style.css
- CSS variables for consistent theming
- Flexbox and Grid layouts
- Dark theme with teal accent colors
- Responsive design with media queries for mobile devices
- Styled buttons, input fields, and containers

### script.js
- Event listeners for user interactions
- QR code generation logic using QRCode library
- Download functionality with canvas/image support
- Input validation and user feedback
- Dynamic size adjustment

## How to Use

1. **Open the Application**: Open `index.html` in any modern web browser
2. **Enter Text/URL**: Type the text or URL you want to convert into a QR code in the input field
3. **Select Size**: Choose your desired QR code size from the dropdown menu
4. **Generate**: Click the "Generate" button to create the QR code
5. **Download**: Click the "Download" button to save the QR code as a PNG image

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with CSS variables and media queries
- **JavaScript (ES6)**: Event handling and DOM manipulation
- **QRCode.js**: External library for QR code generation (via CDN)

## External Dependencies

- **QRCode.js**: `https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js`

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Key Features Explained

### QR Code Generation
The app uses the QRCode.js library to convert input text into a visual QR code with:
- High error correction level (Level H)
- Customizable dimensions
- Black foreground with white background

### Download Functionality
- Detects both canvas and image elements
- Converts canvas to PNG format
- Provides automatic filename `QR_Code.png`

### Responsive Design
- Mobile-first approach
- Adapts layout for screens below 520px width
- Touch-friendly buttons and inputs

## Size Options

| Option | Dimension |
|--------|-----------|
| 1 | 100 × 100 |
| 2 | 200 × 200 |
| 3 | 300 × 300 |
| 4 | 400 × 400 |
| 5 | 500 × 500 |
| 6 | 600 × 600 |
| 7 | 700 × 700 |
| 8 | 800 × 800 |
| 9 | 900 × 900 |
| 10 | 1000 × 1000 |

## Color Scheme

- **Background**: Dark navy (#001122)
- **Primary**: Teal (#155e75)
- **Secondary**: White (#ffffff)
- **Border**: Light teal (#7fb7c9)

## Future Enhancements

- Add color customization for QR code colors
- Error correction level selection
- QR code history/clipboard copy
- QR code scanning functionality
- Multiple format exports (SVG, PDF)
- Dark/Light theme toggle

## License

This project is part of the web development mini projects collection.

## Author

Created as part of a web development learning project.
