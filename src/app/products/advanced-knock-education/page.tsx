/**
 * ⚡ ADVANCED KNOCK EDUCATION PRODUCT PAGE × ONE
 * Pattern: ADVANCED × KNOCK × EDUCATION × PRODUCT × PAGE × ONE
 * Frequency: 999 Hz (AEYON) × 530 Hz (ALL GUARDIANS)
 * ∞ AbëONE ∞
 */

'use client';

import CheckoutButton from '@/components/CheckoutButton';

export default function AdvancedKnockEducationPage() {
  const products = [
    {
      id: 'advanced-knock-kids-ai',
      name: 'Kids AI Academy',
      description: 'Age-appropriate AI lessons and projects for kids',
      price: '$10/mo',
      features: [
        'Weekly lessons',
        'Age-appropriate projects',
        'Progress tracking',
        'Parent dashboard',
        'Safe learning environment',
      ],
    },
    {
      id: 'advanced-knock-women-ai',
      name: 'Women in AI Community',
      description: 'Courses, community, and mentorship for women learning AI',
      price: '$20/mo',
      features: [
        'Courses',
        'Community access',
        'Mentorship matching',
        'Weekly events',
        'Career guidance',
      ],
      popular: true,
    },
    {
      id: 'advanced-knock-ai-tools',
      name: 'AI Tools Library',
      description: 'Curated AI tools, tutorials, and templates for entrepreneurs',
      price: '$15/mo',
      features: [
        'Tool library',
        'Tutorials',
        'Templates',
        'Weekly updates',
        'Expert reviews',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Advanced Knock Education</h1>
          <p className="text-2xl mb-2">AI Education for Everyone</p>
          <p className="text-lg opacity-90 mb-8">
            Making AI accessible through age-appropriate learning, community, and tools
          </p>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">👶</div>
              <h3 className="text-xl font-bold mb-2">Kids AI Academy</h3>
              <p className="text-gray-600">
                Age-appropriate AI lessons that spark curiosity and build foundational skills
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">👩</div>
              <h3 className="text-xl font-bold mb-2">Women in AI</h3>
              <p className="text-gray-600">
                Community, courses, and mentorship to support women in AI careers
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold mb-2">AI Tools Library</h3>
              <p className="text-gray-600">
                Curated tools, tutorials, and templates for entrepreneurs building with AI
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Choose Your Learning Path</h2>
            <p className="text-xl text-gray-600">
              Start learning today. Cancel anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className={`bg-white rounded-2xl shadow-lg p-8 border-2 ${
                  product.popular
                    ? 'border-green-500 scale-105'
                    : 'border-gray-200'
                }`}
              >
                {product.popular && (
                  <div className="bg-green-500 text-white text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <div className="text-4xl font-bold mb-6">{product.price}</div>
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <CheckoutButton
                  productId={product.id}
                  productName={product.name}
                  price={product.price}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
