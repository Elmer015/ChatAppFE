import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Bell, Lock, Eye, Monitor, Globe, LogOut } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Settings() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link to="/chat" className="p-2 -ml-2 text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Settings</h1>
        </div>

        {/* Settings Groups */}
        <div className="space-y-6">
          
          {/* Appearance & Language */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
            <h2 className="px-6 py-4 text-sm font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wider border-b border-gray-100 dark:border-gray-700/50">
              Preferences
            </h2>
            <div className="divide-y divide-gray-100 dark:divide-gray-700/50">
              <div className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <div className="flex items-center gap-3">
                  <Monitor className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <span className="font-medium text-gray-900 dark:text-white">Theme</span>
                </div>
                <ThemeToggle />
              </div>
              <button className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors text-left">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <span className="font-medium text-gray-900 dark:text-white">Language</span>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">English (US)</span>
              </button>
            </div>
          </div>

          {/* Privacy & Security */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
            <h2 className="px-6 py-4 text-sm font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wider border-b border-gray-100 dark:border-gray-700/50">
              Privacy & Security
            </h2>
            <div className="divide-y divide-gray-100 dark:divide-gray-700/50">
              <button className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors text-left">
                <div className="flex items-center gap-3">
                  <Lock className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <span className="font-medium text-gray-900 dark:text-white">Two-Factor Authentication</span>
                </div>
                <span className="text-sm font-medium text-green-600 dark:text-green-400">Enabled</span>
              </button>
              <button className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors text-left">
                <div className="flex items-center gap-3">
                  <Eye className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <span className="font-medium text-gray-900 dark:text-white">Last Seen & Online</span>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Nobody</span>
              </button>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
            <h2 className="px-6 py-4 text-sm font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wider border-b border-gray-100 dark:border-gray-700/50">
              Notifications
            </h2>
            <div className="divide-y divide-gray-100 dark:divide-gray-700/50">
              <div className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors text-left">
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <span className="font-medium text-gray-900 dark:text-white">Push Notifications</span>
                </div>
                 {/* Toggle Switch */}
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-500"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="pt-4">
            <Link to="/" className="w-full flex items-center justify-center gap-2 py-4 px-4 bg-white dark:bg-gray-800 border border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-2xl font-semibold transition-colors shadow-sm">
              <LogOut className="w-5 h-5" />
              Log Out
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
