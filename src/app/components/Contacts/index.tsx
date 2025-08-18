"use client";

import { Mail, MapPin, PhoneCall, Heart, Shield, Globe, Target } from "lucide-react";
import { useState } from "react";

interface DonationAmount {
  amount: number;
  impact: string;
}

const Contacts = () => {
  const [selectedDonation, setSelectedDonation] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');

  const donationAmounts: DonationAmount[] = [
    { amount: 25, impact: "Provides school supplies for 2 children" },
    { amount: 50, impact: "Supports beadmaking materials for 5 women" },
    { amount: 100, impact: "Funds agricultural training for 1 family" },
    { amount: 250, impact: "Sponsors cultural preservation workshop" },
    { amount: 500, impact: "Establishes micro-business for community member" },
    { amount: 1000, impact: "Supports comprehensive youth skills program" }
  ];

  const handleDonationSelect = (amount: number) => {
    setSelectedDonation(amount);
    setCustomAmount('');
  };

  const handleCustomAmount = (value: string) => {
    setCustomAmount(value);
    setSelectedDonation(null);
  };

  const handleDonate = () => {
    const donationAmount = selectedDonation || parseFloat(customAmount);
    if (donationAmount && donationAmount > 0) {
      const paypalUrl = `https://www.paypal.com/donate?business=jlorika@gmail.com&amount=${donationAmount}&currency_code=USD`;
      window.location.href = paypalUrl;
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Involved</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us in transforming communities. Whether you want to donate, volunteer, or partner with us, 
            we&apos;re here to make it happen together.
          </p>
        </div>

        {/* Quick Contact Info Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <PhoneCall className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
            <a href="tel:+256768660867" className="text-gray-600 hover:text-emerald-600 transition-colors">
              +256 768 660867
            </a>
            <p className="text-sm text-gray-500 mt-1">Mon-Fri 8AM-6PM EAT</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
            <a href="mailto:jlorika@gmail.com" className="text-gray-600 hover:text-emerald-600 transition-colors">
              jlorika@gmail.com
            </a>
            <p className="text-sm text-gray-500 mt-1">Response within 24hrs</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
            <p className="text-gray-600">Nakale, Karamoja</p>
            <p className="text-sm text-gray-500 mt-1">Uganda, East Africa</p>
          </div>
        </div>

        <div className="grid grid-cols-1">
          {/* Donations Section */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <Heart className="w-5 h-5 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Make a Donation</h3>
            </div>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Your support directly impacts lives in Nakale. Every donation helps us continue our mission 
              of empowering communities through education, cultural preservation, and sustainable development.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-xs font-medium text-gray-700">Secure</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-xs font-medium text-gray-700">Transparent</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <p className="text-xs font-medium text-gray-700">Impactful</p>
              </div>
            </div>

            {/* Donation Amounts */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {donationAmounts.map((donation) => (
                <button
                  key={donation.amount}
                  onClick={() => handleDonationSelect(donation.amount)}
                  className={`p-4 rounded-xl border-2 text-left transition-all duration-200 hover:shadow-md ${
                    selectedDonation === donation.amount
                      ? 'border-emerald-500 bg-emerald-50'
                      : 'border-gray-200 hover:border-emerald-300'
                  }`}
                >
                  <div className="font-bold text-lg text-gray-900 mb-1">
                    ${donation.amount}
                  </div>
                  <div className="text-xs text-gray-600 leading-tight">
                    {donation.impact}
                  </div>
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Or enter a custom amount
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">$</span>
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => handleCustomAmount(e.target.value)}
                  placeholder="0.00"
                  min="1"
                  step="0.01"
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                />
              </div>
            </div>

            {/* Donate Button */}
            <button
              onClick={handleDonate}
              disabled={!selectedDonation && !customAmount}
              className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="flex items-center justify-center">
                <Heart className="w-5 h-5 mr-2" />
                Donate Now
              </div>
            </button>

            {/* Footer Note */}
            <div className="mt-6 p-4 bg-gray-50 rounded-xl">
              <div className="flex items-start space-x-2">
                <p className="text-xs text-gray-600 leading-relaxed">
                  Your donation is processed securely through PayPal. You&apos;ll receive a confirmation email with your receipt 
                  and updates on how your contribution is making a difference.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Other Ways to Support</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Volunteer</h4>
              <p className="text-emerald-100 text-sm">Join our on-ground programs and make a direct impact in communities.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Corporate Partnership</h4>
              <p className="text-emerald-100 text-sm">Partner with us for sustainable community development initiatives.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Spread the Word</h4>
              <p className="text-emerald-100 text-sm">Share our mission with your network and help us reach more supporters.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;