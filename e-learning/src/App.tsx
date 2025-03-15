import React, { useState } from 'react';
import { Search, BookOpen, Users, Award, Play, Star, ChevronRight, Menu, X } from 'lucide-react';

// Course data
const courses = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    instructor: "Sarah Johnson",
    level: "Beginner",
    rating: 4.8,
    students: 1245,
    price: 49.99,
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Development"
  },
  {
    id: 2,
    title: "Advanced JavaScript Patterns",
    instructor: "Michael Chen",
    level: "Advanced",
    rating: 4.9,
    students: 843,
    price: 79.99,
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Development"
  },
  {
    id: 3,
    title: "Data Science Essentials",
    instructor: "Emily Rodriguez",
    level: "Intermediate",
    rating: 4.7,
    students: 1089,
    price: 59.99,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Data Science"
  },
  {
    id: 4,
    title: "UX/UI Design Principles",
    instructor: "David Kim",
    level: "Beginner",
    rating: 4.6,
    students: 756,
    price: 49.99,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Design"
  },
  {
    id: 5,
    title: "Machine Learning Fundamentals",
    instructor: "Priya Patel",
    level: "Intermediate",
    rating: 4.9,
    students: 1342,
    price: 69.99,
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Data Science"
  },
  {
    id: 6,
    title: "Mobile App Development with React Native",
    instructor: "James Wilson",
    level: "Intermediate",
    rating: 4.7,
    students: 968,
    price: 59.99,
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Development"
  }
];

// Categories
const categories = [
  { name: "Development", count: 428, icon: <BookOpen size={20} /> },
  { name: "Business", count: 195, icon: <Users size={20} /> },
  { name: "Design", count: 142, icon: <Award size={20} /> },
  { name: "Data Science", count: 237, icon: <BookOpen size={20} /> },
  { name: "Marketing", count: 164, icon: <Users size={20} /> }
];

