import React from 'react';

// Danh sách các bộ lọc kèm nhãn tiếng Việt dễ hiểu
const FILTER_OPTIONS = [
  { key: 'ALL', label: 'Tất cả' },
  { key: 'ACTIVE', label: 'Chưa xong' },
  { key: 'COMPLETED', label: 'Đã xong' },
];

const TodoFilter = ({ currentFilter, onFilterChange }) => {
  return (
    <div className="flex gap-2 mb-4">
      {FILTER_OPTIONS.map((item) => (
        <button
          key={item.key}
          onClick={() => onFilterChange(item.key)}
          className={`text-xs md:text-sm font-medium px-4 py-2 rounded-lg transition-colors cursor-pointer ${
            currentFilter === item.key
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'bg-[#1E293B] text-gray-400 hover:text-white hover:bg-slate-700'
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default TodoFilter;