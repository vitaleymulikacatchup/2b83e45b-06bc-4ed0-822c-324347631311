"use client";

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleApple from '@/components/navigation/NavbarStyleApple/NavbarStyleApple';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          logoSrc="/images/logo.svg"
          logoAlt="MemeCoin Logo"
          brandName="MemeCoin"
          navItems={[
            { name: "Hero", id: "hero" },
            { name: "About", id: "about" },
            { name: "How to Buy", id: "how-to-buy" },
            { name: "Tokenomics", id: "tokenomics" },
            { name: "Footer", id: "footer" }
          ]}
        />
      </div>
      <div id="hero" data-section="hero">
        <TokenBillboardHero
          title="Welcome to MemeCoin!"
          subtitle="Join the fun and start trading!"
          contractAddress="0x123456789"
          copyButtonText="Copy Address"
          copiedText="Address Copied!"
        />
      </div>
      <div id="about" data-section="about">
        <CtaAbout
          title="About MemeCoin"
          descriptions={[
            "MemeCoin is a community-driven cryptocurrency inspired by memes.",
            "Join our playful movement and experience the joy of trading!"
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D variant="simple" />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <TextGridTokenomics
          title="MemeCoin Tokenomics"
          description="Explore the key metrics and benefits of MemeCoin."
          tokenData={[
            { value: "1M", description: "Total Supply" },
            { value: "500K", description: "Circulating Supply" },
            { value: "10%", description: "Transaction Fee" }
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoSrc="/images/logo.svg"
          logoAlt="MemeCoin Logo"
          logoText="MemeCoin"
          columns={[
            { items: [
              { label: "Privacy Policy", onClick: () => alert('Privacy policy') },
              { label: "Terms of Service", onClick: () => alert('Terms of Service') },
              { label: "Contact Us", onClick: () => alert('Contact Us') }
            ] },
            { items: [
              { label: "Twitter", onClick: () => alert('Twitter') },
              { label: "Discord", onClick: () => alert('Discord') },
              { label: "Telegram", onClick: () => alert('Telegram') }
            ] },
            { items: [
              { label: "GitHub", onClick: () => alert('GitHub') },
              { label: "LinkedIn", onClick: () => alert('LinkedIn') },
              { label: "Medium", onClick: () => alert('Medium') }
            ] }
          ]}
          copyrightText="© 2023 MemeCoin. All rights reserved."
          onPrivacyClick={() => alert('Privacy policy')}
        />
      </div>
    </SiteThemeProvider>
  );
}
