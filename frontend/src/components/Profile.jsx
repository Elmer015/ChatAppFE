import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, User, Mail, Shield, Key, Edit2 } from 'lucide-react';
import { STORAGE_KEYS } from '../data/mockData';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState(() => {
    const currentUser = JSON.parse(localStorage.getItem(STORAGE_KEYS.currentUser) || 'null');
    return {
      username: currentUser?.username || 'satoshi_nakamoto',
      email: currentUser?.email || 'satoshi@bitcoin.org',
      avatar: currentUser?.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=MyUserAvatar',
    };
  });

  const handleSave = () => {
    setIsEditing(false);
    localStorage.setItem(STORAGE_KEYS.currentUser, JSON.stringify(profileData));
  };

  return (
    <div className="min-h-screen bg-[#e7e3f4] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/chat" className="p-2 -ml-2 text-[#6e6093] hover:bg-[#d8cfee] rounded-full transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h1 className="text-3xl font-bold text-[#23114b]">Profile</h1>
          </div>
          <button 
            onClick={() => {
              if (isEditing) {
                handleSave();
              } else {
                setIsEditing(true);
              }
            }}
            className="flex items-center gap-2 px-4 py-2 bg-[#f6f3ff] border border-[#d8cfee] rounded-xl hover:bg-[#efe9ff] transition-colors shadow-sm text-sm font-medium text-[#4c3f73]"
          >
            <Edit2 className="w-4 h-4" />
            {isEditing ? 'Save Changes' : 'Edit Profile'}
          </button>
        </div>

        {/* Main Content */}
        <div className="bg-[#f6f3ff] rounded-2xl shadow-sm border border-[#d8cfee] overflow-hidden">
          
          {/* Cover Photo & Avatar */}
          <div className="h-48 bg-gradient-to-r from-[#7b64ba] to-[#9b84de] relative">
            <div className="absolute -bottom-16 left-8">
              <div className="relative">
                <img 
                  src={profileData.avatar}
                  alt="Avatar" 
                  className="w-32 h-32 rounded-full border-4 border-white bg-white object-cover"
                />
                {isEditing && (
                  <button className="absolute bottom-0 right-0 p-2 bg-[#23114b] text-white rounded-full hover:bg-[#3a236f] transition">
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
                <label className="block text-sm font-medium text-[#75669e] mb-2">
                  Username
                </label>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#ede7ff] text-[#6b57a4] rounded-lg">
                    <User className="w-5 h-5" />
                  </div>
                  {isEditing ? (
                    <input 
                      type="text" 
                      value={profileData.username}
                      onChange={(e) => setProfileData((prev) => ({ ...prev, username: e.target.value }))}
                      className="flex-1 bg-white border border-[#d8cfee] rounded-xl px-4 py-2 focus:ring-2 focus:ring-[#b7d62e] focus:outline-none text-[#23114b]"
                    />
                  ) : (
                    <span className="text-lg font-semibold text-[#23114b]">{profileData.username}</span>
                  )}
                </div>
              </div>

               {/* Email Field */}
               <div>
                <label className="block text-sm font-medium text-[#75669e] mb-2">
                  Email Address
                </label>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#ede7ff] text-[#6b57a4] rounded-lg">
                    <Mail className="w-5 h-5" />
                  </div>
                  {isEditing ? (
                    <input 
                      type="email" 
                      value={profileData.email}
                      onChange={(e) => setProfileData((prev) => ({ ...prev, email: e.target.value }))}
                      className="flex-1 bg-white border border-[#d8cfee] rounded-xl px-4 py-2 focus:ring-2 focus:ring-[#b7d62e] focus:outline-none text-[#23114b]"
                    />
                  ) : (
                    <span className="text-lg font-medium text-[#23114b]">{profileData.email}</span>
                  )}
                </div>
              </div>

              {/* Security Metrics */}
              <div className="pt-6 mt-6 border-t border-[#e0d7f2] grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 rounded-xl border border-green-100 flex items-center gap-4">
                  <div className="p-3 bg-green-100 text-green-600 rounded-full">
                     <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-green-900">End-to-End Encryption</h4>
                    <p className="text-xs text-green-700">Active and secured</p>
                  </div>
                </div>

                <div className="p-4 bg-[#eee8ff] rounded-xl border border-[#ddd4f2] flex items-center gap-4 cursor-pointer hover:bg-[#e7deff] transition-colors">
                  <div className="p-3 bg-white text-[#6c5c97] rounded-full shadow-sm">
                     <Key className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#23114b]">Change Password</h4>
                    <p className="text-xs text-[#75669e]">Last changed 3 months ago</p>
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
