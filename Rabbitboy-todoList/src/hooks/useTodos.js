import { useState, useEffect } from 'react';

const STORAGE_KEY = 'TODOLIST_DON_GIAN';

// Dữ liệu mẫu ban đầu để bạn dễ quan sát giao diện
const DEFAULT_TODOS = [
  { id: 1, text: 'Học cách chia Component trong React', completed: true },
  { id: 2, text: 'Hiểu về Props và State', completed: false },
  { id: 3, text: 'Thực hành viết Custom Hook useTodos', completed: false },
];

export function useTodos() {
  // 1. State lưu danh sách công việc (lấy từ LocalStorage nếu đã từng lưu)
  const [todos, setTodos] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : DEFAULT_TODOS;
    } catch {
      return DEFAULT_TODOS;
    }
  });

  // 2. State lưu trạng thái lọc: 'ALL' (Tất cả), 'ACTIVE' (Chưa xong), 'COMPLETED' (Đã xong)
  const [filter, setFilter] = useState('ALL');

  // 3. Tự động lưu vào LocalStorage mỗi khi mảng `todos` thay đổi
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (err) {
      console.error('Không thể lưu vào localStorage:', err);
    }
  }, [todos]);

  // Hàm thêm một công việc mới
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(), // Dùng timestamp làm id để không bao giờ bị trùng
      text: text,
      completed: false,
    };
    // Đưa công việc mới lên đầu danh sách
    setTodos([newTodo, ...todos]);
  };

  // Hàm đổi trạng thái hoàn thành (bật/tắt completed)
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Hàm xóa công việc theo id
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Lọc ra danh sách hiển thị theo filter hiện tại
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'ACTIVE') return !todo.completed;
    if (filter === 'COMPLETED') return todo.completed;
    return true; // 'ALL' thì lấy hết
  });

  // Số lượng tổng và số lượng đã hoàn thành
  const totalCount = todos.length;
  const completedCount = todos.filter((t) => t.completed).length;

  // Trả về toàn bộ dữ liệu và các hàm để App.jsx sử dụng
  return {
    todos: filteredTodos,
    totalCount,
    completedCount,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
  };
}