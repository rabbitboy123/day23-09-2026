import React from 'react';

// Component TodoItem hiển thị từng dòng công việc
const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="bg-[#1E293B] border border-slate-700 rounded-lg p-3.5 flex items-center justify-between gap-3 hover:border-slate-500 transition-colors">
      <div className="flex items-center gap-3 flex-1">
        {/* Checkbox đánh dấu hoàn thành */}
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="w-5 h-5 accent-emerald-500 cursor-pointer rounded"
        />

        {/* Tiêu đề công việc: nếu hoàn thành thì gạch ngang */}
        <span
          onClick={() => onToggle(todo.id)}
          className={`text-sm cursor-pointer select-none transition-colors ${
            todo.completed
              ? 'line-through text-gray-500 italic'
              : 'text-gray-100 font-medium'
          }`}
        >
          {todo.text}
        </span>
      </div>

      {/* Nút xóa công việc */}
      <button
        onClick={() => onDelete(todo.id)}
        className="text-xs font-semibold text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 px-2.5 py-1.5 rounded transition-colors cursor-pointer"
        title="Xóa công việc này"
      >
        ✕ Xóa
      </button>
    </div>
  );
};

export default TodoItem;