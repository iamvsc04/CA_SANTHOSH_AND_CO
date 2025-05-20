# CA Veerlapati Santhosh - Chartered Accountant Website

A modern, responsive website for CA Veerlapati Santhosh, offering professional accounting, tax, and business advisory services in Nalgonda.

## Features

- 🎨 Modern and responsive design
- 📱 Mobile-friendly interface
- 📝 Contact form with email integration
- 📅 Appointment booking system
- 💼 Service showcase
- 📊 Tax calculator
- 🔍 SEO optimized

## Tech Stack

- React.js
- Tailwind CSS
- Framer Motion (for animations)
- EmailJS (for form submissions)
- React Hook Form (for form handling)
- React Helmet (for SEO)

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- EmailJS account (for form functionality)

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd ca-website
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your EmailJS credentials:
```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_CONTACT_TEMPLATE_ID=your_contact_template_id
VITE_EMAILJS_APPOINTMENT_TEMPLATE_ID=your_appointment_template_id
```

4. Start the development server:
```bash
npm run dev
```

## EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail recommended)
3. Create two email templates:

   **Contact Form Template:**
   ```
   To: your-email@example.com
   From: {{name}} <{{email}}>
   Subject: {{subject}}
   
   Message:
   {{message}}
   ```

   **Appointment Template:**
   ```
   To: your-email@example.com
   From: {{name}} <{{email}}>
   Subject: New Appointment Request
   
   Appointment Details:
   Name: {{name}}
   Email: {{email}}
   Phone: {{phone}}
   Service: {{service}}
   Date: {{date}}
   Time: {{time}}
   
   Additional Notes:
   {{message}}
   ```

4. Get your credentials from the EmailJS dashboard and update the `.env` file

## Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   └── layout/       # Layout components
├── pages/            # Page components
├── assets/           # Static assets
├── config/           # Configuration files
└── styles/           # Global styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Features in Detail

### Contact Form
- Form validation
- Email notifications
- Success/error handling
- Responsive design

### Appointment Booking
- Date and time selection
- Service selection
- Form validation
- Email notifications
- Success/error handling

### Tax Calculator
- Income tax calculation
- GST calculation
- Real-time updates
- Mobile-friendly interface

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

CA Veerlapati Santhosh
- Email: info@casantosh.com
- Phone: +91 1234567890
- Address: 123 Main Street, Nalgonda, Telangana, India

## Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [EmailJS](https://www.emailjs.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Hook Form](https://react-hook-form.com/)
