export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="About AI School"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-cyan-500 rounded-full opacity-20 blur-3xl"></div>
          </div>

          <div className="space-y-6">
            <div>
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                About Us
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Empowering Dubai with{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                AI Excellence
              </span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              AI School by Inc Academy Dubai is a KHDA-approved training institute dedicated to
              transforming professionals into AI experts. We combine world-class curriculum with
              hands-on experience to deliver unmatched learning outcomes.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Our mission is to make AI education accessible, practical, and career-focused. Whether
              you're starting your AI journey or advancing your skills, we provide the guidance,
              resources, and community support you need to succeed.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-2">🎓</div>
                <div className="text-2xl font-bold text-gray-900 mb-1">Expert Instructors</div>
                <div className="text-gray-600">Industry professionals with 10+ years experience</div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-2">💼</div>
                <div className="text-2xl font-bold text-gray-900 mb-1">Career Support</div>
                <div className="text-gray-600">Job placement assistance and networking</div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-2">🚀</div>
                <div className="text-2xl font-bold text-gray-900 mb-1">Practical Projects</div>
                <div className="text-gray-600">Build real-world AI applications</div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-2">🏆</div>
                <div className="text-2xl font-bold text-gray-900 mb-1">Certification</div>
                <div className="text-gray-600">KHDA-approved certificates</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
