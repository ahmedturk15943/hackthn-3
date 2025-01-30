'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface CartItem {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const router = useRouter();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(storedCart);
  }, []);

  const handleRemove = (id: string) => {
    const updatedCart = cartItems.filter((item) => item._id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleIncrease = (id: string) => {
    const updatedCart = cartItems.map((item) =>
      item._id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleDecrease = (id: string) => {
    const updatedCart = cartItems.map((item) =>
      item._id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );


  const handleCheckout = () => {
    router.push('/checkoutt');         
  };

  return (
    <div className="p-4 sm:p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-white">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div
              key={`${item._id}-${index}`}
              className="flex flex-col sm:flex-row items-center justify-between bg-black p-4 rounded-lg shadow-md space-y-4 sm:space-y-0"
            >
              <div className="flex items-center space-x-4">
                
<Image
  src={item.imageUrl}
  alt={item.name}
  width={64}   
  height={64}  
  className="rounded-lg object-cover"
/>
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-sm text-white">${item.price.toFixed(2)}</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleDecrease(item._id)}
                  className="px-2 py-1 bg-white rounded-lg hover:bg-gray-300"
                >
                  -
                </button>
                <span className="px-3 py-1 bg-white rounded-lg">
                  {item.quantity}
                </span>
                <button
                  onClick={() => handleIncrease(item._id)}
                  className="px-2 py-1 bg-white rounded-lg hover:bg-gray-200"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => handleRemove(item._id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="mt-6 p-4 bg-black rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <p className="text-white">Total Price: ${totalPrice.toFixed(2)}</p>
            <button
              onClick={handleCheckout}
              className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-lg transition-all"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
