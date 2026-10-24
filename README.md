# Phool & Prakash — Phase 1

Responsive storefront concept based on the supplied brand references for handcrafted festive décor.

## Brand and products
- Logo and visual direction use burgundy, antique gold, ivory and traditional lotus motifs.
- Product collection: lotus diya holders, handmade festive lanterns/kandils, and Shubh-Labh hangings.
- Lantern price of ₹1,299 is shown from the supplied Instagram post. Other products say “DM for price” until prices are confirmed.
- Pre-orders note a minimum of 10 days' notice, matching the supplied profile content.
- Enquiry bag is a frontend demo; enquiry links point to the Instagram profile.

## Stack
React + Vite + JavaScript + Tailwind CSS + Lucide icons.

## Run locally
Node.js 18+ recommended.
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Before accepting real orders
This is a Phase 1 storefront and enquiry prototype. The cart does not create orders or collect money. Before launch, add the Express API, MongoDB product/admin CRUD, delivery-zone rules for Pune, order records, and secure Razorpay integration. Create payment orders on the backend and verify Razorpay signatures server-side. COD orders should also be created through the backend. Never expose Razorpay secret keys or database credentials in the frontend.
