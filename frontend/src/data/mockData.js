export const STORAGE_KEYS = {
  users: 'blockchat_users',
  currentUser: 'blockchat_current_user',
};

export const DUMMY_USERS = [
  {
    id: 'u1',
    username: 'satoshi_nakamoto',
    email: 'satoshi@bitcoin.org',
    password: '12345678',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SatoshiUser',
  },
  {
    id: 'u2',
    username: 'vitalik',
    email: 'vitalik@ethereum.org',
    password: '12345678',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=VitalikUser',
  },
];

export const DUMMY_CHATS = [
  {
    id: 1,
    name: 'Satoshi Nakamoto',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Satoshi',
    lastMessage: 'The block is mined successfully.',
    time: '10:42 AM',
    unread: 2,
    isOnline: true,
  },
  {
    id: 2,
    name: 'Vitalik Buterin',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vitalik',
    lastMessage: "Let's talk about the new smart contract.",
    time: 'Yesterday',
    unread: 0,
    isOnline: false,
  },
  {
    id: 3,
    name: 'Hal Finney',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hal',
    lastMessage: 'Running bitcoin',
    time: 'Yesterday',
    unread: 0,
    isOnline: false,
  },
  {
    id: 4,
    name: 'Ada Lovelace',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ada',
    lastMessage: 'I reviewed your algorithm.',
    time: 'Tuesday',
    unread: 5,
    isOnline: true,
  },
  {
    id: 5,
    name: 'BlockChat Team',
    avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=BlockChat',
    lastMessage: 'Welcome to the decentralized chat network!',
    time: 'Monday',
    unread: 0,
    isOnline: true,
  },
];

export const DUMMY_MESSAGES_BY_CHAT = {
  1: [
    { id: 1, senderId: 1, text: 'Hey! Did you check the latest transaction?', time: '10:30 AM', isMe: false, status: 'read' },
    { id: 2, senderId: 'me', text: 'Yes, it went through perfectly. The encryption works like a charm.', time: '10:32 AM', isMe: true, status: 'read' },
    { id: 3, senderId: 1, text: 'Awesome! Web3 messaging is definitely the future.', time: '10:33 AM', isMe: false, status: 'read' },
    { id: 4, senderId: 'me', text: 'Agreed. Next step is to implement the IPFS sync.', time: '10:40 AM', isMe: true, status: 'sent' },
  ],
  2: [
    { id: 5, senderId: 2, text: 'Gas fee is a bit high right now.', time: '09:12 AM', isMe: false, status: 'read' },
    { id: 6, senderId: 'me', text: 'Yes, maybe wait for less network congestion.', time: '09:15 AM', isMe: true, status: 'read' },
  ],
  3: [
    { id: 7, senderId: 3, text: 'Running bitcoin.', time: 'Yesterday', isMe: false, status: 'read' },
  ],
  4: [
    { id: 8, senderId: 4, text: 'I reviewed your algorithm.', time: 'Tuesday', isMe: false, status: 'read' },
  ],
  5: [
    { id: 9, senderId: 5, text: 'Welcome to BlockChat. This is dummy data for testing.', time: 'Monday', isMe: false, status: 'read' },
  ],
};

export function initializeDummyUsers() {
  if (typeof window === 'undefined') return;
  const users = localStorage.getItem(STORAGE_KEYS.users);
  if (!users) {
    localStorage.setItem(STORAGE_KEYS.users, JSON.stringify(DUMMY_USERS));
  }
}

export function getStoredUsers() {
  const users = localStorage.getItem(STORAGE_KEYS.users);
  return users ? JSON.parse(users) : [];
}

export function saveStoredUsers(users) {
  localStorage.setItem(STORAGE_KEYS.users, JSON.stringify(users));
}
