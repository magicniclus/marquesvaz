'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav 
      className={`flex items-center flex-wrap gap-x-2 gap-y-1 text-sm ${className}`} 
      aria-label="Fil d'ariane"
    >
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          {index > 0 && (
            <ChevronRight className="h-4 w-4 text-gray-300 flex-shrink-0" aria-hidden="true" />
          )}
          
          {item.href && !item.current ? (
            <Link 
              href={item.href}
              className="hover:text-orange-300 transition-colors underline-offset-4 hover:underline focus:underline focus:outline-none whitespace-nowrap"
              aria-label={`Aller à ${item.label}`}
            >
              {item.label}
            </Link>
          ) : (
            <span 
              className={`whitespace-nowrap ${item.current ? "text-orange-300 font-medium" : ""}`}
              aria-current={item.current ? "page" : undefined}
            >
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}
