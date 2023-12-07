import React from 'react'

export default function Library() {
  return (
    <div className='w-full h-80 bg-[#121212] m-2 mb-0 box-border rounded-xl rounded-b-none py-4 px-2 flex flex-col justify-start align-middle space-y-4'>
        <div className='flex align-middle space-x-32'>
        <div className='flex space-x-4 pl-4'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M3 22C2.73478 22 2.48043 21.8946 2.29289 21.7071C2.10536 21.5196 2 21.2652 2 21V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2C3.26522 2 3.51957 2.10536 3.70711 2.29289C3.89464 2.48043 4 2.73478 4 3V21C4 21.2652 3.89464 21.5196 3.70711 21.7071C3.51957 21.8946 3.26522 22 3 22ZM15.5 2.134C15.348 2.04623 15.1755 2.00003 15 2.00003C14.8245 2.00002 14.652 2.04623 14.5 2.13399C14.348 2.22176 14.2218 2.34799 14.134 2.50001C14.0462 2.65202 14 2.82447 14 3V21C14 21.2652 14.1054 21.5196 14.2929 21.7071C14.4804 21.8946 14.7348 22 15 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21V6.464C22 6.28847 21.9538 6.11603 21.866 5.96401C21.7782 5.812 21.652 5.68577 21.5 5.598L15.5 2.134ZM9 2C8.73478 2 8.48043 2.10536 8.29289 2.29289C8.10536 2.48043 8 2.73478 8 3V21C8 21.2652 8.10536 21.5196 8.29289 21.7071C8.48043 21.8946 8.73478 22 9 22C9.26522 22 9.51957 21.8946 9.70711 21.7071C9.89464 21.5196 10 21.2652 10 21V3C10 2.73478 9.89464 2.48043 9.70711 2.29289C9.51957 2.10536 9.26522 2 9 2Z" fill="#A7A7A7"/>
</svg>
<span className='text-[#A7A7A7] text-base font-bold'>Your Library</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <g clip-path="url(#clip0_43_223)">
    <path d="M15.25 8C15.25 8.19891 15.171 8.38968 15.0303 8.53033C14.8897 8.67098 14.6989 8.75 14.5 8.75H8.75V14.5C8.75 14.6989 8.67098 14.8897 8.53033 15.0303C8.38968 15.171 8.19891 15.25 8 15.25C7.80109 15.25 7.61032 15.171 7.46967 15.0303C7.32902 14.8897 7.25 14.6989 7.25 14.5V8.75H1.5C1.30109 8.75 1.11032 8.67098 0.96967 8.53033C0.829018 8.38968 0.75 8.19891 0.75 8C0.75 7.80109 0.829018 7.61032 0.96967 7.46967C1.11032 7.32902 1.30109 7.25 1.5 7.25H7.25V1.5C7.25 1.30109 7.32902 1.11032 7.46967 0.96967C7.61032 0.829018 7.80109 0.75 8 0.75C8.19891 0.75 8.38968 0.829018 8.53033 0.96967C8.67098 1.11032 8.75 1.30109 8.75 1.5V7.25H14.5C14.6989 7.25 14.8897 7.32902 15.0303 7.46967C15.171 7.61032 15.25 7.80109 15.25 8Z" fill="#A7A7A7"/>
  </g>
  <defs>
    <clipPath id="clip0_43_223">
      <rect width="16" height="16" fill="white"/>
    </clipPath>
  </defs>
</svg>
        </div>
        <div className='bg-[#242424] rounded-xl flex flex-col justify-evenly box-border pl-4 w-7/8 h-28'>
<span className='text-sm text-white font-bold'>Create Your First Playlist</span>
<span className='text-xs font-bold text-[#A7A7A7]'>It's easy, we'll help you</span>
<button className='w-2/5 h-7 bg-white rounded-full border-none text-xs text-black font-bold text-center'>Create playlist</button>
        </div>
        <div className='bg-[#242424] rounded-xl flex flex-col justify-evenly box-border pl-4 w-7/8 h-28'>
<span className='text-sm text-white font-bold'>Let's find some podcasts to follow</span>
<span className='text-xs font-bold text-[#A7A7A7]'>We'll keep you updated on new episodes</span>
<button className='w-2/5 h-7 bg-white rounded-full border-none text-xs text-black font-bold text-center'>Browse podcasts</button>
        </div>
        
    </div>
  )
}
