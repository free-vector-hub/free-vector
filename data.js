// Default initial designs data
const defaultDesigns = [
  {
    id: 1,
    title: "Pro Sublimation Cricket Jersey",
    categories: ["Jersey", "Cricket"],
    type: "Free",
    price: 0,
    imageUrl: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=500",
    fileUrl: "https://drive.google.com",
    description: "High-quality sublimation cricket jersey design with vector patterns for easy printing."
  }
];

// Load designs from localStorage or fallback to default
function getDesigns() {
  const stored = localStorage.getItem('vector_hub_data');
  return stored ? JSON.parse(stored) : defaultDesigns;
}

// Save designs to localStorage
function saveDesigns(data) {
  localStorage.setItem('vector_hub_data', JSON.stringify(data));
}
