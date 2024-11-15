'use client'

import { useRouter } from 'next/navigation'; // Import useRouter
import { useState, useEffect, useRef } from 'react'; // Import useState, useEffect, and useRef

interface SearchBarProps {
  onCategoryChange?: (category: string) => void;
  onSearch?: (searchTerm: string, category: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onCategoryChange, onSearch }) => {
  const router = useRouter(); // Initialize useRouter

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Your existing useEffect code
  }, []);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setIsOpen(false);
    onCategoryChange?.(category);
  };

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch?.(searchTerm, selectedCategory);
    router.push('/booksPage'); // Navigate to buyBookPage on form submission
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-sm min-w-[500px]">
      <div className="relative mt-2">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input 
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          className="w-full px-4 py-2 pl-10 border rounded"
          placeholder="Search for books..."
        />
      </div>
    </form>
  );
};

export default SearchBar;