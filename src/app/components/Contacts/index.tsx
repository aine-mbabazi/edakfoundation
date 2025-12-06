"use client";

import { Mail, MapPin, PhoneCall, Heart, Shield, Globe, ExternalLink } from "lucide-react";
import { useState } from "react";
import dynamic from 'next/dynamic';

// Dynamically import the map to avoid SSR issues
const Map = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-64 bg-gray-200 animate-pulse rounded-xl flex items-center justify-center">
      <div className="text-gray-500">Loading map...</div>
    </div>
  )
});

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

  // Coordinates for Nakale, Karamoja, Uganda
  const nakaleCoords = {
    lat: 3.5307, // Approximate coordinates for Nakale, Karamoja
    lng: 34.1553
  };

  const googleMapsUrl = `https://www.google.com/maps?q=${nakaleCoords.lat},${nakaleCoords.lng}`;
  const openStreetMapUrl = `https://www.openstreetmap.org/?mlat=${nakaleCoords.lat}&mlon=${nakaleCoords.lng}#map=15/${nakaleCoords.lat}/${nakaleCoords.lng}`;

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

        {/* Contact Cards with Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Information Cards */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <PhoneCall className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <a href="tel:+256768660867" className="text-gray-600 hover:text-emerald-600 transition-colors text-lg font-medium">
                +256 768 660867
              </a>
              <p className="text-sm text-gray-500 mt-1">Mon-Fri 8AM-6PM EAT</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
              <a href="mailto:jlorika@gmail.com" className="text-gray-600 hover:text-emerald-600 transition-colors text-lg font-medium">
                jlorika@gmail.com
              </a>
              <p className="text-sm text-gray-500 mt-1">Response within 24hrs</p>
            </div>
          </div>

          {/* Visit Us Section with Map */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Visit Us</h3>
                  <p className="text-gray-600">Nakale, Karamoja, Uganda</p>
                </div>
              </div>

              {/* Live Map */}
              <div className="mb-4">
                <div className="h-64 rounded-xl overflow-hidden border border-gray-200">
                  <Map lat={nakaleCoords.lat} lng={nakaleCoords.lng} />
                </div>
              </div>

              {/* Directions Links */}
              <div className="space-y-3">
                <p className="text-gray-600 text-sm">
                  Located in the heart of Karamoja region, Nakale is home to the Edward Athiyo Foundation&apos;s community development programs.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                  
                  <a
                    href={openStreetMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <span>View on OpenStreetMap</span>
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>

                {/* Address Details */}
                {/* <div className="bg-gray-50 rounded-lg p-4 mt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Physical Address:</h4>
                  <p className="text-gray-700">
                    Edward Athiyo Foundation<br />
                    Nakale Village<br />
                    Karamoja Region<br />
                    Uganda, East Africa
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    *Visits by appointment only. Please contact us before visiting.
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Donations Section */}
        <div className="grid grid-cols-1">
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

            {/* Donation Methods */}
            <div className="space-y-6">
              {/* Bank Transfer Option */}
              <div className="border-2 border-emerald-200 rounded-2xl p-6 bg-emerald-50">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-5 h-5 text-emerald-600 mr-2" />
                  Bank Transfer 
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* ABSA Uganda */}
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-center mb-3">
                      <Globe className="w-4 h-4 text-emerald-600 mr-2" />
                      <h5 className="font-semibold text-gray-900">ABSA Bank Uganda</h5>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Branch:</span>
                        <span className="font-medium text-gray-900">Acacia Mall, Kampala</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Account Number:</span>
                        <span className="font-medium text-gray-900">6008938790</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Currency:</span>
                        <span className="font-medium text-gray-900">UGX</span>
                      </div>
                    </div>
                  </div>

                  {/* ABSA Kenya */}
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-center mb-3">
                      <Globe className="w-4 h-4 text-emerald-600 mr-2" />
                      <h5 className="font-semibold text-gray-900">ABSA Bank Kenya</h5>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Branch:</span>
                        <span className="font-medium text-gray-900">Lavington</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Account Number:</span>
                        <span className="font-medium text-gray-900">2042568425</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Currency:</span>
                        <span className="font-medium text-gray-900">USD</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-gray-600 mt-4 text-center">
                  Please email us at <a href="mailto:jlorika@gmail.com" className="text-emerald-600 hover:underline">jlorika@gmail.com</a> after making your transfer with your name and transaction reference.
                </p>
              </div>
            </div>

            {/* Footer Note */}
            <div className="mt-6 p-4 bg-gray-50 rounded-xl">
              <div className="flex items-start space-x-2">
                <Shield className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-gray-600 leading-relaxed">
                  All donations are secure and go directly to supporting our programs in Nakale. 
                  You&apos;ll receive updates on how your contribution is making a difference in the community.
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