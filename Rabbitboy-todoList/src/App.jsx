import React from 'react';
import Header from './components/Header/index';
import TodoForm from './components/TodoForm/index';
import TodoFilter from './components/TodoFilter/index';
import TodoList from './components/TodoList/index';
import { useTodos } from './hooks/useTodos';
import bgImg from './assets/bg.png';

export default function App() {
  const {
    todos,
    allTodosCount,
    activeCount,
    completedCount,
    progressPercent,
    searchQuery,
    setSearchQuery,
    prioritizeTodo,
    statusFilter,
    setStatusFilter,
    agentFilter,
    setAgentFilter,
    addTodo,
    toggleTodo,
    editTodo,
    deleteTodo,
    purgeCompleted,
  } = useTodos();

  return (
    <div
      className="min-h-screen bg-[#0F1923] text-[#ECE8E1] p-4 md:p-8 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `radial-gradient(circle at top, rgba(15, 25, 35, 0.88), rgba(15, 25, 35, 0.97)), url(${bgImg})`,
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header HUD: Tiêu đề + Thống kê + Thanh tiến độ */}
        <Header
          total={allTodosCount}
          activeCount={activeCount}
          completedCount={completedCount}
          progressPercent={progressPercent}
          onPurgeCompleted={purgeCompleted}
        />

        {/* Khung nội dung chính: Bố cục 2 cột chuyên nghiệp */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Cột trái (5/12): Form tạo chỉ thị + Bảng trạng thái phòng thủ */}
          <div className="lg:col-span-5 space-y-6">
            <TodoForm onAddTodo={addTodo} />

            {/* Panel thông tin phòng thủ trang trí */}
            <div className="bg-[#161F2A]/90 border border-[#2B3540] p-4 text-xs space-y-2.5 text-gray-400">
              <div className="flex items-center justify-between pb-2 border-b border-[#2B3540]">
                <span className="font-bold uppercase tracking-wider text-gray-300">
                  TRẠNG THÁI KHU VỰC
                </span>
                <span className="text-[#00F5D4] font-black uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4] animate-pulse" />
                  ĐÃ BẢO VỆ AN TOÀN
                </span>
              </div>
              <div className="flex justify-between">
                <span>RADIANITE CONTAINER:</span>
                <span className="text-white font-mono font-bold">ALPHA-STATION</span>
              </div>
              <div className="flex justify-between">
                <span>HỆ THỐNG PHÒNG THỦ:</span>
                <span className="text-[#00F5D4] font-bold">HOẠT ĐỘNG 100%</span>
              </div>
            </div>
          </div>

          {/* Cột phải (7/12): Tìm kiếm, Bộ lọc & Danh sách chỉ thị */}
          <div className="lg:col-span-7">
            {/* Thanh tìm kiếm & Tabs lọc trạng thái, lọc Đặc vụ */}
            <TodoFilter
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              currentStatus={statusFilter}
              onStatusChange={setStatusFilter}
              currentAgent={agentFilter}
              onAgentChange={setAgentFilter}
            />

            {/* Danh sách nhiệm vụ */}
            <TodoList
              todos={todos}
              onToggle={toggleTodo}
              onEdit={editTodo}
              onDelete={deleteTodo}
              onPrioritize={prioritizeTodo}
            />
          </div>
        </main>
      </div>
    </div>
  );
}