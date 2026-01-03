import React from 'react';
import Image from 'next/image';
import userAvatar from '../../../public/images/Avatar.png';
import {
  FiUser,
  FiSettings,
  FiBell,
  FiLogOut,
  FiChevronRight,
  FiX
} from 'react-icons/fi';

function Dropdown({ onClose }) {
  return (
    <div className="absolute top-0 right-0  w-[280px] rounded-xl bg-white shadow-2xl border border-neutral-200 p-5">
      {/* Close button */}
      <button
        className="absolute top-3 right-3 text-neutral-400 hover:text-neutral-700"
        onClick={onClose}
      >
        <FiX size={18} />
      </button>

      {/* User Info */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-200">
          <Image
            src={userAvatar}
            alt="User Avatar"
            width={48}
            height={48}
            className="object-cover w-12 h-12"
          />
        </div>

        <div>
          <p className="text-sm font-medium text-neutral-900">
            Your name
          </p>
          <p className="text-xs text-neutral-500">
            yourname@gmail.com
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-neutral-200 mb-3" />

      {/* Menu */}
      <div className="space-y-1">
        <MenuItem
          icon={<FiUser size={18} />}
          label="My Profile"
          right={<FiChevronRight size={16} />}
        />

        <MenuItem
          icon={<FiSettings size={18} />}
          label="Settings"
          right={<FiChevronRight size={16} />}
        />

        <MenuItem
          icon={<FiBell size={18} />}
          label="Notification"
          right={<span className="text-xs text-neutral-500">Allow</span>}
        />

        <MenuItem
          icon={<FiLogOut size={18} />}
          label="Log Out"
        />
      </div>
    </div>
  );
}

/* Reusable row */
function MenuItem({ icon, label, right }) {
  return (
    <div className="flex items-center justify-between px-2 py-2 rounded-md cursor-pointer hover:bg-neutral-100 transition">
      <div className="flex items-center gap-3 text-neutral-800">
        {icon}
        <span className="text-sm">{label}</span>
      </div>
      {right}
    </div>
  );
}

export default Dropdown;
