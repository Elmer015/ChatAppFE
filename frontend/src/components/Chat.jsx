import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  MoreVertical, 
  MessageSquarePlus, 
  Smile, 
  Send,
  Check,
  CheckCheck,
  ArrowLeft,
  Settings
} from 'lucide-react';

const INITIAL_CHATS = [
  { id: 1, name: 'Satoshi Nakamoto', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Satoshi', lastMessage: 'The block is mined successfully.', time: '10:42 AM', unread: 2, isOnline: true },
  { id: 2, name: 'Vitalik Buterin', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vitalik', lastMessage: 'Let\'s talk about the new smart contract.', time: 'Yesterday', unread: 0, isOnline: false },
  { id: 3, name: 'Hal Finney', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hal', lastMessage: 'Running bitcoin', time: 'Yesterday', unread: 0, isOnline: false },
  { id: 4, name: 'Ada Lovelace', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ada', lastMessage: 'I reviewed your algorithm.', time: 'Tuesday', unread: 5, isOnline: true },
  { id: 5, name: 'BlockChat Team', avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=BlockChat', lastMessage: 'Welcome to the decentralized chat network!', time: 'Monday', unread: 0, isOnline: true },
];

const DUMMY_MESSAGES = [
  { id: 1, senderId: 2, text: 'Hey! Did you check the latest transaction?', time: '10:30 AM', isMe: false, status: 'read' },
  { id: 2, senderId: 'me', text: 'Yes, it went through perfectly. The encryption works like a charm.', time: '10:32 AM', isMe: true, status: 'read' },
  { id: 3, senderId: 2, text: 'Awesome! Web3 messaging is definitely the future.', time: '10:33 AM', isMe: false, status: 'read' },
  { id: 4, senderId: 'me', text: 'Agreed. Next step is to implement the IPFS sync.', time: '10:40 AM', isMe: true, status: 'sent' },
];

export default function Chat() {
  const [chats, setChats] = useState(INITIAL_CHATS);
  const [activeChat, setActiveChat] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [isMobileListVisible, setIsMobileListVisible] = useState(true);

  // In a real app, you would load messages dynamically based on activeChat.id
  const messages = activeChat ? DUMMY_MESSAGES : []; 

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    console.log("Sending message:", newMessage);
    setNewMessage('');
  };

  const selectChat = (chat) => {
    // Clear unread badge
    const updatedChats = chats.map(c => 
      c.id === chat.id ? { ...c, unread: 0 } : c
    );
    setChats(updatedChats);
    setActiveChat(updatedChats.find(c => c.id === chat.id));
    setIsMobileListVisible(false);
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 overflow-hidden font-sans">
      
      {/* Sidebar - Chat List */}
      <div className={`${isMobileListVisible ? 'flex' : 'hidden'} md:flex flex-col w-full md:w-[380px] lg:w-[420px] bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 z-10 transition-all duration-300`}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-800 h-16 shrink-0">
          <Link to="/profile" className="flex items-center gap-3 cursor-pointer group">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=MyUserAvatar" alt="My Profile" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 object-cover border border-gray-300 dark:border-gray-600 group-hover:ring-2 group-hover:ring-primary-500 transition-all" />
            <span className="font-semibold text-gray-900 dark:text-white hidden lg:block group-hover:text-primary-600 transition-colors">My Account</span>
          </Link>
          <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
            <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" title="New Chat">
              <MessageSquarePlus className="w-5 h-5" />
            </button>
            <Link to="/settings" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors block" title="Settings">
              <Settings className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Search Bar */}
        <div className="p-3 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shrink-0">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search or start new chat"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 border-none rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-shadow"
            />
          </div>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {chats.map((chat) => (
            <div 
              key={chat.id}
              onClick={() => selectChat(chat)}
              className={`flex items-center px-4 py-3 cursor-pointer transition-colors border-b border-gray-100 dark:border-gray-800/50 ${activeChat?.id === chat.id ? 'bg-gray-100 dark:bg-gray-800' : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'}`}
            >
              <div className="relative">
                <img src={chat.avatar} alt={chat.name} className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 object-cover" />
                {chat.isOnline && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-900 rounded-full"></div>
                )}
              </div>
              <div className="ml-4 flex-1 overflow-hidden">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white truncate">{chat.name}</h3>
                  <span className={`text-xs whitespace-nowrap ${chat.unread > 0 ? 'text-primary-600 dark:text-primary-400 font-bold' : 'text-gray-500 dark:text-gray-400'}`}>
                    {chat.time}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400 truncate pr-2">
                    {chat.lastMessage}
                  </p>
                  {chat.unread > 0 && (
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-500 flex items-center justify-center transition-all duration-300 transform scale-100">
                      <span className="text-[10px] font-bold text-white">{chat.unread}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className={`${!isMobileListVisible ? 'flex' : 'hidden'} md:flex flex-col flex-1 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] dark:bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] relative`}>
        <div className="absolute inset-0 bg-white/90 dark:bg-gray-900/90 mix-blend-overlay pointer-events-none z-0"></div>

        {activeChat ? (
          <>
            {/* Chat Header */}
            <div className="relative z-10 flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-800 h-16 shrink-0 shadow-sm">
              <div className="flex items-center gap-3">
                <button 
                  className="md:hidden p-2 -ml-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                  onClick={() => setIsMobileListVisible(true)}
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <div className="relative cursor-pointer">
                  <img src={activeChat.avatar} alt={activeChat.name} className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 object-cover" />
                  {activeChat.isOnline && (
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></div>
                  )}
                </div>
                <div className="flex flex-col cursor-pointer">
                  <h2 className="font-semibold text-gray-900 dark:text-white leading-tight">{activeChat.name}</h2>
                  <span className="text-xs text-green-600 dark:text-green-400">{activeChat.isOnline ? 'Online' : 'offline'}</span>
                </div>
              </div>

              <div className="flex items-center gap-1 sm:gap-3 text-gray-500 dark:text-gray-400">
                <button className="hidden sm:block p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <Search className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="relative z-10 flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              <div className="flex justify-center mb-6">
                <span className="px-3 py-1 bg-gray-200/50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 text-xs font-medium rounded-lg backdrop-blur-sm shadow-sm border border-gray-300/30 dark:border-gray-700/30">
                  TODAY
                </span>
              </div>

              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`max-w-[75%] sm:max-w-[65%] rounded-2xl px-4 py-2.5 shadow-sm relative group
                      ${msg.isMe 
                        ? 'bg-gradient-to-br from-primary-500 to-secondary-500 text-white rounded-tr-sm' 
                        : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-100 dark:border-gray-700 rounded-tl-sm'
                      }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                    <div className={`flex items-center justify-end gap-1 mt-1 ${msg.isMe ? 'text-primary-100' : 'text-gray-400'} text-[10px]`}>
                      <span>{msg.time}</span>
                      {msg.isMe && (
                        msg.status === 'read' ? <CheckCheck className="w-3.5 h-3.5 text-blue-200" /> : <Check className="w-3.5 h-3.5" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area (Text Only) */}
            <div className="relative z-10 p-3 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shrink-0">
              <form onSubmit={handleSendMessage} className="flex items-end gap-2 max-w-5xl mx-auto">
                <button type="button" className="p-2.5 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors flex-shrink-0">
                  <Smile className="w-6 h-6" />
                </button>
                
                <div className="flex-1 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-2xl flex items-center overflow-hidden focus-within:ring-2 focus-within:ring-primary-500/50 focus-within:border-primary-500 transition-all shadow-sm">
                  <textarea
                    rows={1}
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage(e);
                      }
                    }}
                    className="w-full max-h-32 px-4 py-3 bg-transparent border-none text-sm focus:outline-none dark:text-white resize-none custom-scrollbar"
                    style={{ minHeight: '44px' }}
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={!newMessage.trim()}
                  className={`p-3 rounded-full transition-colors shadow-md flex-shrink-0 ${
                    newMessage.trim() 
                      ? 'bg-primary-500 hover:bg-primary-600 text-white shadow-primary-500/30' 
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-400'
                  }`}
                >
                  <Send className={`w-5 h-5 ${newMessage.trim() ? 'ml-0.5' : ''}`} />
                </button>
              </form>
            </div>
          </>
        ) : (
          /* Empty State */
          <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-8 text-center bg-gray-50/50 dark:bg-gray-900/50">
            <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full mb-6 relative">
               <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-lg shadow-primary-500/30">
                 <span className="text-white font-bold text-3xl">B</span>
               </div>
               {/* Decorative elements representing unread message clearing */}
               <div className="absolute top-0 right-0 w-6 h-6 bg-red-500 rounded-full shadow border-2 border-white dark:border-gray-900 flex items-center justify-center animate-bounce">
                 <span className="text-[10px] font-bold text-white text-center w-full block">3</span>
               </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">BlockChat Web</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-md">
              Send and receive purely text-based messages. Click any chat to read. 
            </p>
            <div className="mt-8 flex items-center gap-2 text-sm text-gray-400">
               <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
               </svg>
               End-to-end encrypted text
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
