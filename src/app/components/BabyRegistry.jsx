"use client";
import { useState , useEffect } from 'react';
import { GiftIcon, ShoppingCartIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBaby,faLocationDot } from '@fortawesome/free-solid-svg-icons'; // Import the correct icon

const initialItems = [
  { id: 1, name: 'Diaper Bag', link: 'https://example.com/diaper-bag', chosenBy: '' },
  { id: 2, name: 'Nursing pillow', link: 'https://example.com/nursing-pillow', chosenBy: '' },
  { id: 3, name: 'Burp clothes', link: 'https://example.com/burp-cloths', chosenBy: '' },
  { id: 4, name: 'Breast pump', link: 'https://example.com/breast-pump', chosenBy: '' },
  { id: 5, name: 'Formula', link: 'https://example.com/formula', chosenBy: '' },
  { id: 6, name: 'Baby bottles and nipples', link: 'https://example.com/baby-bottles', chosenBy: '' },
  { id: 7, name: 'Breast milk storage containers for storing expressed breast milk', link: 'https://example.com/breast-milk-storage', chosenBy: '' },
  { id: 8, name: 'Small bowls & UTENSILS', link: 'https://example.com/small-bowls', chosenBy: '' },
  { id: 9, name: 'Bibs', link: 'https://example.com/bibs', chosenBy: '' },
  { id: 10, name: 'High chair', link: 'https://example.com/high-chair', chosenBy: '' },
  { id: 11, name: 'Portable crib or playpen/play yard', link: 'https://example.com/playpen', chosenBy: '' },
  { id: 12, name: 'Baby bathtub', link: 'https://example.com/baby-bathtub', chosenBy: '' },
  { id: 13, name: 'Baby shampoo and body wash', link: 'https://example.com/baby-shampoo', chosenBy: '' },
  { id: 14, name: 'Towels & Hooded towels', link: 'https://example.com/towels', chosenBy: '' },
  { id: 15, name: 'Receiving blankets', link: 'https://example.com/receiving-blankets', chosenBy: '' },
  { id: 16, name: 'Bodysuits', link: 'https://example.com/bodysuits', chosenBy: '' },
  { id: 17, name: 'Booties & Socks', link: 'https://example.com/booties-socks', chosenBy: '' },
  { id: 18, name: 'Bassinet', link: 'https://example.com/bassinet', chosenBy: '' },
  { id: 19, name: 'Crib mattress', link: 'https://example.com/crib-mattress', chosenBy: '' },
  { id: 20, name: 'Crib', link: 'https://example.com/crib', chosenBy: '' },
  { id: 21, name: 'Night-light', link: 'https://example.com/night-light', chosenBy: '' },
  { id: 22, name: 'Humidifier', link: 'https://example.com/humidifier', chosenBy: '' },
  { id: 23, name: 'Baby gate', link: 'https://example.com/baby-gate', chosenBy: '' },
  { id: 24, name: 'Baby first aid kit', link: 'https://example.com/first-aid-kit', chosenBy: '' },
  { id: 25, name: 'Baby monitor', link: 'https://example.com/baby-monitor', chosenBy: '' },
  { id: 26, name: 'Baby sound machine', link: 'https://example.com/sound-machine', chosenBy: '' },
  { id: 27, name: 'Pacifier', link: 'https://example.com/pacifier', chosenBy: '' },
  { id: 28, name: 'Teething ring & Sippy cups', link: 'https://example.com/teething-ring', chosenBy: '' },
  { id: 29, name: 'Play mat', link: 'https://example.com/play-mat', chosenBy: '' },
  { id: 30, name: 'Hands-free baby carrier', link: 'https://example.com/baby-carrier', chosenBy: '' },
  { id: 31, name: 'Diapers and wipes', link: 'https://example.com/diapers-wipes', chosenBy: '' },
  { id: 32, name: 'Relaxing baby swing', link: 'https://example.com/baby-swing', chosenBy: '' },
  { id: 33, name: 'Baby food blender', link: 'https://example.com/food-blender', chosenBy: '' },
  { id: 34, name: 'Burp cloths and bibs', link: 'https://example.com/burp-cloths-bibs', chosenBy: '' },
  { id: 35, name: 'Bottle sterilizer', link: 'https://example.com/bottle-sterilizer', chosenBy: '' },
  { id: 36, name: 'Car seat', link: 'https://example.com/car-seat', chosenBy: '' },
  { id: 37, name: 'Diapers & Diaper rash cream', link: 'https://example.com/diapers-rash-cream', chosenBy: '' },
  { id: 38, name: 'Nursing Pads', link: 'https://example.com/nursing-pads', chosenBy: '' },
  { id: 39, name: 'Baby Clothes', link: 'https://example.com/baby-clothes', chosenBy: '' },
];

