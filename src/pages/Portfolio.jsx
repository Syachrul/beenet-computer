import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCheckCircle, FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa'
import { portfolioData, categories } from '@/data/portfolioData'
import Button from '../components/ui/Button'

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = activeCategory === 'all' 
    ? portfolioData 
    : portfolioData.filter(p => p.category === activeCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <>
      <section className="relative bg-gradient-to-br from-secondary-dark via-secondary to-secondary-light text-white py-20">
        <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" />
        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Portfolio <span className="text-primary">Kami</span>
            </h1>
            <p className="text-gray-300 text-lg mt-4">
              Berikut adalah beberapa project IT yang telah kami tangani untuk berbagai klien.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-gray-100 sticky top-20 z-30 shadow-sm">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-secondary shadow-glow'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  className="bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden h-48 bg-gradient-to-br from-primary/20 to-primary/5">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <project.icon className="text-6xl text-primary/30 group-hover:text-primary/50 transition-all duration-300" />
                    </div>
                    <div className="absolute top-4 right-4 bg-primary text-secondary text-xs font-bold px-3 py-1 rounded-full">
                      {project.category}
                    </div>
                    <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full flex items-center gap-2">
                      <FaCalendarAlt size={12} />
                      {project.year}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-3">{project.client}</p>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-2xl font-bold text-secondary mt-3">
                      {selectedProject.title}
                    </h2>
                    <p className="text-gray-500 mt-1">{selectedProject.client}</p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-gray-600 text-2xl"
                  >
                    &times;
                  </button>
                </div>

                <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
                  <FaCalendarAlt />
                  <span>{selectedProject.year}</span>
                  <span className="mx-2">•</span>
                  <span>{selectedProject.category}</span>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-bold text-secondary mb-3">Hasil & Manfaat:</h4>
                  <ul className="space-y-2">
                    {selectedProject.results.map((result, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-600">
                        <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button 
                  variant="primary" 
                  size="md"
                  className="w-full"
                  onClick={() => setSelectedProject(null)}
                >
                  <FaExternalLinkAlt className="inline mr-2" />
                  Tutup Detail
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Portfolio
