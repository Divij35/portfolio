'use client';

import React from 'react';

type Props = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

const Searchbar = ({ searchTerm, setSearchTerm }: Props) => {
  return (
    <div className="relative max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search projects..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
      />
    </div>
  );
};

export default Searchbar;