export default function ListingComponent() {
  const [items, setItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [buyerName, setBuyerName] = useState('');
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);

  useEffect(() => {
    // Load items from localStorage on component mount
    const storedItems = localStorage.getItem('items');
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    } else {
      setItems(initialItems);
    }
  }, []);

  useEffect(() => {
    // Save items to localStorage whenever the items state changes
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const handleChoose = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleSubmit = () => {
    setItems(items.map(item =>
      item.id === selectedItem.id
        ? { ...item, chosenBy: buyerName }
        : item
    ));
    setIsModalOpen(false);
    setBuyerName('');
  };

  const handleViewItem = (link) => {
    window.open(link, '_blank');
  };

  const handleEventModalOpen = () => {
    setIsEventModalOpen(true);
  };

  const handleEventModalClose = () => {
    setIsEventModalOpen(false);
  };

  // Function to reset localStorage and state
  const handleReset = () => {
    localStorage.removeItem('items');
    setItems(initialItems);
  };

  return (
    <main className="bg-white p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-center text-black">
          Welcome to Kim's Baby Shower Registry 
        </h2>
        <button
          onClick={handleEventModalOpen}
          className="bg-gray-500 text-white text-sm rounded-lg px-4 py-2 hover:bg-gray-600 transition duration-300 flex items-center"
        >
          <FontAwesomeIcon icon={faLocationDot} className="w-5 h-5 mr-2" />
          When and Where ?
        </button>
      </div>
      
      <div className="mb-6">
        <button
          onClick={handleReset}
          className="bg-red-500 text-white text-sm rounded-lg px-4 py-2 hover:bg-red-600 transition duration-300"
        >
          Reset Data
        </button>
      </div>

      <ul className="space-y-6">
        {items.map(item => (
          <li key={item.id} className={`p-4 rounded-lg shadow-md ${item.chosenBy ? 'bg-gray-200' : 'bg-gray-100'} flex items-center justify-between`}>
            <div className="flex items-center space-x-4">
              <GiftIcon className="w-6 h-6 text-gray-500" />
              <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <label
                    className={`text-gray-800 text-lg font-semibold ${item.chosenBy ? 'line-through text-gray-500' : ''}`}
                  >
                    {item.name}
                  </label>
                  {item.chosenBy && (
                    <span className="text-gray-600 text-sm bg-gray-200 rounded-full px-2 py-1">
                      Chosen by {item.chosenBy}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              {!item.chosenBy && (
                <>
                  <button
                    onClick={() => handleViewItem(item.link)}
                    className="flex items-center bg-green-500 text-white text-sm rounded-lg px-4 py-2 hover:bg-green-600 transition duration-300"
                  >
                    <ShoppingCartIcon className="w-5 h-5 mr-2" />
                    View Item
                  </button>
                  <button
                    onClick={() => handleChoose(item)}
                    className="flex items-center bg-blue-500 text-white text-sm rounded-lg px-4 py-2 hover:bg-blue-600 transition duration-300"
                  >
                    <CheckCircleIcon className="w-5 h-5 mr-2" />
                    Choose
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>

      {/* Event Details Modal */}
      {isEventModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
            <h3 className="text-gray-800 text-xl font-bold mb-4">Event Details</h3>
            <p className="text-gray-600 mb-4">Date: August 15, 2024</p>
            <p className="text-gray-600 mb-4">Time: 20:00</p>
            <p className="text-gray-600 mb-4">Location: Mousoulitas 10, Lakatamia</p>
            <div className="h-64 mb-4">
              {/* Example map embed using Google Maps */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.674638892898!2d33.32207877479331!3d35.1148344608815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de1b9566390731%3A0x90a5310ed3cc947a!2sMousoulitas%2010%2C%20Lakatamia%2C%20Cyprus!5e0!3m2!1sen!2s!4v1721980470196!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={handleEventModalClose}
                className="flex items-center bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
              >
                <XCircleIcon className="w-5 h-5 mr-2" />
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Item Details Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
            <h3 className="text-gray-800 text-xl font-bold mb-4">Who's Buying This Item?</h3>
            <input
              type="text"
              value={buyerName}
              onChange={(e) => setBuyerName(e.target.value)}
              className="bg-gray-100 border border-gray-300 placeholder-gray-500 text-gray-800 text-sm rounded-lg block w-full p-3 mb-4 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your name"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex items-center bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
              >
                <XCircleIcon className="w-5 h-5 mr-2" />
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                <CheckCircleIcon className="w-5 h-5 mr-2" />
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}