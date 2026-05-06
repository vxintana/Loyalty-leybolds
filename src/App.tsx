/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import EarnPoints from './components/EarnPoints';
import RedeemBenefits from './components/RedeemBenefits';
import Referral from './components/Referral';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';

export default function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary-fixed-dim selection:text-primary">
      <Header />
      <main className="pb-16 md:pb-0">
        <Hero />
        <Dashboard />
        <EarnPoints />
        <RedeemBenefits />
        <Referral />
        <FAQ />
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
}
