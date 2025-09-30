export default function Benefits() {
  const benefits = [
    {
      icon: '🎯',
      title: 'Career Advancement',
      description: 'Position yourself at the forefront of AI innovation with skills that are in high demand across industries.'
    },
    {
      icon: '👥',
      title: 'Expert Mentorship',
      description: 'Learn directly from AI professionals working at leading tech companies and startups in Dubai.'
    },
    {
      icon: '🔧',
      title: 'Hands-On Learning',
      description: 'Work on real-world projects and build a portfolio that showcases your AI capabilities to employers.'
    },
    {
      icon: '🌐',
      title: 'Networking Opportunities',
      description: 'Connect with fellow AI enthusiasts, industry leaders, and potential employers in our vibrant community.'
    },
    {
      icon: '⚡',
      title: 'Flexible Learning',
      description: 'Choose from weekday or weekend batches, with both online and in-person options available.'
    },
    {
      icon: '📊',
      title: 'Industry Recognition',
      description: 'Earn KHDA-approved certifications that are recognized by employers across the UAE and globally.'
    }
  ];

  return (
    <section id="benefits" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              AI School
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of professionals who have transformed their careers through our
            comprehensive AI training programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your AI Journey?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Join our next batch and take the first step towards becoming an AI expert.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}
