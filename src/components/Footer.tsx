import { IMAGES } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-surface-low full-width mt-auto border-t border-outline-variant/30 font-display">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 py-12 max-w-7xl mx-auto">
        <div className="col-span-1">
          <div className="mb-4">
            <img src={IMAGES.logo} alt="Goto Holidays" className="h-8 object-contain" />
          </div>
          <p className="text-outline text-sm leading-relaxed mb-4">
            A sophisticated guide to global travel and seamless visa processing.
          </p>
          <p className="text-outline text-xs">
            © 2026 Goto Holidays. All rights reserved.
          </p>
        </div>
        <div className="col-span-1 md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-on-primary-container mb-1">Services</h4>
            <a href="#" className="text-outline text-sm hover:text-secondary underline underline-offset-4 transition-colors">Visa Requirements</a>
            <a href="#" className="text-outline text-sm hover:text-secondary underline underline-offset-4 transition-colors">Flight Status</a>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-on-primary-container mb-1">Legal</h4>
            <a href="#" className="text-outline text-sm hover:text-secondary underline underline-offset-4 transition-colors">Privacy Policy</a>
            <a href="#" className="text-outline text-sm hover:text-secondary underline underline-offset-4 transition-colors">Terms of Service</a>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-on-primary-container mb-1">Contact</h4>
            <p className="text-outline text-sm leading-relaxed">
              33-13, Brindavan St Ext,<br />
              Vivekanandapuram, West Mambalam,<br />
              Chennai, Tamil Nadu 600033
            </p>
            <p className="text-outline text-sm font-bold mt-1">
              Call: +91 98404 54601
            </p>
            <p className="text-outline text-[10px] mt-1 break-all">
              gotoholidaysandvisa@gmail.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
