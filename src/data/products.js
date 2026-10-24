export const categories = [
  { name: 'Flower bouquets', note: 'A little love, wrapped up', image: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=800&q=85' },
  { name: 'Plants & greens', note: 'Gifts that keep growing', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=85' },
  { name: 'Gift hampers', note: 'A box full of happy', image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=800&q=85' },
  { name: 'Little keepsakes', note: 'Small things, big feelings', image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=800&q=85' },
]

export const products = [
  { id: 1, name: 'The Blushing Romance', category: 'Flower bouquets', price: 1499, tag: 'Bestseller', image: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=900&q=85', description: 'Soft pink roses and seasonal blooms, gathered with care.' },
  { id: 2, name: 'Sunday Sunshine', category: 'Flower bouquets', price: 1199, tag: 'Just because', image: 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?auto=format&fit=crop&w=900&q=85', description: 'A cheerful mix made to brighten an ordinary day.' },
  { id: 3, name: 'Little Leaf Friend', category: 'Plants & greens', price: 799, tag: 'Easy to love', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=85', description: 'A lovely green companion for desks and cosy corners.' },
  { id: 4, name: 'The Thoughtful Box', category: 'Gift hampers', price: 1899, tag: 'Made for gifting', image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=900&q=85', description: 'A considered little collection for someone special.' },
]

export const money = (value) => new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
}).format(value)
