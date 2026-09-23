import React from 'react';
import Header from './components/Header/index';
import TodoForm from './components/TodoForm/index';
import TodoFilter from './components/TodoFilter/index';
import TodoList from './components/TodoList/index';
import { useTodos } from './hooks/useTodos';

export default function App() {
  // Lấy dữ liệu và các hàm thao tác từ Custom Hook:
  const {
    todos,
    totalCount,
    completedCount,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
  } = useTodos();

  // Tính phần trăm công việc đã hoàn thành
  const progressPercent =
    totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 p-4 md:p-10 font-sans">
      <div className="max-w-xl mx-auto">
        {/* 1. Header: Thống kê số lượng & Thanh tiến độ */}
        <Header
          total={totalCount}
          completedCount={completedCount}
          progressPercent={progressPercent}
        />

        {/* 2. Form: Ô nhập thêm công việc mới */}
        <TodoForm onAddTodo={addTodo} />

        {/* 3. Filter: Các nút bấm lọc Tất cả / Chưa xong / Đã xong */}
        <TodoFilter currentFilter={filter} onFilterChange={setFilter} />

        {/* 4. List: Hiển thị danh sách các thẻ công việc */}
        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      </div>
    </div>
  );
}