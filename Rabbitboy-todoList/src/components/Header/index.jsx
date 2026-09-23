import React from 'react';

// Component Header chỉ nhận dữ liệu thống kê từ cha để hiển thị
const Header = ({ total, completedCount, progressPercent }) => {
  return (
    <header className="max-w-3xl mx-auto mb-8 text-center">
      <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
        📝 Sổ Tay Công Việc
      </h1>
      <p className="text-gray-400 text-sm mb-4">
        Ứng dụng thực hành chia Component và quản lý Logic trong React
      </p>

      {/* Khung thanh tiến độ hoàn thành */}
      <div className="bg-[#1E293B] border border-slate-700 rounded-xl p-4 max-w-md mx-auto shadow-sm">
        <div className="flex justify-between items-center text-sm mb-2">
          <span className="text-gray-300 font-medium">Tiến độ hoàn thành:</span>
          <span className="text-emerald-400 font-bold">
            {completedCount} / {total} việc ({progressPercent}%)
          </span>
        </div>
        <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden border border-slate-700">
          <div
            className="bg-emerald-500 h-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;