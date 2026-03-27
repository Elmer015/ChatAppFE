import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Bell, Lock, Eye, Globe, LogOut } from 'lucide-react';

export default function Settings() {
  return (
    <div className="min-h-screen bg-[#e7e3f4] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link to="/chat" className="p-2 -ml-2 text-[#6e6093] hover:bg-[#d8cfee] rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-3xl font-bold text-[#23114b]">Settings</h1>
        </div>

        {/* Settings Groups */}
        <div className="space-y-6">
          
          {/* Appearance & Language */}
          <div className="bg-[#f6f3ff] rounded-2xl shadow-sm border border-[#d8cfee] overflow-hidden">
            <h2 className="px-6 py-4 text-sm font-bold text-[#5c4a88] uppercase tracking-wider border-b border-[#e0d7f2]">
              Preferences
            </h2>
            <div className="divide-y divide-[#e0d7f2]">
              <button className="w-full flex items-center justify-between px-6 py-4 hover:bg-[#efe9ff] transition-colors text-left">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-[#75669e]" />
                  <span className="font-medium text-[#23114b]">Language</span>
                </div>
                <span className="text-sm text-[#75669e]">English (US)</span>
              </button>
            </div>
          </div>

          {/* Privacy & Security */}
          <div className="bg-[#f6f3ff] rounded-2xl shadow-sm border border-[#d8cfee] overflow-hidden">
            <h2 className="px-6 py-4 text-sm font-bold text-[#5c4a88] uppercase tracking-wider border-b border-[#e0d7f2]">
              Privacy & Security
            </h2>
            <div className="divide-y divide-[#e0d7f2]">
              <button className="w-full flex items-center justify-between px-6 py-4 hover:bg-[#efe9ff] transition-colors text-left">
                <div className="flex items-center gap-3">
                  <Lock className="w-5 h-5 text-[#75669e]" />
                  <span className="font-medium text-[#23114b]">Two-Factor Authentication</span>
                </div>
                <span className="text-sm font-medium text-green-600">Enabled</span>
              </button>
              <button className="w-full flex items-center justify-between px-6 py-4 hover:bg-[#efe9ff] transition-colors text-left">
                <div className="flex items-center gap-3">
                  <Eye className="w-5 h-5 text-[#75669e]" />
                  <span className="font-medium text-[#23114b]">Last Seen & Online</span>
                </div>
                <span className="text-sm text-[#75669e]">Nobody</span>
              </button>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-[#f6f3ff] rounded-2xl shadow-sm border border-[#d8cfee] overflow-hidden">
            <h2 className="px-6 py-4 text-sm font-bold text-[#5c4a88] uppercase tracking-wider border-b border-[#e0d7f2]">
              Notifications
            </h2>
            <div className="divide-y divide-[#e0d7f2]">
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#efe9ff] transition-colors text-left">
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5 text-[#75669e]" />
                  <span className="font-medium text-[#23114b]">Push Notifications</span>
                </div>
                 {/* Toggle Switch */}
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-[#dad2ef] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-[#c8bedf] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#b7d62e]"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="pt-4">
            <Link to="/" className="w-full flex items-center justify-center gap-2 py-4 px-4 bg-[#f6f3ff] border border-red-200 text-red-600 hover:bg-red-50 rounded-2xl font-semibold transition-colors shadow-sm">
              <LogOut className="w-5 h-5" />
              Log Out
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
