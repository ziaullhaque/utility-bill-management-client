# Utility Bills Management System

A MERN-stack single-page application to view, manage and pay monthly utility bills (Electricity, Gas, Water, Internet).  
Users can register/login (email & Google), pay **current-month** bills, view their payment history, download payment receipts (single or all) as PDF, and manage bills. The project follows the assignment rules (routing reload-safe, responsive UI, toast/SweetAlert for CRUD, PDF export, theme toggle, etc.).

---

## Demo / Links

- **Live site:** https://utility-bill-management.netlify.app/
- **Client repo:** https://github.com/ziaullhaque/utility-bill-management-client.git
- **Server repo:** https://github.com/ziaullhaque/utility-bill-management-server.git

---

## Key features

- User authentication (Email/Password + Google Sign-In via Firebase)
- Responsive SPA with React Router (no reload errors)
- Home page: hero slider, 4 categories, recent bills (limit 6), 2 extra sections
- Bills page: 3-column grid, filter by category (frontend + backend query params)
- Bill details (private): pay only if bill date is current month
- Pay modal: auto-filled Email/BillId/Amount/Date + validation (phone 11 digits)
- My Bills (private): shows user's payments only, update/delete rows, download single PDF, “Download All” PDF
- PDF generation: jsPDF + jspdf-autotable
- Theme toggle (light/dark)
- Animations: Framer Motion
- Toast/SweetAlert for CRUD actions
- Loading spinner, 404 page, dynamic titles

---

## Tech stack

**Frontend**

- React, Vite, React Router v6
- Tailwind CSS + DaisyUI
- Firebase Authentication
- Framer Motion, Lottie React
- jsPDF + jspdf-autotable
- SweetAlert2, react-icons

**Backend**

- Node.js + Express
- MongoDB Atlas
- Deployed on Vercel (server) and Netlify (client)

---

## API Endpoints

```
GET  /bills
GET  /bills/:id
POST /bills
GET  /payments?email=user@example.com
POST /payments
```

---

### bills collection

```json
{
  "title": "Frequent Power Outage in Mirpur",
  "category": "Electricity",
  "email": "creator@gmail.com",
  "location": "Mirpur-10, Dhaka",
  "description": "Power cuts occur daily in the evening.",
  "image": "https://example.com/power.jpg",
  "date": "2025-10-26",
  "amount": 260
}
```

### payments collection

```json
{
  "billId": "691191aa0c7f03983dc0cbff",
  "username": "Mr. X",
  "email": "mrx@gmail.com",
  "phone": "017XXXXXXXX",
  "address": "Dhaka",
  "amount": 260,
  "date": "2025-11-04"
}
```

---

## Setup

### Client

```bash
cd client
npm install
npm run dev
```

### Server

```bash
cd server
npm install
node index.js
```

---

## Deployment

- Client: Netlify
- Server: Vercel

---

## Author

**Ziaull Haque**  
Project: Utility Bill Management System  
© 2025 All rights reserved.
