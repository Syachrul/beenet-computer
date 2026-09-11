import { Link } from 'react-router-dom';
import SEO from '@components/layout/common/SEO';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Halaman Tidak Ditemukan"
        description="Halaman yang Anda cari tidak tersedia."
        noindex
      />
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl font-bold mb-4 text-gray-800">404</h1>
        <p className="text-xl mb-8 text-gray-600">Halaman tidak ditemukan</p>
        <Link
          to="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </>
  );
}
