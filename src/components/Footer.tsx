"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();

  return (
    <>
      <footer className="bg-primary-container dark:bg-inverse-surface w-full mt-section-gap border-t border-tertiary dark:border-outline">
        <div className="grid grid-cols-12 gap-gutter max-w-container-max mx-auto px-6 md:px-margin-desktop py-12 md:py-section-gap">
          {/* Brand & Copyright */}
          <div className="col-span-12 md:col-span-4 flex flex-col justify-between">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-primary-container dark:text-inverse-on-surface mb-4">KDoore</h2>
              <p className="font-body-md text-body-md text-on-primary-container/80 dark:text-inverse-on-surface/80">
                Harmonious Facility Management.
              </p>
            </div>
            <p className="font-body-md text-body-md text-on-primary-container/60 dark:text-inverse-on-surface/60 mt-8 md:mt-0 flex items-center gap-2">
              © 2024 KDoore Social Enterprise.
              <button 
                onClick={() => router.push('/admin')}
                className="text-on-primary-container/40 hover:text-secondary transition-colors"
                title="Admin Portal"
                aria-label="Open admin portal"
              >
                <span className="material-symbols-outlined text-sm" aria-hidden="true">key</span>
              </button>
            </p>
          </div>

          {/* Links */}
          <div className="col-span-12 md:col-span-8 flex flex-wrap gap-x-12 gap-y-4 md:justify-end mt-8 md:mt-0">
            <Link href="/services" className="font-body-md text-body-md text-on-primary-container/80 dark:text-inverse-on-surface/80 hover:text-primary dark:hover:text-on-surface transition-all hover:underline decoration-secondary underline-offset-4">Services</Link>
            <Link href="/about" className="font-body-md text-body-md text-on-primary-container/80 dark:text-inverse-on-surface/80 hover:text-primary dark:hover:text-on-surface transition-all hover:underline decoration-secondary underline-offset-4">About Us</Link>
            <Link href="/contact" className="font-body-md text-body-md text-on-primary-container/80 dark:text-inverse-on-surface/80 hover:text-primary dark:hover:text-on-surface transition-all hover:underline decoration-secondary underline-offset-4">Contact</Link>
            <Link href="#" className="font-body-md text-body-md text-on-primary-container/80 dark:text-inverse-on-surface/80 hover:text-primary dark:hover:text-on-surface transition-all hover:underline decoration-secondary underline-offset-4">Privacy Policy</Link>
            <Link href="#" className="font-body-md text-body-md text-on-primary-container/80 dark:text-inverse-on-surface/80 hover:text-primary dark:hover:text-on-surface transition-all hover:underline decoration-secondary underline-offset-4">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
