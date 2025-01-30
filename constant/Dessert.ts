interface MenuItem {
  name: string
  description: string
  calories: number
  price: number
  highlight?: boolean
  category: string 
  imageUrl?: string
}

export const menuItems: MenuItem[] = [
  {
    name: "Fig and lemon cake",
    description: "Toasted French bread topped with romano, cheddar",
    calories: 560,
    price: 32,
    category: "Cake",
    imageUrl: "/images/fig-lemon-cake.png"
  },
  {
    name: "Creamy mascarpone cake",
    description: "Gorgonzola, ricotta, mozzarella, taleggio",
    calories: 700,
    price: 43,
    highlight: true,
    category: "Cake",
    imageUrl: "/images/creamy-mascarpone-cake.png"
  },
  {
    name: "Pastry, blueberries, lemon juice",
    description: "Ground cumin, avocados, peeled and cubed",
    calories: 1000,
    price: 14,
    category: "Pastry",
    imageUrl: "/images/pastry-blueberries.png"
  },
  {
    name: "Pain au chocolat",
    description: "Spreadable cream cheese, crumbled blue cheese",
    calories: 560,
    price: 35,
    category: "Pastry",
    imageUrl: "/images/pain-au-chocolat.png"
  }
]
