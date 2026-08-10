import Link from 'next/link';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: '케이두레소개', href: '/about' },
  { label: '정부지원기업안내', href: '/gov-support' },
  { label: '사업분야', href: '/business' },
  { label: '홍보센터', href: '/pr-center' },
  { label: '고객문의', href: '/inquiry' },
  { label: '두레몰', href: 'http://www.dooremall.kr', external: true },
];

export default function Navbar() {
  return (
    <header className={`${styles.header} backdrop-blur-md`}>
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <Link href="/" className={styles.logo}>
            K-Doore
          </Link>
          <div className={styles.links}>
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.label} 
                href={link.href}
                className={styles.navLink}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
