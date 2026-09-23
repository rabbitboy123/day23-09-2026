import React, { useState } from 'react';
import { AGENTS, THREAT_LEVELS } from '../../constants/agents';

const TodoForm = ({ onAddTodo }) => {
  const [title, setTitle] = useState('');
  const [agent, setAgent] = useState('CYPHER');
  const [priority, setPriority] = useState('HIGH');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAddTodo({
      title: title.trim(),
      agent,
      priority,
    });

    setTitle('');
  };

  return (
    <section className="bg-[#161F2A]/95 border border-[#2B3540] p-5 md:p-6 relative backdrop-blur-sm">
      {/* Góc vát trang trí kiểu Valorant */}
      <div className="absolute top-0 right-0 w-4 h-4 bg-[#FF4655] [clip-path:polygon(100%_0,0_0,100%_100%)]" />

      <h2 className="text-sm font-black tracking-widest text-white uppercase mb-5 flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#FF4655]" />
        KHỞI TẠO CHỈ THỊ CHIẾN THUẬT MỚI
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* 1. Nhập tên chỉ thị */}
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">
            NỘI DUNG NHIỆM VỤ / DIRECTIVE NAME
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Ví dụ: Thiết lập tường độc che tầm nhìn Site A..."
            className="w-full bg-[#0F1923] border border-[#2B3540] px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#FF4655] transition-colors placeholder:text-gray-600"
          />
        </div>

        {/* 2. Chọn Đặc vụ phụ trách (Kèm Avatar) */}
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">
            ĐẶC VỤ PHỤ TRÁCH / ASSIGNED AGENT
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {AGENTS.map((item) => {
              const isSelected = agent === item.id;
              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => setAgent(item.id)}
                  className={`flex items-center gap-2.5 p-2 border transition-all text-left cursor-pointer ${
                    isSelected
                      ? 'border-[#FF4655] bg-[#FF4655]/10 shadow-[0_0_12px_rgba(255,70,85,0.25)]'
                      : 'border-[#2B3540] bg-[#0F1923] hover:border-gray-500'
                  }`}
                >
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-9 h-9 object-cover rounded bg-[#161F2A] border border-[#2B3540]"
                  />
                  <div className="overflow-hidden">
                    <div className="text-xs font-black uppercase text-white truncate">
                      {item.name}
                    </div>
                    <div className="text-[9px] text-gray-400 font-bold uppercase tracking-tighter">
                      {item.role}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Chọn Mức độ nguy hiểm (Threat Level) */}
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">
            CẤP ĐỘ NGUY HIỂM / THREAT LEVEL
          </label>
          <div className="grid grid-cols-3 gap-2">
            {THREAT_LEVELS.map((level) => {
              const isSelected = priority === level.id;
              return (
                <button
                  type="button"
                  key={level.id}
                  onClick={() => setPriority(level.id)}
                  className={`py-2 px-2 border text-center transition-all cursor-pointer ${
                    isSelected
                      ? `${level.bgClass} border-current font-black`
                      : 'border-[#2B3540] bg-[#0F1923] text-gray-400 hover:text-white'
                  }`}
                >
                  <div className="text-xs font-bold uppercase tracking-wider">
                    {level.label}
                  </div>
                  <div className="text-[9px] uppercase opacity-70">
                    {level.subLabel}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Nút gửi form */}
        <button
          type="submit"
          className="w-full mt-2 bg-[#FF4655] hover:bg-[#ff5d6a] text-white font-black uppercase tracking-widest text-xs py-3.5 transition-all shadow-[0_0_15px_rgba(255,70,85,0.35)] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>BAN HÀNH CHỈ THỊ</span>
          <span className="font-sans text-sm">+</span>
        </button>
      </form>
    </section>
  );
};

export default TodoForm;