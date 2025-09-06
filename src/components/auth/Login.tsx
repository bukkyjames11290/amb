'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { mockAccounts } from '../mockData/MockData';
import Header from '../header/Header';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userAccount = mockAccounts.find(account => account.holder.username === username);
    if (!userAccount) {
      setError('User not found');
      return;
    }
    if (userAccount.holder.password !== password) {
      setError('Invalid password');
      return;
    }
    // Store user data in localStorage
    localStorage.setItem('loggedInUser', JSON.stringify(userAccount));
    router.push('/dashboard');
  };

  return (
    <div className="bg-[#74787b] h-screen relative flex flex-col items-center pt-24">
      <div className="px-6 pt-0 w-full">
        <Header />
      </div>
      {/* <div className="py-5 px-6 bg-[#f2fbfe] text-xl">
        <h1 className="text-[#00395d] border-l-4 border-l-[#00395d] pl-2">Log in to Online Banking</h1>
      </div> */}
      <div className="p-4 px-6 pt-0 w-full">
        <div className="bg-[#ebf0f3] rounded-xl rounded-t-none w-full p-7 pb-10">
          <div className="mb-5">{error && <p className="text-[20px] text-center mx-auto max-w-[200px] rounded-md flex items-center justify-center text-red-600">{error}</p>}</div>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  value={username}
                  placeholder='Login ID'
                  className="p-4 py-3 rounded-[8px] text-[#5c5c5c] placeholder:text-gray-600 bg-transparent border border-gray-500 outline-none"
                  onChange={e => setUsername(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-3">
                <input
                  type="password"
                  value={password}
                  placeholder='Password'
                  className="p-4 py-3 rounded-[8px] text-[#5c5c5c] placeholder:text-gray-600 bg-transparent border border-gray-500 outline-none"
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-2 mt-8">
              <button type="submit" className="p-4 py-3 bg-[#dc002e] w-full text-white font-semibold rounded-md">
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full min-h-[70px] bg-[#ebf0f3] absolute bottom-0 z-50 flex items-center justify-center px-6 p-[20px]">
        <p className="text-base flex flex-col gap-1 text-center">
          <span>© 2025 American Momentum Bank | Portions Copyright © Kasasa, Ltd. All rights reserved. </span>{' '}
        </p>
      </div>
    </div>
  );
}
