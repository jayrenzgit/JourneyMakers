import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-xl p-4 flex items-center gap-4"
      >
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search destinations, packages, or activities..."
          className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="bg-primary-600 text-white p-3 rounded-lg hover:bg-primary-700 transition-colors flex-shrink-0"
        >
          <FiSearch size={20} />
        </button>
      </form>
    </div>
  );
}