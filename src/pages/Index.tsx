import { Helmet } from "react-helmet-async";
import {
  COPY_PRODUCT_NAME,
  BRAND_NAME,
  PDP_URL,
  CDN_HERO_FRONT,
  CDN_LIFESTYLE_1,
  CDN_TEXTURE_1,
  CDN_BUNDLE_3,
  ADV_META_TITLE,
  ADV_META_DESC,
  ADV_PUBLICATION_NAME,
  ADV_DATE,
  ADV_H1,
  ADV_SUBHEAD,
  ADV_STORY_P1,
  ADV_STORY_P2,
  ADV_STORY_P3,
  ADV_STORY_P4,
  ADV_OPENING_SCENE,
  ADV_P2_HEADLINE,
  ADV_P2_BODY,
  ADV_P2_BODY_2,
  ADV_P2_BODY_3,
  ADV_P2_BODY_4,
  ADV_P2_BODY_5,
  ADV_P2_BODY_CLOSE,
  ADV_P3_HEADLINE,
  ADV_MECHANISM_BODY,
  ADV_P3_BODY_2,
  ADV_P3_BODY_3,
  ADV_P3_BODY_4,
  ADV_P3_BODY_5,
  ADV_MECHANISM_NAME,
  ADV_ACTION_1_TITLE,
  ADV_ACTION_1_BODY,
  ADV_ACTION_2_TITLE,
  ADV_ACTION_2_BODY,
  ADV_ACTION_3_TITLE,
  ADV_ACTION_3_BODY,
  ADV_SOCIAL_PROOF_INTRO,
  ADV_TESTIMONIAL_1_QUOTE,
  ADV_TESTIMONIAL_1_ATTR,
  ADV_TESTIMONIAL_2_QUOTE,
  ADV_TESTIMONIAL_2_ATTR,
  ADV_BUNDLE_1_NAME,
  ADV_BUNDLE_1_PRICE,
  ADV_BUNDLE_1_COMPARE,
  ADV_BUNDLE_2_NAME,
  ADV_BUNDLE_2_PRICE,
  ADV_BUNDLE_2_COMPARE,
  ADV_BUNDLE_3_NAME,
  ADV_BUNDLE_3_PRICE,
  ADV_BUNDLE_3_COMPARE,
  ADV_GUARANTEE_DAYS,
  ADV_URGENCY_HEADLINE,
  ADV_URGENCY_BODY,
  ADV_PRODUCT_REVEAL_HEADLINE,
  ADV_MID_CTA_HEADLINE,
  ADV_MID_CTA_BODY,
  ADV_MID_CTA_BUTTON,
  ADV_DISCLAIMER,
  ADV_FOOTER_PUBLICATION,
  ADV_FOOTER_DISCLAIMER_2,
} from "../config";

const COLORS = {
  primary: "#C4956A",
  cta: "#B85C38",
  headline: "#1A1A1A",
  body: "#333333",
  bg: "#FFFFF8",
  bgDark: "#F7F4EF",
  green: "#2D6A4F",
  accent: "#6B4F3A",
  disclosure: "#8B6954",
};

const CTAButton = ({ href, children, large = false }: { href: string; children: React.ReactNode; large?: boolean }) => (
  <a
    href={href}
    style={{
      display: "inline-block",
      background: COLORS.cta,
      color: "#fff",
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 700,
      fontSize: large ? "18px" : "16px",
      padding: large ? "18px 44px" : "14px 32px",
      borderRadius: "9999px",
      textDecoration: "none",
      letterSpacing: "0.01em",
      boxShadow: "0 4px 20px rgba(184,92,56,0.25)",
    }}
  >
    {children}
  </a>
);

