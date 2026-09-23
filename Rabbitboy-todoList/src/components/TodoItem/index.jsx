import React, { useState } from "react";
import { AGENTS, THREAT_LEVELS } from "../../constants/agents";

const TodoItem = ({ todo, onToggle, onEdit, onDelete, onPrioritize }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);

  // Tìm thông tin Agent và Cấp độ nguy hiểm
  const agentInfo = AGENTS.find((a) => a.id === todo.agent) || AGENTS[0];
  const threatInfo =
    THREAT_LEVELS.find((t) => t.id === todo.priority) || THREAT_LEVELS[2];

  const handleSaveEdit = (e) => {
    e.preventDefault();
    if (!editTitle.trim()) return;
    onEdit(todo.id, editTitle.trim());
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditTitle(todo.title);
    setIsEditing(false);
  };

  return (
    <div
      className={`group relative bg-[#161F2A]/90 border transition-all duration-200 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
        todo.completed
          ? "border-[#1F2731] opacity-60 bg-[#121921]/90"
          : "border-[#2B3540] hover:border-[#FF4655]/80 hover:shadow-[0_0_15px_rgba(255,70,85,0.15)]"
      }`}
    >
      {/* Vạch màu chỉ thị cấp độ nguy hiểm bên trái */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1.5 transition-colors"
        style={{ backgroundColor: threatInfo.color }}
      />

      <div className="flex items-start sm:items-center gap-3.5 flex-1 pl-2">
        {/* Nút Checkbox hoàn thành kiểu Tactical */}
        <button
          onClick={() => onToggle(todo.id)}
          title={
            todo.completed ? "Đánh dấu chưa hoàn thành" : "Đánh dấu đã giải mã"
          }
          className={`w-6 h-6 shrink-0 border flex items-center justify-center transition-all cursor-pointer ${
            todo.completed
              ? "border-[#00F5D4] bg-[#00F5D4] text-[#0F1923] shadow-[0_0_8px_rgba(0,245,212,0.4)]"
              : "border-gray-500 hover:border-[#FF4655] bg-[#0F1923]"
          }`}
        >
          {todo.completed && <span className="font-black text-sm">✓</span>}
        </button>

        {/* Ảnh đại diện Agent */}
        <img
          src={agentInfo.avatar}
          alt={agentInfo.name}
          title={`Phụ trách: ${agentInfo.name} (${agentInfo.role})`}
          className="w-10 h-10 shrink-0 rounded object-cover border border-[#2B3540] bg-[#0F1923]"
        />

        {/* Nội dung thông tin chỉ thị */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            {/* Mã chỉ thị */}
            <span className="text-[10px] bg-[#0F1923] text-gray-300 font-mono px-1.5 py-0.5 font-bold border border-[#2B3540]">
              {todo.id}
            </span>

            {/* Tên Agent */}
            <span
              className="text-[11px] font-black uppercase tracking-wider"
              style={{ color: agentInfo.themeColor }}
            >
              [{agentInfo.name}]
            </span>

            {/* Badge Cấp độ */}
            <span
              className={`text-[9px] px-1.5 py-0.5 font-black uppercase tracking-wider border ${threatInfo.bgClass}`}
            >
              {threatInfo.label}
            </span>

            {/* Thời gian */}
            <span className="text-[10px] text-gray-500 font-mono hidden md:inline-block">
              {todo.timestamp}
            </span>
          </div>

          {/* Tiêu đề nhiệm vụ: Chế độ hiển thị bình thường hoặc Chế độ chỉnh sửa */}
          {isEditing ? (
            <form
              onSubmit={handleSaveEdit}
              className="flex items-center gap-2 mt-2"
            >
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                autoFocus
                className="flex-1 bg-[#0F1923] border border-[#00F5D4] px-2.5 py-1 text-sm text-white focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#00F5D4] text-[#0F1923] text-xs font-bold px-2.5 py-1 uppercase cursor-pointer"
              >
                Lưu
              </button>
              <button
                type="button"
                onClick={handleCancelEdit}
                className="bg-[#2B3540] text-gray-300 text-xs font-bold px-2 py-1 uppercase cursor-pointer"
              >
                Hủy
              </button>
            </form>
          ) : (
            <div
              className={`text-sm md:text-base font-semibold transition-colors break-words ${
                todo.completed
                  ? "line-through text-gray-500 italic"
                  : "text-white"
              }`}
            >
              {todo.title}
            </div>
          )}
        </div>
      </div>

      {/* Cụm nút hành động bên phải */}
      {!isEditing && (
        <div className="flex items-center gap-2 self-end sm:self-center pl-8 sm:pl-0">
          {/* Nút sửa */}
          <button
            onClick={() => setIsEditing(true)}
            title="Sửa nội dung chỉ thị"
            className="text-xs px-2.5 py-1 border border-[#2B3540] text-gray-400 hover:text-white hover:border-gray-400 transition-colors uppercase font-bold cursor-pointer"
          >
            ✏️ SỬA
          </button>

          <button
            onClick={() => onPrioritize(todo.id)}
            title="Ghim nhiệm vụ lên đầu danh sách"
            className="text-xs px-2.5 py-1 border border-amber-500/40 text-amber-400 hover:bg-amber-400 hover:text-black transition-all font-bold cursor-pointer"
          >
            📌 GHIM
          </button>

          {/* Nút hủy/xóa */}
          <button
            onClick={() => onDelete(todo.id)}
            title="Hủy bỏ chỉ thị quân sự này"
            className="text-xs px-2.5 py-1 border border-red-500/30 text-red-400 hover:bg-[#FF4655] hover:text-white hover:border-[#FF4655] transition-all uppercase font-bold cursor-pointer"
          >
            ✕ HỦY
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;