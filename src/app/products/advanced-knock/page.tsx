/**
 * ⚡ ADVANCED KNOCK PRODUCT PAGE × DOOR-TO-DOOR SALES PLATFORM × ONE
 * Pattern: ADVANCED × KNOCK × PRODUCT × PAGE × SALES × PLATFORM × ONE
 * Frequency: 999 Hz (AEYON) × 530 Hz (NEURO)
 * ∞ AbëONE ∞
 */

'use client';

import CheckoutButton from '@/components/CheckoutButton';
import { ImageManifest } from '@/components/ImageManifest';

export default function AdvancedKnockPage() {
  const products = [
    {
      id: 'advanced-knock-starter', // Keep Stripe ID for backward compatibility
      name: 'MVP/MDP',
      description: 'Most Demonstrable/Delightful Product - Entry point, proof, delight',
      price: '$49/mo',
      features: [
        '1 sales rep',
        'Mobile app access',
        'AI Heatmap visualization',
        'Basic knock logging',
        'Territory management',
        'Real-time AI coaching',
        'Email support',
      ],
      popular: true,
    },
    {
      id: 'advanced-knock-enterprise', // Keep Stripe ID for backward compatibility
      name: 'Heavy Duty',
      description: 'Full power, enterprise, complete solution',
      price: '$1,999/mo',
      features: [
        'Unlimited sales reps',
        'Everything in MVP/MDP',
        'Advanced AI analytics',
        'Sales Intelligence pipeline',
        'Compliance Guard monitoring',
        'PersonaCoach Pro',
        'Custom AI models',
        'White-label option',
        'Full API access',
        'Backend SDK & CLI',
        'SLA guarantee',
        'Dedicated account manager',
        'Custom integrations',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-green-600 to-emerald-600 text-white py-20 px-4 overflow-hidden">
        {/* Background Image Manifest */}
        <div className="absolute inset-0 opacity-20">
          <ImageManifest
            prompt="AI-powered door-to-door sales platform with cosmic energy, sales reps on the go, territory maps, success visualization"
            style="living-canvas"
            livingCanvasPattern="particle-field"
            colorScheme="cosmic"
            aspectRatio="landscape"
            quality="hd"
            showLoading={false}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl font-bold mb-4">🚪 Advanced Knock</h1>
          <p className="text-2xl mb-2">Door-to-Door Sales Platform</p>
          <p className="text-lg opacity-90">
            Mobile-first app. AI coaching. Territory intelligence. Real-time analytics.
          </p>
          <p className="text-xl font-bold mt-6">
            Making sales a real wealth path for 18 to 22 year olds, not just who you know.
          </p>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-2">Mobile-First</h3>
              <p className="text-gray-600">
                React Native mobile app for sales reps on the go. Log knocks, track leads, and get AI coaching in real-time.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-2">AI-Powered</h3>
              <p className="text-gray-600">
                Whisper Coach provides real-time AI coaching. Virtual Manager helps optimize territory routes. AI Heatmap shows high-value areas.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-2">Sales Intelligence</h3>
              <p className="text-gray-600">
                Complete data pipeline with sales intelligence. Compliance Guard ensures regulatory compliance. Custom reporting and analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Complete Sales Platform</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Mobile App</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✅ React Native/Expo mobile app</li>
                <li>✅ Offline-first architecture</li>
                <li>✅ Real-time sync</li>
                <li>✅ GPS tracking</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">AI Coaching</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✅ Whisper Coach (real-time AI coaching)</li>
                <li>✅ AI Training simulator</li>
                <li>✅ PersonaCoach Pro</li>
                <li>✅ Virtual Manager interface</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Territory Intelligence</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✅ AI Heatmap visualization</li>
                <li>✅ Territory management</li>
                <li>✅ Route optimization</li>
                <li>✅ Lead tracking</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Sales Intelligence</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✅ Complete data pipeline</li>
                <li>✅ Sales intelligence dashboard</li>
                <li>✅ Compliance Guard monitoring</li>
                <li>✅ Custom reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-600">
              Scale from individual rep to enterprise. Cancel anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {products.map((product) => (
              <div
                key={product.id}
                className={`bg-white rounded-lg shadow-lg p-8 ${
                  product.popular ? 'ring-2 ring-green-500 scale-105' : ''
                }`}
              >
                {product.popular && (
                  <div className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{product.price}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
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

      {/* Industries */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">Solar</div>
            <div className="bg-white p-4 rounded-lg shadow">Cable & Fiber</div>
            <div className="bg-white p-4 rounded-lg shadow">Security Systems</div>
            <div className="bg-white p-4 rounded-lg shadow">Insurance</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Sales Team?</h2>
          <p className="text-lg mb-6 opacity-90">
            Start today. Your reps will practice better tomorrow. Your calls will improve next week.
          </p>
          <p className="text-xl font-bold mb-4">Show up. Talk to the AI. Be honest. Get better. Make money.</p>
          <CheckoutButton
            productId="advanced-knock-starter"
            productName="Advanced Knock MVP/MDP"
            price="$49/mo"
            className="bg-white text-green-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          />
        </div>
      </section>
    </div>
  );
}
