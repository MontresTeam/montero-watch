import React from 'react';
import Image from 'next/image';
import userAvatar from '../../../public/images/Avatar.png';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import {
  FiUser,
  FiSettings,
  FiBell,
  FiLogOut,
  FiChevronRight,
  FiX
} from 'react-icons/fi';

function Dropdown({ onClose }) {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <div className="fixed md:absolute top-0 right-0 md:top-12 md:right-0 w-full md:w-[280px] h-screen md:h-auto md:rounded-xl bg-white shadow-2xl border border-neutral-200 md:p-5 p-4 z-[9999]">
      {/* Close button */}
      <button
        className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 transition-colors"
        onClick={onClose}
        aria-label="Close dropdown"
      >
        <FiX size={20} className="md:w-[18px] md:h-[18px]" />
      </button>

      {/* User Info */}
      <div className="flex items-center gap-3 mb-6 md:mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-200 flex-shrink-0">
          <Image
            src={user.profilePic || userAvatar}
            alt="User Avatar"
            width={48}
            height={48}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-neutral-900 truncate">
            Your name
          </p>
          <p className="text-xs text-neutral-500 truncate">
            yourname@gmail.com
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-neutral-200 mb-4" />

      {/* Menu */}
      <div className="space-y-2">
        <Link href="/profile" onClick={onClose}>
          <MenuItem
            icon={<FiUser size={20} className="md:w-[18px] md:h-[18px]" />}
            label="My Profile"
            right={<FiChevronRight size={18} className="md:w-[16px] md:h-[16px]" />}
          />
        </Link>

        <MenuItem
          icon={<FiSettings size={20} className="md:w-[18px] md:h-[18px]" />}
          label="Settings"
          right={<FiChevronRight size={18} className="md:w-[16px] md:h-[16px]" />}
        />

        <MenuItem
          icon={<FiBell size={20} className="md:w-[18px] md:h-[18px]" />}
          label="Notification"
          right={<span className="text-[11px] font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">New</span>}
        />

        <div className="h-px bg-neutral-100 -mx-5 my-2" />

        <MenuItem
          icon={<FiLogOut size={17} />}
          label="Log Out"
          variant="danger"
          onClick={() => {
            logout();
            onClose();
          }}
        />
      </div>

      {/* Mobile-only backdrop effect */}
      <div 
        className="fixed inset-0  bg-opacity-20 -z-10 md:hidden" 
        onClick={onClose}
      />
    </div>
  );
}

/* Reusable row */
function MenuItem({ icon, label, right, onClick, variant }) {
  const isDanger = variant === 'danger';

  return (
    <div
      className={`group flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-all duration-200 ${isDanger ? 'hover:bg-red-50' : 'hover:bg-neutral-50'
        }`}
      onClick={onClick}
    >
      <div className={`flex items-center gap-3 ${isDanger ? 'text-red-600' : 'text-neutral-700 group-hover:text-black font-light'
        }`}>
        <span className={`${isDanger ? '' : 'text-neutral-400 group-hover:text-black transition-colors'}`}>
          {icon}
        </span>
        <span className="text-[13px] tracking-wide">{label}</span>
      </div>
      {right}
    </div>
  );
}

export default Dropdown;