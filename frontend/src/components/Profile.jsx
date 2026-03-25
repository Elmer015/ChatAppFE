import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, User, Mail, Shield, Key, Edit2 } from 'lucide-react';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/chat" className="p-2 -ml-2 text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Profile</h1>
          </div>
          <button 
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            <Edit2 className="w-4 h-4" />
            {isEditing ? 'Save Changes' : 'Edit Profile'}
          </button>
        </div>

        {/* Main Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
          
          {/* Cover Photo & Avatar */}
          <div className="h-48 bg-gradient-to-r from-primary-500 to-secondary-500 relative">
            <div className="absolute -bottom-16 left-8">
              <div className="relative">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=MyUserAvatar" 
                  alt="Avatar" 
                  className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 bg-white dark:bg-gray-800 object-cover"
                />
                {isEditing && (
                  <button className="absolute bottom-0 right-0 p-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition">
                    <Edit2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="pt-20 px-8 pb-8">
            <div className="space-y-6">
              
              {/* Username Field */}
              <div>
                <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                  Username
                </label>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded-lg">
                    <User className="w-5 h-5" />
                  </div>
                  {isEditing ? (
                    <input 
                      type="text" 
                      defaultValue="satoshi_nakamoto" 
                      className="flex-1 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:outline-none dark:text-white"
                    />
                  ) : (
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">satoshi_nakamoto</span>
                  )}
                </div>
              </div>

               {/* Email Field */}
               <div>
                <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                  Email Address
                </label>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded-lg">
                    <Mail className="w-5 h-5" />
                  </div>
                  {isEditing ? (
                    <input 
                      type="email" 
                      defaultValue="satoshi@bitcoin.org" 
                      className="flex-1 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:outline-none dark:text-white"
                    />
                  ) : (
                    <span className="text-lg font-medium text-gray-900 dark:text-white">satoshi@bitcoin.org</span>
                  )}
                </div>
              </div>

              {/* Security Metrics */}
              <div className="pt-6 mt-6 border-t border-gray-100 dark:border-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-100 dark:border-green-800/50 flex items-center gap-4">
                  <div className="p-3 bg-green-100 dark:bg-green-800/50 text-green-600 dark:text-green-400 rounded-full">
                     <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-green-900 dark:text-green-100">End-to-End Encryption</h4>
                    <p className="text-xs text-green-700 dark:text-green-300">Active and secured</p>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700 flex items-center gap-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <div className="p-3 bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full shadow-sm">
                     <Key className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white">Change Password</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Last changed 3 months ago</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
