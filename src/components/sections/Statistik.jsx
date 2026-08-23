import React from "react"
import { Users, Briefcase, Star, Award } from "lucide-react"

const Statistik = () => {
  const stats = [
    {
      icon: Users,
      value: "100+",
      label: "Klien Puas",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Briefcase,
      value: "50+",
      label: "Proyek Selesai",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Rating Pelanggan",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Award,
      value: "3+",
      label: "Penghargaan",
      color: "from-purple-500 to-purple-600"
    }
  ]

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Statistik
