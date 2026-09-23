import cypherImg from '../assets/cycp.png';
import killjoyImg from '../assets/kj.png';
import razeImg from '../assets/raze.png';
import reynaImg from '../assets/reyna.png';

export const AGENTS = [
  {
    id: 'CYPHER',
    name: 'Cypher',
    role: 'SENTINEL',
    avatar: cypherImg,
    themeColor: '#00F5D4',
  },
  {
    id: 'KILLJOY',
    name: 'Killjoy',
    role: 'SENTINEL',
    avatar: killjoyImg,
    themeColor: '#FFE600',
  },
  {
    id: 'RAZE',
    name: 'Raze',
    role: 'DUELIST',
    avatar: razeImg,
    themeColor: '#FF7B00',
  },
  {
    id: 'REYNA',
    name: 'Reyna',
    role: 'DUELIST',
    avatar: reynaImg,
    themeColor: '#C92A87',
  },
];

export const THREAT_LEVELS = [
  {
    id: 'CRITICAL',
    label: 'TỐI MẬT',
    subLabel: 'CRITICAL',
    color: '#FF4655',
    borderClass: 'border-[#FF4655]',
    bgClass: 'bg-[#FF4655]/15 text-[#FF4655] border-[#FF4655]/40',
  },
  {
    id: 'HIGH',
    label: 'KHẨN CẤP',
    subLabel: 'HIGH',
    color: '#F59E0B',
    borderClass: 'border-amber-400',
    bgClass: 'bg-amber-400/15 text-amber-400 border-amber-400/40',
  },
  {
    id: 'STANDARD',
    label: 'TIÊU CHUẨN',
    subLabel: 'STANDARD',
    color: '#00F5D4',
    borderClass: 'border-[#00F5D4]',
    bgClass: 'bg-[#00F5D4]/15 text-[#00F5D4] border-[#00F5D4]/40',
  },
];

export const FILTER_TABS = [
  { key: 'ALL', label: 'TẤT CẢ CHỈ THỊ' },
  { key: 'ACTIVE', label: 'ĐANG THI HÀNH' },
  { key: 'COMPLETED', label: 'ĐÃ GIẢI MÃ' },
];
