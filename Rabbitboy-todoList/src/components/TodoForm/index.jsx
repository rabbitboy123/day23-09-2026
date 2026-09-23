import React, { useState } from 'react';

// Component Form quản lý việc nhập liệu thêm công việc mới
const TodoForm = ({ onAddTodo }) => {
  // Local State: chỉ phục vụ việc nhập ký tự trong ô input
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra nếu ô nhập trống thì bỏ qua
    if (!text.trim()) return;

    // Gửi nội dung text lên component cha thông qua hàm prop onAddTodo
    onAddTodo(text.trim());

    // Xóa trắng ô input sau khi thêm
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập tên công việc cần làm..."
        className="flex-1 bg-[#1E293B] border border-slate-700 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-emerald-500 placeholder-gray-500 transition-colors"
      />
      <button
        type="submit"
        className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm px-5 py-3 rounded-lg transition-colors cursor-pointer shadow-md"
      >
        + Thêm việc
      </button>
    </form>
  );
};

export default TodoForm;