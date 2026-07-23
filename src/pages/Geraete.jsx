.equipment-hero {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(380px, 1.05fr);
  gap: 58px;
  align-items: center;
}

.equipment-hero-visual {
  position: relative;
  min-height: 560px;
  overflow: hidden;
  border-radius: 38px;
}

.equipment-hero-visual img {
  display: block;
  width: 100%;
  height: 560px;
  object-fit: cover;
}

.equipment-hero-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.04) 35%,
      rgba(0, 0, 0, 0.82) 100%
    ),
    radial-gradient(
      circle at 70% 25%,
      rgba(0, 255, 136, 0.16),
      transparent 42%
    );
}

.equipment-hero-label {
  position: absolute;
  left: 28px;
  right: 28px;
  bottom: 28px;
  z-index: 2;
  padding: 26px;
  border: 1px solid var(--line);
  border-radius: 26px;
  background: rgba(5, 5, 5, 0.68);
  backdrop-filter: blur(18px);
}

.equipment-hero-label span {
  display: block;
  margin-bottom: 10px;
  color: var(--green);
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0.17em;
  text-transform: uppercase;
}

.equipment-hero-label strong {
  display: block;
  max-width: 620px;
  font-size: clamp(23px, 3vw, 36px);
  line-height: 1.08;
  letter-spacing: -0.05em;
}

.equipment-category {
  scroll-margin-top: 120px;
}

.equipment-category-heading {
  max-width: 820px;
}

.equipment-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}

.equipment-grid-single {
  grid-template-columns: minmax(0, 760px);
}

.equipment-card {
  position: relative;
  overflow: hidden;
  border-radius: 32px;
  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.equipment-card:hover {
  transform: translateY(-8px);
  border-color: rgba(0, 255, 136, 0.32);
  box-shadow:
    0 24px 70px rgba(0, 0, 0, 0.35),
    0 0 44px rgba(0, 255, 136, 0.07);
}

.equipment-card-image {
  position: relative;
  height: 360px;
  overflow: hidden;
  background: #0d0d0d;
}

.equipment-card-image::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      180deg,
      transparent 45%,
      rgba(4, 4, 4, 0.75) 100%
    );
  pointer-events: none;
}

.equipment-card-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.55s ease;
}

.equipment-card:hover .equipment-card-image img {
  transform: scale(1.04);
}

.equipment-availability {
  position: absolute;
  right: 20px;
  bottom: 20px;
  z-index: 2;
  min-width: 132px;
  padding: 13px 16px;
  border: 1px solid rgba(0, 255, 136, 0.22);
  border-radius: 18px;
  background: rgba(5, 5, 5, 0.76);
  backdrop-filter: blur(16px);
}

.equipment-availability span {
  display: block;
  margin-bottom: 4px;
  color: var(--muted);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.equipment-availability strong {
  display: block;
  color: var(--green);
  font-size: 15px;
}

.equipment-card-content {
  padding: 30px;
}

.equipment-card-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}

.equipment-card-heading > span {
  color: rgba(255, 255, 255, 0.26);
  font-size: 14px;
  font-weight: 850;
  letter-spacing: 0.08em;
}

.equipment-card-icon {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border: 1px solid rgba(0, 255, 136, 0.23);
  border-radius: 16px;
  color: var(--green);
  background: rgba(0, 255, 136, 0.08);
}

.equipment-card h3 {
  margin: 0 0 16px;
  font-size: clamp(28px, 3vw, 39px);
  line-height: 1.02;
  letter-spacing: -0.05em;
}

.equipment-card p {
  margin: 0;
  color: var(--muted);
  font-size: 16px;
  line-height: 1.72;
}

.equipment-features {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin-top: 24px;
}

.equipment-features span {
  padding: 9px 13px;
  border: 1px solid rgba(255, 255, 255, 0.085);
  border-radius: 999px;
  color: rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.035);
  font-size: 12px;
  font-weight: 750;
}

.equipment-philosophy {
  position: relative;
  overflow: hidden;
  max-width: 980px;
  margin: 0 auto;
  padding: clamp(36px, 7vw, 82px);
  border-radius: 36px;
  text-align: center;
  background:
    radial-gradient(
      circle at 50% 0,
      rgba(0, 255, 136, 0.13),
      transparent 48%
    ),
    rgba(255, 255, 255, 0.025);
}

.equipment-philosophy h2 {
  max-width: 760px;
  margin: 0 auto 22px;
}

.equipment-philosophy > p:last-child {
  max-width: 760px;
  margin: 0 auto;
  color: var(--muted);
  font-size: 17px;
  line-height: 1.75;
}
