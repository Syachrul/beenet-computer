import { 
  FaSchool, 
  FaBuilding, 
  FaStore, 
  FaHotel,
  FaNetworkWired,
  FaServer,
  FaLaptop,
  FaPrint,
  FaShieldAlt
} from 'react-icons/fa'

export const portfolioData = [
  {
    id: 1,
    title: 'Instalasi Jaringan Sekolah',
    client: 'SMA Negeri 2 Malang',
    category: 'Networking',
    description: 'Instalasi jaringan LAN dan WiFi di seluruh area sekolah dengan 30 access point dan 5 server.',
    icon: FaSchool,
    tags: ['Jaringan', 'WiFi', 'Server'],
    year: '2024',
    results: [
      'Kecepatan internet meningkat 300%',
      'Coverage 100% seluruh area sekolah',
      'Manajemen bandwidth otomatis'
    ]
  },
  {
    id: 2,
    title: 'Digitalisasi Perkantoran',
    client: 'PT. Maju Jaya Abadi',
    category: 'IT Solution',
    description: 'Transformasi digital perkantoran dengan implementasi sistem manajemen dokumen digital dan cloud storage.',
    icon: FaBuilding,
    tags: ['Cloud', 'Digitalisasi', 'Dokumen'],
    year: '2024',
    results: [
      'Efisiensi waktu 60%',
      'Penggunaan kertas berkurang 80%',
      'Akses dokumen dari mana saja'
    ]
  },
  {
    id: 3,
    title: 'System Restore 50+ PC',
    client: 'Universitas Brawijaya',
    category: 'Service PC',
    description: 'Restore dan upgrade 50 unit PC di laboratorium komputer universitas dengan sistem terintegrasi.',
    icon: FaServer,
    tags: ['PC', 'Restore', 'Upgrade'],
    year: '2023',
    results: [
      'Performa PC meningkat 40%',
      'Sistem operasi terupdate',
      'Boot time lebih cepat 50%'
    ]
  },
  {
    id: 4,
    title: 'Jaringan Hotel 100+ Kamar',
    client: 'Hotel Santika Premiere',
    category: 'Networking',
    description: 'Instalasi jaringan fiber optic dan WiFi untuk 100+ kamar hotel dengan sistem manajemen terpusat.',
    icon: FaHotel,
    tags: ['Fiber Optic', 'WiFi', 'Hotel'],
    year: '2024',
    results: [
      'Internet super cepat 1 Gbps',
      'Manajemen bandwidth per kamar',
      'Sistem monitoring 24/7'
    ]
  },
  {
    id: 5,
    title: 'Service Laptop & Printer',
    client: 'CV. Sumber Makmur',
    category: 'Service Hardware',
    description: 'Perbaikan dan perawatan 20 unit laptop dan 15 printer untuk kebutuhan operasional perusahaan.',
    icon: FaLaptop,
    tags: ['Laptop', 'Printer', 'Maintenance'],
    year: '2024',
    results: [
      'Performa laptop optimal',
      'Printer awet dan minim error',
      'Biaya maintenance turun 30%'
    ]
  },
  {
    id: 6,
    title: 'Keamanan Jaringan & Server',
    client: 'Bank Syariah Indonesia',
    category: 'Security',
    description: 'Implementasi sistem keamanan jaringan dan server dengan firewall enterprise dan monitoring real-time.',
    icon: FaShieldAlt,
    tags: ['Security', 'Firewall', 'Monitoring'],
    year: '2024',
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
