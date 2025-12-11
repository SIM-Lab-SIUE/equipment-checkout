import React from "react";

type EquipmentCardProps = {
  name: string;
  imageUrl: string;
  category: string;
  status: string;
};

const EquipmentCard: React.FC<EquipmentCardProps> = ({ name, imageUrl, category, status }) => (
  <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 gap-2">
    <img src={imageUrl} alt={name} className="w-full h-40 object-cover rounded-md mb-2" />
    <h2 className="font-bold text-lg text-center">{name}</h2>
    <p className="text-sm text-gray-500">{category}</p>
    <span className={`text-xs px-2 py-1 rounded ${status === 'Available' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{status}</span>
    <button className="mt-3 w-full bg-siue-red text-white font-semibold py-2 rounded hover:bg-siue-black transition">Reserve</button>
  </div>
);

export default EquipmentCard;
