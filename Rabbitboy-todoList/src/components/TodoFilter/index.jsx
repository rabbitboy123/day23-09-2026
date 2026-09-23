import React from 'react';
import { FILTER_TABS, AGENTS } from '../../constants/agents';

const TodoFilter = ({
  searchQuery,
  onSearchChange,
  currentStatus,
  onStatusChange,
  currentAgent,
  onAgentChange,
}) => {
  return (
    <div className="bg-[#161F2A]/90 border border-[#2B3540] p-4 space-y-4 mb-4">
      {/* 1. Thanh tìm kiếm đa năng */}
      <div className="relative">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 text-xs">
          🔍
        </span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="TÌM THEO TÊN NHIỆM VỤ, MÃ CHỈ THỊ (DIR-...), HOẶC ĐẶC VỤ..."
          className="w-full bg-[#0F1923] border border-[#2B3540] pl-9 pr-4 py-2.5 text-xs text-white uppercase focus:outline-none focus:border-[#00F5D4] placeholder:text-gray-600 transition-colors"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-white text-xs cursor-pointer"
          >
            ✕
          </button>
        )}
      </div>

      {/* 2. Hàng bộ lọc: Trạng thái + Chọn Đặc vụ */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        {/* Các nút Tab Trạng thái */}
        <div className="flex flex-wrap gap-1.5">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => onStatusChange(tab.key)}
              className={`text-xs px-3 py-1.5 uppercase font-bold tracking-wider transition-colors cursor-pointer border ${
                currentStatus === tab.key
                  ? 'bg-[#FF4655] border-[#FF4655] text-white shadow-[0_0_10px_rgba(255,70,85,0.4)]'
                  : 'bg-[#0F1923] border-[#2B3540] text-gray-400 hover:text-white hover:border-gray-500'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Lọc theo Đặc vụ cụ thể */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest whitespace-nowrap">
            LỌC ĐẶC VỤ:
          </span>
          <select
            value={currentAgent}
            onChange={(e) => onAgentChange(e.target.value)}
            className="bg-[#0F1923] border border-[#2B3540] text-xs text-white px-2.5 py-1.5 uppercase focus:outline-none focus:border-[#00F5D4] cursor-pointer"
          >
            <option value="ALL">TẤT CẢ ĐẶC VỤ</option>
            {AGENTS.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name} ({item.role})
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default TodoFilter;