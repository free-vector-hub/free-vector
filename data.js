const defaultDesigns = [
  {
    id: 1,
    title: "Pro Sublimation Cricket Jersey",
    categories: ["Jersey", "Cricket"],
    tags: "cricket, jersey, sublimation, blue",
    type: "Free",
    price: 0,
    imageUrl: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=500",
    fileUrl: "https://drive.google.com",
    description: "High-quality sublimation cricket jersey design with vector patterns for easy printing."
  }
];

function getDesigns() {
  const stored = localStorage.getItem('vector_hub_data');
  return stored ? JSON.parse(stored) : defaultDesigns;
}

function saveDesigns(data) {
  localStorage.setItem('vector_hub_data', JSON.stringify(data));
}
