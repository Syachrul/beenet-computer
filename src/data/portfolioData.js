import { 
  FaSchool, 
  FaBuilding, 
  FaHotel,
  FaServer,
  FaLaptop,
  FaShieldAlt
} from 'react-icons/fa'

export const portfolioData = [
  {
    id: 1,
    title: 'Instalasi Jaringan Office',
    client: 'PT Cerebrum Edukanesia Nusantara',
    category: 'Networking',
    description: 'Instalasi jaringan LAN dan WiFi di seluruh area Office.',
    icon: FaSchool,
    tags: ['Jaringan', 'WiFi', 'Server'],
    year: '2018',
    results: [
      'Kecepatan internet meningkat',
      'Coverage 100% seluruh area Office',
      'Manajemen bandwidth otomatis'
    ]
  },
  {
    id: 2,
    title: 'Digitalisasi Perkantoran',
    client: 'PT Integra Dayacipta Grahatama',
    category: 'IT Solution',
    description: 'Transformasi digital perkantoran dengan implementasi sistem manajemen dokumen digital dan cloud storage.',
    icon: FaBuilding,
    tags: ['Cloud', 'Digitalisasi', 'Dokumen'],
    year: '2014',
    results: [
      'Efisiensi waktu',
      'Penggunaan kertas berkurang',
      'Akses dokumen dari mana saja'
    ]
  },
  {
    id: 3,
    title: 'System Laboratorium PC',
    client: 'Universitas Pendidikan Indonesia',
    category: 'Installasi System dan Network PC',
    description: 'Installasi 12 unit PC di laboratorium komputer universitas dengan sistem terintegrasi.',
    icon: FaServer,
    tags: ['PC', 'Installasi', 'Network'],
    year: '2012',
    results: [
      'Performa PC meningkat ',
      'Sistem operasi terupdate',
      'Boot time lebih cepat'
    ]
  },
  {
    id: 4,
    title: 'Jaringan CCTV 32 Titik',
    client: 'Loka Litbang P2B2 Pangandaran',
    category: 'Networking',
    description: 'Instalasi jaringan CCTV sistem manajemen terpusat.',
    icon: FaHotel,
    tags: ['CCTV', 'WiFi', 'Office'],
    year: '2014',
    results: [
      'Integrasi Security terpusat',
      'Manajemen Visual area',
      'Sistem monitoring 24/7'
    ]
  },
  {
    id: 5,
    title: 'Service PC, Laptop & Printer',
    client: 'Lab Kualitas Air FTSL ITB',
    category: 'Service Hardware',
    description: 'Perbaikan dan perawatan PC, laptop dan printer untuk kebutuhan operasional Office, Laboratorium.',
    icon: FaLaptop,
    tags: ['PC','Laptop', 'Printer', 'Maintenance'],
    year: '2018',
    results: [
      'Performa laptop optimal',
      'Printer awet dan minim error',
      'Biaya maintenance turun'
    ]
  },
  {
    id: 6,
    title: 'Keamanan Jaringan & Server',
    client: 'Wifi PKJ',
    category: 'Security',
    description: 'Implementasi sistem keamanan jaringan dan server dengan firewall enterprise dan monitoring real-time.',
    icon: FaShieldAlt,
    tags: ['Security', 'Firewall', 'Monitoring'],
    year: '2018',
    results: [
      'Zero security breach',
      'Monitoring 24/7',
      'Sistem backup otomatis'
    ]
  }
]

export const categories = [
  { id: 'all', label: 'Semua' },
  { id: 'Networking', label: 'Networking' },
  { id: 'Service PC', label: 'Service PC' },
  { id: 'IT Solution', label: 'IT Solution' },
  { id: 'Service Hardware', label: 'Service Hardware' },
  { id: 'Security', label: 'Security' },
]
