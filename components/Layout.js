import { useRouter } from 'next/router';
import Link from 'next/link';

const Layout = ({ children }) => {
  const router = useRouter();
  const path = router.pathname;
  const activePage = path === '/' ? 'home' : path.substring(1);

  return (
    <div className="page-container">
      <div className="top-bar">
        <Link href="/" className={activePage === 'home' ? 'active' : 'nav-link'}>Home</Link>
        <Link href="/about" className={activePage === 'about' ? 'active' : 'nav-link'}>About Us</Link>
        <Link href="/contact" className={activePage === 'contact' ? 'active' : 'nav-link'}>Contact Us</Link>
        <Link href="/plans" className={activePage === 'plans' ? 'active' : 'nav-link'}>Plans</Link>
      </div>
      <main>{children}</main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} ZapIt. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
