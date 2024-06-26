// app/dashboard/page.tsx

import Link from 'next/link';

export default function HomePage() {
  const today = new Date().toISOString().split('T')[0];

  return (
    <div>
      <h1 className='text-[#fff]'>Welcome to the Event Page</h1>
      <Link href={`/dashboard/${today}`} className='text-[#fff]'>
        See today's events
      </Link>
    </div>
  );
}
