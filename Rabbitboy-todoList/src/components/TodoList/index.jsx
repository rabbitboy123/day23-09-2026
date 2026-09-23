import React from 'react';
import TodoItem from '../TodoItem/index';

const TodoList = ({ todos, onToggle, onEdit, onDelete }) => {
  if (!todos || todos.length === 0) {
    return (
      <div className="bg-[#161F2A]/90 border border-dashed border-[#2B3540] p-12 text-center">
        <div className="text-3xl mb-3">🛡️</div>
        <div className="text-sm font-black text-gray-300 uppercase tracking-widest mb-1">
          KHÔNG CÓ CHỈ THỊ NÀO ĐƯỢC TÌM THẤY
        </div>
        <div className="text-xs text-gray-500 font-mono">
          HỆ THỐNG ĐANG Ở TRẠNG THÁI SẴN SÀNG // VUI LÒNG KHỞI TẠO HOẶC ĐỔI BỘ LỌC
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;