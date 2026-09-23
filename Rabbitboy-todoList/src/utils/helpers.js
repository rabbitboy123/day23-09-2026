// Hàm tạo mã chỉ thị quân sự phong cách Valorant (VD: DIR-4081)
export const generateDirectiveId = () => {
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  return `DIR-${randomSuffix}`;
};

// Hàm lấy thời gian hiện tại chuẩn định dạng quân sự (HH:mm:ss)
export const getMilitaryTime = () => {
  return new Date().toLocaleTimeString('en-GB', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
};
