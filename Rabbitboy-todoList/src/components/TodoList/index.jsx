import React from 'react';
import TodoItem from '../TodoItem/index';

// Component TodoList duyệt qua mảng công việc và hiển thị
const TodoList = ({ todos, onToggle, onDelete }) => {
  // Khi không có công việc nào
  if (!todos || todos.length === 0) {
    return (
      <div className="bg-[#1E293B] border border-dashed border-slate-700 rounded-xl p-8 text-center text-gray-400 text-sm">
        🎉 Không có công việc nào trong danh mục này!
      </div>
    );
  }

  // Khi có công việc: dùng .map() để lặp qua từng phần tử
  return (
    <div className="space-y-2.5">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;