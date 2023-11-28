import Link from 'next/link';
import Image from 'next/image';

import { AcmeLogo, lusitana } from '@/components/ui';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  p-6">
      {/* LOGO */}
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>

      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className=" flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-6 md:w-2/5">
          <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent" />
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-2xl md:leading-normal`}
          >
            <strong>Welcome To Acme! </strong>
            This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span>
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Dash</span>
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 ">
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing mobile version
            "
          />
        </div>
      </div>
    </main>
  );
}
