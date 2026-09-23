import React from 'react';

const Header = ({
  total,
  activeCount,
  completedCount,
  progressPercent,
  onPurgeCompleted,
}) => {
  return (
    <header className="mb-8 border-b border-[#2B3540] pb-6">
      {/* Thanh trạng thái đỉnh */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF4655] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF4655]"></span>
            </span>
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#FF4655] uppercase">
              DEFENSE PROTOCOL // SITE-04 ACTIVE
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white flex items-center gap-2">
            CHỈ THỊ //{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4655] via-orange-400 to-[#00F5D4]">
              VALORANT
            </span>
          </h1>
        </div>

        {/* Nút hành động dọn dẹp các nhiệm vụ đã giải mã */}
        {completedCount > 0 && (
          <button
            onClick={onPurgeCompleted}
            className="self-start md:self-auto text-xs font-bold px-3 py-2 border border-[#FF4655]/40 text-[#FF4655] hover:bg-[#FF4655] hover:text-white transition-all uppercase tracking-wider cursor-pointer"
          >
            [X] THANH TRỪNG {completedCount} NHIỆM VỤ ĐÃ XONG
          </button>
        )}
      </div>

      {/* Bảng HUD Thống kê số liệu */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {/* Box 1: Tổng số */}
        <div className="bg-[#161F2A]/90 border border-[#2B3540] p-3.5 relative overflow-hidden">
          <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
            TỔNG CHỈ THỊ
          </div>
          <div className="text-2xl md:text-3xl font-black text-white mt-0.5">
            {String(total).padStart(2, '0')}
          </div>
          <div className="absolute top-0 right-0 w-2 h-2 bg-gray-500 [clip-path:polygon(100%_0,0_0,100%_100%)]" />
        </div>

        {/* Box 2: Đang thi hành */}
        <div className="bg-[#161F2A]/90 border border-[#2B3540] p-3.5 relative overflow-hidden">
          <div className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">
            ĐANG THI HÀNH
          </div>
          <div className="text-2xl md:text-3xl font-black text-amber-400 mt-0.5">
            {String(activeCount).padStart(2, '0')}
          </div>
          <div className="absolute top-0 right-0 w-2 h-2 bg-amber-400 [clip-path:polygon(100%_0,0_0,100%_100%)]" />
        </div>

        {/* Box 3: Đã giải mã */}
        <div className="bg-[#161F2A]/90 border border-[#2B3540] p-3.5 relative overflow-hidden">
          <div className="text-[10px] text-[#00F5D4] font-bold uppercase tracking-wider">
            ĐÃ GIẢI MÃ
          </div>
          <div className="text-2xl md:text-3xl font-black text-[#00F5D4] mt-0.5">
            {String(completedCount).padStart(2, '0')}
          </div>
          <div className="absolute top-0 right-0 w-2 h-2 bg-[#00F5D4] [clip-path:polygon(100%_0,0_0,100%_100%)]" />
        </div>

        {/* Box 4: Tiến độ % */}
        <div className="bg-[#161F2A]/90 border border-[#2B3540] p-3.5 relative flex flex-col justify-between">
          <div className="flex justify-between items-center text-[10px] text-gray-400 font-bold uppercase tracking-wider">
            <span>TIẾN ĐỘ ĐỒNG BỘ</span>
            <span className="text-[#00F5D4]">{progressPercent}%</span>
          </div>
          <div className="w-full bg-[#0F1923] h-2 border border-[#2B3540] overflow-hidden mt-2">
            <div
              className="bg-gradient-to-r from-[#FF4655] to-[#00F5D4] h-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;