const Index = () => {
  const phases = [
    { phase: "Phase 1", title: ADV_ACTION_1_TITLE, body: ADV_ACTION_1_BODY },
    { phase: "Phase 2", title: ADV_ACTION_2_TITLE, body: ADV_ACTION_2_BODY },
    { phase: "Phase 3", title: ADV_ACTION_3_TITLE, body: ADV_ACTION_3_BODY },
  ];

  const testimonials = [
    { quote: ADV_TESTIMONIAL_1_QUOTE, attr: ADV_TESTIMONIAL_1_ATTR },
    { quote: ADV_TESTIMONIAL_2_QUOTE, attr: ADV_TESTIMONIAL_2_ATTR },
  ];

  const bundles = [
    { name: ADV_BUNDLE_1_NAME, price: ADV_BUNDLE_1_PRICE, compare: ADV_BUNDLE_1_COMPARE, badge: null, extras: [`Digital "${COPY_PRODUCT_NAME} Protocol" Guide (free, $29 value)`, "Free shipping on orders over $50"] },
    { name: ADV_BUNDLE_2_NAME, price: ADV_BUNDLE_2_PRICE, compare: ADV_BUNDLE_2_COMPARE, badge: "⭐ MOST POPULAR", extras: [`Digital "${COPY_PRODUCT_NAME} Protocol" Guide (free)`, "Mini Rose Quartz Facial Roller (free, $24.99 value)", "Free shipping included"] },
    { name: ADV_BUNDLE_3_NAME, price: ADV_BUNDLE_3_PRICE, compare: ADV_BUNDLE_3_COMPARE, badge: null, extras: [`Digital "${COPY_PRODUCT_NAME} Protocol" Guide (free)`, "Rose Quartz Roller (free, $24.99 value)", "3-Pack Collagen Sheet Masks (free, $24.99 value)", "Free shipping included"] },
  ];

  return (
    <>
      <Helmet>
        <title>{ADV_META_TITLE}</title>
        <meta name="description" content={ADV_META_DESC} />
      </Helmet>

      <div style={{ fontFamily: "'Georgia', serif", background: COLORS.bg, color: COLORS.body, minHeight: "100vh" }}>

        {/* ADVERTISEMENT DISCLOSURE */}
        <div style={{ background: "#1A1A1A", color: "#ccc", textAlign: "center", padding: "8px 16px", fontSize: "12px", letterSpacing: "0.08em" }}>
          ADVERTISEMENT | ADVERTISER DISCLOSURE
        </div>

        {/* PUBLICATION HEADER */}
        <header style={{ background: COLORS.bgDark, borderBottom: `2px solid ${COLORS.primary}`, padding: "20px 24px", textAlign: "center" }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "24px", color: COLORS.headline, letterSpacing: "-0.02em" }}>
            {ADV_PUBLICATION_NAME}
          </div>
          <div style={{ fontSize: "12px", color: COLORS.accent, marginTop: "4px", letterSpacing: "0.05em" }}>
            INDEPENDENT EDITORIAL | SKINCARE SCIENCE FOR WOMEN 40+
          </div>
        </header>

        {/* DISCLOSURE BOX */}
        <div style={{ maxWidth: "740px", margin: "24px auto", padding: "0 24px" }}>
          <div style={{ background: "#F9F4EF", border: `1px solid ${COLORS.primary}`, borderRadius: "8px", padding: "12px 16px", fontSize: "13px", color: COLORS.disclosure, lineHeight: 1.6 }}>
            <strong>Advertiser Disclosure:</strong> This article is sponsored content produced in partnership with {BRAND_NAME}. {ADV_PUBLICATION_NAME} receives compensation from brands we feature. All editorial opinions are our own. This article contains affiliate links — if you purchase through them, we may receive a commission at no additional cost to you.
          </div>
        </div>

        {/* ARTICLE CONTENT */}
        <article style={{ maxWidth: "740px", margin: "0 auto", padding: "0 24px 80px" }}>

          {/* HEADLINE */}
          <h1 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 5vw, 42px)", lineHeight: 1.15, color: COLORS.headline, margin: "40px 0 20px", letterSpacing: "-0.02em" }}>
            {ADV_H1}
          </h1>

          <p style={{ fontSize: "20px", fontStyle: "italic", color: COLORS.accent, lineHeight: 1.6, marginBottom: "32px", borderLeft: `3px solid ${COLORS.primary}`, paddingLeft: "16px" }}>
            {ADV_SUBHEAD}
          </p>

          {/* HERO IMAGE */}
          <img
            src={CDN_LIFESTYLE_1}
            alt={`${COPY_PRODUCT_NAME} — lifestyle`}
            style={{ width: "100%", borderRadius: "12px", marginBottom: "40px", boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
          />

          {/* OPENING STORY */}
          <p style={{ fontSize: "17px", lineHeight: 1.9, marginBottom: "20px" }}>
            {ADV_OPENING_SCENE}
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.9, marginBottom: "20px" }}>
            {ADV_STORY_P1}
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.9, marginBottom: "20px" }}>
            {ADV_STORY_P2}
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.9, marginBottom: "20px", fontStyle: "italic", color: COLORS.accent }}>
            <em>{ADV_STORY_P3}</em>
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.9, marginBottom: "20px" }}>
            {ADV_STORY_P4}
          </p>

          {/* PROBLEM SECTION */}
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(22px, 3vw, 30px)", color: COLORS.headline, margin: "48px 0 20px" }}>
            {ADV_P2_HEADLINE}
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.9, marginBottom: "20px" }}>
            {ADV_P2_BODY}
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.9, marginBottom: "20px" }}>
            {ADV_P2_BODY_2}
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.9, marginBottom: "20px" }}>
            {ADV_P2_BODY_3}
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.9, marginBottom: "20px" }}>
            {ADV_P2_BODY_4}
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.9, marginBottom: "20px" }}>
            {ADV_P2_BODY_5}
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.9, marginBottom: "40px", fontWeight: 600, color: COLORS.headline }}>
            {ADV_P2_BODY_CLOSE}
          </p>

          {/* PRODUCT IMAGE */}
          <img
            src={CDN_HERO_FRONT}
            alt={COPY_PRODUCT_NAME}
            style={{ width: "100%", maxWidth: "400px", display: "block", margin: "0 auto 40px", borderRadius: "16px", boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
          />

          {/* MECHANISM */}
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(22px, 3vw, 30px)", color: COLORS.headline, margin: "0 0 20px" }}>
            {ADV_P3_HEADLINE}
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.9, marginBottom: "20px" }}>
            {ADV_MECHANISM_BODY}
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.9, marginBottom: "20px" }}>
            {ADV_P3_BODY_2}
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.9, marginBottom: "20px" }}>
            {ADV_P3_BODY_3}
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.9, marginBottom: "20px" }}>
            {ADV_P3_BODY_4}
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.9, marginBottom: "40px" }}>
            {ADV_P3_BODY_5} <strong>{ADV_MECHANISM_NAME}</strong>.
          </p>

          {/* THREE PHASES */}
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(22px, 3vw, 30px)", color: COLORS.headline, margin: "0 0 20px" }}>
            {ADV_PRODUCT_REVEAL_HEADLINE}
          </h2>

          {phases.map((phase, i) => (
            <div key={i} style={{ background: COLORS.bgDark, borderRadius: "12px", padding: "28px 32px", marginBottom: "20px", borderLeft: `4px solid ${COLORS.primary}` }}>
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "18px", color: COLORS.headline, marginBottom: "12px" }}>{phase.title}</h3>
              <p style={{ fontSize: "16px", lineHeight: 1.8, margin: 0 }}>{phase.body}</p>
            </div>
          ))}

          {/* SOCIAL PROOF */}
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(22px, 3vw, 30px)", color: COLORS.headline, margin: "48px 0 20px" }}>
            What Happened When Women Used It for 8 Weeks
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.9, marginBottom: "20px" }}>
            {ADV_SOCIAL_PROOF_INTRO}
          </p>

          {testimonials.map((t, i) => (
            <div key={i} style={{ borderLeft: `4px solid ${COLORS.primary}`, paddingLeft: "20px", marginBottom: "28px" }}>
              <p style={{ fontSize: "17px", lineHeight: 1.8, fontStyle: "italic", marginBottom: "8px" }}>"{t.quote}"</p>
              <p style={{ fontSize: "14px", color: COLORS.accent, fontWeight: 600 }}>— {t.attr}</p>
            </div>
          ))}

          {/* TEXTURE IMAGE */}
          <img
            src={CDN_TEXTURE_1}
            alt={`${COPY_PRODUCT_NAME} texture`}
            style={{ width: "100%", borderRadius: "12px", margin: "32px 0", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}
          />

          {/* OFFER */}
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(22px, 3vw, 30px)", color: COLORS.headline, margin: "48px 0 20px" }}>
            {COPY_PRODUCT_NAME} by {BRAND_NAME} — The Offer
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.9, marginBottom: "20px" }}>
            {COPY_PRODUCT_NAME} is available exclusively at the {BRAND_NAME} website in three bundle configurations designed around the {ADV_MECHANISM_NAME} protocol.
          </p>

          {/* Offer box */}
          <div style={{ background: COLORS.bgDark, borderRadius: "16px", padding: "32px", marginBottom: "32px", border: `1px solid rgba(196,149,106,0.3)` }}>
            {bundles.map((tier, i) => (
              <div key={i} style={{ borderBottom: i < 2 ? "1px solid rgba(196,149,106,0.2)" : "none", paddingBottom: i < 2 ? "20px" : "0", marginBottom: i < 2 ? "20px" : "0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", marginBottom: "8px" }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "18px", color: COLORS.headline }}>{tier.name}</span>
                  {tier.badge && <span style={{ background: COLORS.cta, color: "#fff", fontSize: "11px", fontWeight: 700, padding: "2px 8px", borderRadius: "9999px" }}>{tier.badge}</span>}
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "baseline", marginBottom: "8px" }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "22px", color: COLORS.cta }}>{tier.price}</span>
                  <span style={{ textDecoration: "line-through", color: "#9CA3AF" }}>reg. {tier.compare}</span>
                  <span style={{ background: COLORS.green, color: "#fff", fontSize: "11px", fontWeight: 700, padding: "2px 8px", borderRadius: "9999px" }}>25% OFF with SECRET25</span>
                </div>
                <ul style={{ fontSize: "14px", color: COLORS.body, margin: "8px 0 0 0", paddingLeft: "20px" }}>
                  {tier.extras.map((e, j) => <li key={j} style={{ marginBottom: "4px" }}>✓ {e}</li>)}
                </ul>
              </div>
            ))}
          </div>

          {/* Guarantee */}
          <div style={{ background: "#EEF7F1", borderRadius: "12px", padding: "24px 28px", marginBottom: "32px", border: "1px solid #A8D5B5" }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "18px", color: "#166534", margin: "0 0 8px" }}>
              🛡️ {ADV_GUARANTEE_DAYS}-Day Money-Back Guarantee
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, margin: 0, color: "#1A4731" }}>
              The {ADV_MECHANISM_NAME} takes 8 weeks to show its deepest work. If you're not seeing what we've described, email us and we'll refund every cent. No forms, no fine print, no hoops. The {ADV_GUARANTEE_DAYS}-day guarantee isn't a policy. It's a statement of confidence.
            </p>
          </div>

          {/* URGENCY */}
          <div style={{ background: "#FFF8F0", borderRadius: "12px", padding: "20px 24px", marginBottom: "40px", border: `1px solid rgba(196,149,106,0.4)` }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "15px", color: COLORS.cta, margin: "0 0 8px" }}>
              📦 {ADV_URGENCY_HEADLINE}
            </p>
            <p style={{ fontSize: "14px", lineHeight: 1.7, margin: 0 }}>
              {ADV_URGENCY_BODY}
            </p>
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center", padding: "48px 24px", background: `linear-gradient(135deg, #FDF4EC 0%, #F5E6D3 100%)`, borderRadius: "20px" }}>
            <img src={CDN_BUNDLE_3} alt={`${COPY_PRODUCT_NAME} bundle`} style={{ maxWidth: "320px", width: "100%", borderRadius: "16px", marginBottom: "24px" }} />
            <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(22px, 3vw, 28px)", color: COLORS.headline, marginBottom: "16px" }}>
              {ADV_MID_CTA_HEADLINE}
            </h3>
            <p style={{ fontSize: "16px", color: COLORS.accent, marginBottom: "8px" }}>
              {ADV_MID_CTA_BODY}
            </p>
            <p style={{ fontSize: "15px", color: COLORS.accent, marginBottom: "28px" }}>
              → {ADV_GUARANTEE_DAYS}-Day Money-Back Guarantee | Free gifts with every order
            </p>
            <CTAButton href={PDP_URL} large>
              {ADV_MID_CTA_BUTTON}
            </CTAButton>
            <p style={{ fontSize: "13px", color: COLORS.accent, marginTop: "16px" }}>
              {ADV_STORY_P3}<br />
              If that sentence landed — this is for you.
            </p>
          </div>

        </article>

        {/* FOOTER */}
        <footer style={{ background: "#1A1A1A", color: "#9CA3AF", padding: "40px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "740px", margin: "0 auto" }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#fff", marginBottom: "12px" }}>{ADV_FOOTER_PUBLICATION}</p>
            <p style={{ fontSize: "12px", lineHeight: 1.8, maxWidth: "600px", margin: "0 auto 12px" }}>
              {ADV_DISCLAIMER}
            </p>
            <p style={{ fontSize: "12px", lineHeight: 1.8, maxWidth: "600px", margin: "0 auto 12px" }}>
              {ADV_FOOTER_DISCLAIMER_2}
            </p>
            <p style={{ fontSize: "12px" }}>
              © 2026 {ADV_FOOTER_PUBLICATION} | Published in partnership with {BRAND_NAME}
            </p>
          </div>
        </footer>

      </div>
    </>
  );
};

export default Index;