// Top instructors
const instructors = [
  {
    name: "Sarah Johnson",
    specialty: "Web Development",
    students: 15420,
    courses: 12,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Michael Chen",
    specialty: "JavaScript Expert",
    students: 12840,
    courses: 8,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Emily Rodriguez",
    specialty: "Data Science",
    students: 10950,
    courses: 6,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  }
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCourses = activeCategory === "All" 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">E-LEARNING</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-900 hover:text-indigo-600 font-medium">Home</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">Courses</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">Instructors</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">About</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">Contact</a>
            </nav>
            
            <div className="hidden md:flex items-center space-x-4">
              <button className="px-4 py-2 text-indigo-600 font-medium hover:text-indigo-800">Log in</button>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Sign up</button>
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="mt-4 md:hidden">
              <div className="flex flex-col space-y-3">
                <a href="#" className="text-gray-900 hover:text-indigo-600 font-medium py-2">Home</a>
                <a href="#" className="text-gray-600 hover:text-indigo-600 py-2">Courses</a>
                <a href="#" className="text-gray-600 hover:text-indigo-600 py-2">Instructors</a>
                <a href="#" className="text-gray-600 hover:text-indigo-600 py-2">About</a>
                <a href="#" className="text-gray-600 hover:text-indigo-600 py-2">Contact</a>
              </div>
              <div className="mt-4 flex space-x-4">
                <button className="px-4 py-2 text-indigo-600 font-medium hover:text-indigo-800">Log in</button>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Sign up</button>
              </div>
            </nav>
          )}
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Expand Your Knowledge with Expert-Led Courses</h1>
            <p className="text-xl mb-8">Learn from industry experts and advance your career with our comprehensive online courses.</p>
            
            <div className="relative max-w-xl mx-auto">
              <input 
                type="text" 
                placeholder="What do you want to learn today?" 
                className="w-full px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <button className="absolute right-2 top-2 bg-indigo-600 p-2 rounded-full hover:bg-indigo-700">
                <Search className="h-6 w-6 text-white" />
              </button>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-indigo-700 bg-opacity-50 px-4 py-2 rounded-full">
                <BookOpen className="h-5 w-5 mr-2" />
                <span>1,200+ Courses</span>
              </div>
              <div className="flex items-center bg-indigo-700 bg-opacity-50 px-4 py-2 rounded-full">
                <Users className="h-5 w-5 mr-2" />
                <span>250+ Instructors</span>
              </div>
              <div className="flex items-center bg-indigo-700 bg-opacity-50 px-4 py-2 rounded-full">
                <Award className="h-5 w-5 mr-2" />
                <span>Certification</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse Top Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore our most popular course categories and find the right path for your learning journey.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <div 
                key={index} 
                className="bg-gray-50 hover:bg-indigo-50 rounded-lg p-6 text-center transition duration-300 cursor-pointer"
                onClick={() => setActiveCategory(category.name)}
              >
                <div className="bg-indigo-100 text-indigo-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-gray-500 text-sm">{category.count} courses</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Courses */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Courses</h2>
              <p className="text-gray-600">Expand your knowledge with our most popular courses</p>
            </div>
            
            <div className="flex space-x-2">
              <button 
                className={`px-4 py-2 rounded-md ${activeCategory === "All" ? "bg-indigo-600 text-white" : "bg-white text-gray-700"}`}
                onClick={() => setActiveCategory("All")}
              >
                All
              </button>
              {categories.slice(0, 3).map((category, index) => (
                <button 
                  key={index}
                  className={`px-4 py-2 rounded-md ${activeCategory === category.name ? "bg-indigo-600 text-white" : "bg-white text-gray-700"}`}
                  onClick={() => setActiveCategory(category.name)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map(course => (
              <div key={course.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-white text-indigo-600 font-bold px-3 py-1 rounded-full text-sm">
                    ${course.price}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs font-medium">{course.level}</span>
                    <span className="mx-2">•</span>
                    <span>{course.category}</span>
                  </div>
                  
                  <h3 className="font-bold text-xl mb-2 text-gray-900">{course.title}</h3>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill={i < Math.floor(course.rating) ? "currentColor" : "none"} />
                      ))}
                    </div>
                    <span className="text-gray-600 text-sm ml-2">{course.rating} ({course.students} students)</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 font-medium">
                        {course.instructor.charAt(0)}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">{course.instructor}</span>
                    </div>
                    
                    <button className="flex items-center text-indigo-600 font-medium text-sm hover:text-indigo-800">
                      <span>View</span>
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 font-medium">
              Browse All Courses
            </button>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How E-learning Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our platform makes it easy to start learning and achieve your goals</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 text-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Find the Right Course</h3>
              <p className="text-gray-600">Browse our extensive library of courses taught by industry experts.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-indigo-100 text-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Play size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Learn at Your Own Pace</h3>
              <p className="text-gray-600">Access course content anytime, anywhere, and learn at your convenience.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-indigo-100 text-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Get Certified</h3>
              <p className="text-gray-600">Earn certificates to showcase your skills and advance your career.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Top Instructors */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Learn from Top Instructors</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our instructors are industry experts passionate about sharing their knowledge</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition duration-300">
                <div className="p-6 text-center">
                  <img 
                    src={instructor.image} 
                    alt={instructor.name} 
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-bold text-xl mb-1 text-gray-900">{instructor.name}</h3>
                  <p className="text-indigo-600 mb-3">{instructor.specialty}</p>
                  
                  <div className="flex justify-center space-x-6 text-gray-600 mb-4">
                    <div>
                      <p className="font-bold text-gray-900">{instructor.courses}</p>
                      <p className="text-sm">Courses</p>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{instructor.students.toLocaleString()}</p>
                      <p className="text-sm">Students</p>
                    </div>
                  </div>
                  
                  <button className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 font-medium">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Students Say</h2>
            <p className="max-w-2xl mx-auto opacity-90">Hear from our students about how EduLearn has helped them achieve their goals</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex items-center text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="mb-6">"The Web Development course was exactly what I needed to transition into tech. The instructor was knowledgeable and the content was comprehensive yet easy to follow."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-800 font-medium">
                  JD
                </div>
                <div className="ml-3">
                  <p className="font-medium">John Doe</p>
                  <p className="text-sm opacity-80">Web Developer</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex items-center text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="mb-6">"I've taken several courses on EduLearn and each one has been exceptional. The platform is user-friendly and the instructors are top-notch. Highly recommend!"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-800 font-medium">
                  AS
                </div>
                <div className="ml-3">
                  <p className="font-medium">Amanda Smith</p>
                  <p className="text-sm opacity-80">Marketing Specialist</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex items-center text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="mb-6">"The Data Science course helped me pivot my career. The practical projects and hands-on approach made complex concepts accessible and applicable to real-world scenarios."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-800 font-medium">
                  RJ
                </div>
                <div className="ml-3">
                  <p className="font-medium">Robert Johnson</p>
                  <p className="text-sm opacity-80">Data Analyst</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of students and start your learning journey today with our expert-led courses.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-3 bg-white text-indigo-600 rounded-md hover:bg-gray-100 font-medium">
                Browse Courses
              </button>
              <button className="px-8 py-3 bg-indigo-500 text-white rounded-md hover:bg-indigo-400 font-medium">
                Sign Up for Free
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 text-indigo-400" />
                <span className="ml-2 text-xl font-bold">E-LEARNING</span>
              </div>
              <p className="text-gray-400 mb-4">Empowering individuals through quality education and accessible learning opportunities.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Courses</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Instructors</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Business</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Design</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Data Science</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Marketing</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates on new courses and promotions.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 rounded-l-md text-gray-800 w-full focus:outline-none"
                />
                <button className="bg-indigo-600 px-4 py-2 rounded-r-md hover:bg-indigo-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 EduLearn. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;