import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import userAvatar from '../../../public/images/Avatar.png';
import { useAuth } from '@/context/AuthContext';
import { useTranslation } from "react-i18next";
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
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const isAr = i18n.language?.toLowerCase() === 'ar';

  if (!user) return null;




  return (
    <div className={`absolute top-0 right-0 w-[280px] rounded-xl bg-white shadow-2xl border border-neutral-200 p-5 ${isAr ? 'lang-ar' : ''}`}>
      {/* Close button */}
      <button
        className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 transition-colors"
        onClick={onClose}
      >
        <FiX size={16} />
      </button>

      {/* User Info */}
      <div className="flex items-center gap-4 mb-5 px-1">
        <div className="relative w-11 h-11 rounded-full overflow-hidden bg-neutral-50 border border-neutral-100 shadow-sm">
          <Image
            src={user.profilePic || userAvatar}
            alt="User Avatar"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col min-w-0">
          <p className="text-[14px] font-semibold text-neutral-900 truncate tracking-tight leading-none">
            {user.name || t("user") || 'User'}
          </p>
          <p className="text-[12px] text-neutral-500 font-light truncate mt-1">
            {user.email}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-neutral-100 -mx-5 mb-2" />

      {/* Menu */}
      <div className="space-y-0.5">
        <MenuItem
          icon={<FiUser size={17} />}
          label={t("myProfile")}
          right={<FiChevronRight size={14} className="text-neutral-300" />}
          onClick={() => {
            router.push('/profile');
            onClose();
          }}
        />

        <MenuItem
          icon={<FiSettings size={17} />}
          label={t("settings")}
          right={<FiChevronRight size={14} className="text-neutral-300" />}
        />

        <MenuItem
          icon={<FiBell size={17} />}
          label={t("notification")}
          right={<span className="text-[11px] font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">{t("new")}</span>}
        />

        <div className="h-px bg-neutral-100 -mx-5 my-2" />

        <MenuItem
          icon={<FiLogOut size={17} />}
          label={t("logout")}
          variant="danger"
          onClick={() => {
            logout();
            onClose();
          }}
        />
      </div>
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