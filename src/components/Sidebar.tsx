import Image from 'next/image';
import Link from 'next/link';
import { pageConfig } from '@/constants';

export default function Sidebar() {
  return (
    <nav className="fixed top-0 left-0 z-40 w-52 h-screen pt-20 transition-transform -translate-x-full bg-white  shadow-md sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          {pageConfig.map((page) => (
            <li key={page.href}>
              <Link
                href={page.href}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <Image
                  src={page.icon}
                  alt={page.title}
                  width={24}
                  height={24}
                />
                <span className="ms-3">{page.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
