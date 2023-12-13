import React from 'react'

export default function Header() {
  return (
    <div className='w-full mx-4 mt-2 px-4 h-20 flex items-center rounded-xl rounded-b-none bg-[#121212] box-border place-content-between  cursor-pointer'>
<div className='flex flex-row space-x-xs h-10 w-28 justify-evenly items-center'>
  <div className='w-1/3 h-full rounded-full bg-black border-none flex items-center justify-center'>
  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <path d="M11.9518 0.470011C12.0923 0.610637 12.1712 0.801261 12.1712 1.00001C12.1712 1.19876 12.0923 1.38939 11.9518 1.53001L5.48182 8.00001L11.9518 14.47C12.0255 14.5387 12.0846 14.6215 12.1256 14.7135C12.1666 14.8055 12.1886 14.9048 12.1904 15.0055C12.1922 15.1062 12.1737 15.2062 12.1359 15.2996C12.0982 15.393 12.0421 15.4778 11.9709 15.549C11.8996 15.6203 11.8148 15.6764 11.7214 15.7141C11.628 15.7519 11.528 15.7704 11.4273 15.7686C11.3266 15.7668 11.2273 15.7448 11.1353 15.7038C11.0433 15.6628 10.9605 15.6037 10.8918 15.53L3.36182 8.00001L10.8918 0.470011C11.0324 0.329561 11.2231 0.250671 11.4218 0.250671C11.6206 0.250671 11.8112 0.329561 11.9518 0.470011Z" fill="white"/>
</svg>
  </div>
  <div className='w-1/3 h-full rounded-full bg-black border-none flex items-center justify-center cursor-pointer'>
  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <path d="M5.89203 0.470011C5.75158 0.610637 5.67269 0.801261 5.67269 1.00001C5.67269 1.19876 5.75158 1.38939 5.89203 1.53001L12.362 8.00001L5.89203 14.47C5.81834 14.5387 5.75924 14.6215 5.71825 14.7135C5.67726 14.8055 5.65521 14.9048 5.65344 15.0055C5.65166 15.1062 5.67018 15.2062 5.70791 15.2996C5.74563 15.393 5.80177 15.4778 5.87299 15.549C5.94421 15.6203 6.02904 15.6764 6.12243 15.7141C6.21582 15.7519 6.31585 15.7704 6.41655 15.7686C6.51725 15.7668 6.61657 15.7448 6.70857 15.7038C6.80057 15.6628 6.88337 15.6037 6.95203 15.53L14.482 8.00001L6.95203 0.470011C6.8114 0.329561 6.62078 0.250671 6.42203 0.250671C6.22328 0.250671 6.03265 0.329561 5.89203 0.470011Z" fill="white"/>
</svg>
  </div>
</div>
<div className='flex items-center justify-center space-x-5 '>
<div className='w-15 h-10 text-sm text-[#A7A7A7] font-bold flex items-center cursor-pointer'>
  <span>Sign Up</span>
</div>
<div className='w-28 h-12 rounded-full bg-white text-sm text-black font-bold border-none flex items-center justify-center cursor-pointer'>
  <button>Sign In</button>
</div>
</div>
    </div>
  )
}
