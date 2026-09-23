import { useState, useEffect } from 'react';
import { generateDirectiveId, getMilitaryTime } from '../utils/helpers';

const STORAGE_KEY = 'VALORANT_DIRECTIVES_STORAGE';

// Danh sách nhiệm vụ mặc định ban đầu mang phong cách Valorant
const DEFAULT_DIRECTIVES = [
  {
    id: 'DIR-8401',
    title: 'Đặt bẫy Trapwire và Spycam kiểm soát Site B',
    agent: 'CYPHER',
    priority: 'HIGH',
    completed: false,
    timestamp: '08:30:15',
  },
  {
    id: 'DIR-9214',
    title: 'Kích hoạt Lockdown vô hiệu hóa kẻ địch chiếm Site A',
    agent: 'KILLJOY',
    priority: 'CRITICAL',
    completed: true,
    timestamp: '09:12:44',
  },
  {
    id: 'DIR-5520',
    title: 'Dùng Leer làm mù và đẩy nhanh vào Mid khu vực',
    agent: 'REYNA',
    priority: 'STANDARD',
    completed: false,
    timestamp: '10:05:20',
  },
];

export function useTodos() {
  // 1. Quản lý danh sách nhiệm vụ từ LocalStorage
  const [todos, setTodos] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : DEFAULT_DIRECTIVES;
    } catch {
      return DEFAULT_DIRECTIVES;
    }
  });

  // 2. Các trạng thái tìm kiếm & bộ lọc
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL'); // ALL, ACTIVE, COMPLETED
  const [agentFilter, setAgentFilter] = useState('ALL'); // ALL hoặc CYPHER, KILLJOY...

  // Tự động lưu LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (err) {
      console.error('Lỗi khi lưu localStorage:', err);
    }
  }, [todos]);

  // Thêm nhiệm vụ mới
  const addTodo = ({ title, agent, priority }) => {
    const newDirective = {
      id: generateDirectiveId(),
      title,
      agent,
      priority,
      completed: false,
      timestamp: getMilitaryTime(),
    };
    setTodos((prev) => [newDirective, ...prev]);
  };

  // Đổi trạng thái hoàn thành / chưa hoàn thành
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  // Sửa thông tin nhiệm vụ
  const editTodo = (id, newTitle) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, title: newTitle } : item
      )
    );
  };

  // Xóa 1 nhiệm vụ
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  // Thanh trừng toàn bộ nhiệm vụ đã hoàn thành
  const purgeCompleted = () => {
    setTodos((prev) => prev.filter((item) => !item.completed));
  };

  // Lọc danh sách theo Search + Status Filter + Agent Filter
  const filteredTodos = todos.filter((item) => {
    // 1. Lọc theo trạng thái
    if (statusFilter === 'ACTIVE' && item.completed) return false;
    if (statusFilter === 'COMPLETED' && !item.completed) return false;

    // 2. Lọc theo Agent
    if (agentFilter !== 'ALL' && item.agent !== agentFilter) return false;

    // 3. Lọc theo từ khóa tìm kiếm (tên nhiệm vụ hoặc mã chỉ thị)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(query);
      const matchId = item.id.toLowerCase().includes(query);
      const matchAgent = item.agent.toLowerCase().includes(query);
      if (!matchTitle && !matchId && !matchAgent) return false;
    }

    return true;
  });

  // Thống kê
  const totalCount = todos.length;
  const completedCount = todos.filter((t) => t.completed).length;
  const activeCount = totalCount - completedCount;
  const progressPercent =
    totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return {
    todos: filteredTodos,
    allTodosCount: totalCount,
    activeCount,
    completedCount,
    progressPercent,
    // Bộ lọc & Tìm kiếm
    searchQuery,
    setSearchQuery,
    statusFilter,
    setStatusFilter,
    agentFilter,
    setAgentFilter,
    // Thao tác CRUD
    addTodo,
    toggleTodo,
    editTodo,
    deleteTodo,
    purgeCompleted,
  };
}