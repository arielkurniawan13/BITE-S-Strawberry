import React from 'react';

export const StrawberryIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => {
  return (
    <svg
      viewBox="0 0 40 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Leaves / Calyx */}
      <path
        d="M20 12C20 12 18 4 12 4C10 4 8 6 9 9C10 11.5 13 13 15 13.5"
        fill="#4D8B45"
      />
      <path
        d="M20 12C20 12 22 4 28 4C30 4 32 6 31 9C30 11.5 27 13 25 13.5"
        fill="#3F7437"
      />
      <path
        d="M20 12C20 12 20 2 20 1C21 1 22 3 22 6C22 9 20.5 11.5 20 12"
        stroke="#2E5A27"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M13 12.5C9 10 3 10 3 13C3 15.5 7 16 11 15"
        fill="#4D8B45"
      />
      <path
        d="M27 12.5C31 10 37 10 37 13C37 15.5 33 16 29 15"
        fill="#4D8B45"
      />
      <path
        d="M16 13C18 10 22 10 24 13C25 14.5 23 15 20 15C17 15 15 14.5 16 13Z"
        fill="#66A85D"
      />

      {/* Strawberry Body */}
      <path
        d="M20 44C20 44 4 33 4 22C4 14 11 13 20 13C29 13 36 14 36 22C36 33 20 44 20 44Z"
        fill="#E83E5B"
      />

      {/* Strawberry Highlight / Gradient simulation */}
      <path
        d="M11 18C8.5 21 8.5 26 10 29C11 31 12 28 12 25C12 20 14 16 17 15C14 15 12 16.5 11 18Z"
        fill="#FF6882"
        fillOpacity="0.8"
      />

      {/* Strawberry Seeds (Golden/Yellow dots) */}
      <ellipse cx="14" cy="20" rx="1.2" ry="1.6" transform="rotate(-15 14 20)" fill="#FFF3A8" />
      <ellipse cx="20" cy="20" rx="1.2" ry="1.6" fill="#FFF3A8" />
      <ellipse cx="26" cy="20" rx="1.2" ry="1.6" transform="rotate(15 26 20)" fill="#FFF3A8" />

      <ellipse cx="11" cy="26" rx="1.2" ry="1.6" transform="rotate(-20 11 26)" fill="#FFF3A8" />
      <ellipse cx="17" cy="26" rx="1.2" ry="1.6" transform="rotate(-5 17 26)" fill="#FFF3A8" />
      <ellipse cx="23" cy="26" rx="1.2" ry="1.6" transform="rotate(5 23 26)" fill="#FFF3A8" />
      <ellipse cx="29" cy="26" rx="1.2" ry="1.6" transform="rotate(20 29 26)" fill="#FFF3A8" />

      <ellipse cx="15" cy="32" rx="1.2" ry="1.6" transform="rotate(-10 15 32)" fill="#FFF3A8" />
      <ellipse cx="20" cy="33" rx="1.2" ry="1.6" fill="#FFF3A8" />
      <ellipse cx="25" cy="32" rx="1.2" ry="1.6" transform="rotate(10 25 32)" fill="#FFF3A8" />

      <ellipse cx="18" cy="38" rx="1" ry="1.4" fill="#FFF3A8" />
      <ellipse cx="22" cy="38" rx="1" ry="1.4" fill="#FFF3A8" />
    </svg>
  );
};

export const BrandLogo: React.FC<{
  size?: 'sm' | 'md' | 'lg';
  theme?: 'dark' | 'light';
  showTagline?: boolean;
}> = ({ size = 'md', theme = 'light', showTagline = false }) => {
  const textColor = theme === 'dark' ? 'text-white' : 'text-[#172A5A]';
  const subColor = theme === 'dark' ? 'text-gray-300' : 'text-[#4D8B45]';

  return (
    <div className="flex items-center gap-2.5 group select-none">
      <div className="relative transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
        <StrawberryIcon className={size === 'sm' ? 'w-6 h-6' : size === 'lg' ? 'w-10 h-10' : 'w-8 h-8'} />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#F28C18] rounded-full animate-ping opacity-60"></span>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center">
          <span className={`font-heading font-black tracking-tight ${size === 'sm' ? 'text-xl' : size === 'lg' ? 'text-3xl' : 'text-2xl'} ${textColor}`}>
            BITE'S
          </span>
          <span className="text-[#E83E5B] text-xl font-black">.</span>
        </div>
        {showTagline && (
          <span className={`text-[11px] font-semibold tracking-wider uppercase ${subColor}`}>
            Fresh Strawberry Salatiga
          </span>
        )}
      </div>
    </div>
  );
};
