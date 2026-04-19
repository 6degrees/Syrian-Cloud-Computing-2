import { s } from '../styles';
import { C } from '../theme';

/**
 * Stock photography (Unsplash License) — bundled under /public/images for reliable hosting.
 * Attribution in figcaption per Unsplash guidelines.
 */
export default function IntroCloudPhotos() {
  return (
    <figure style={s.introCloudFigure} className="intro-cloud-figure">
      <div className="intro-cloud-grid" style={s.introCloudPhotoGrid}>
        <div
          className="intro-cloud-photo-first"
          style={{
            ...s.introCloudPhotoWrap,
            borderInlineEnd: `1px solid ${C.border}`,
          }}
        >
          <img
            src={`${import.meta.env.BASE_URL}images/intro-cloud-network.jpg`}
            alt="Abstract cloud computing and network connectivity concept."
            style={s.introCloudPhoto}
            loading="lazy"
            decoding="async"
            width={800}
            height={500}
          />
        </div>
        <div style={s.introCloudPhotoWrap}>
          <img
            src={`${import.meta.env.BASE_URL}images/intro-cloud-screen.jpg`}
            alt="Laptop with a cloud icon, representing cloud services and software."
            style={s.introCloudPhoto}
            loading="lazy"
            decoding="async"
            width={800}
            height={500}
          />
        </div>
      </div>
      <figcaption style={s.introCloudCredit}>
        <a
          href="https://unsplash.com/@growtika?utm_source=syrian-cloud-computing&utm_medium=referral"
          target="_blank"
          rel="noopener noreferrer"
          style={s.introCloudCreditLink}
        >
          Growtika
        </a>
        <span style={{ color: C.border }} aria-hidden="true">
          {' · '}
        </span>
        <a
          href="https://unsplash.com/@hazelz?utm_source=syrian-cloud-computing&utm_medium=referral"
          target="_blank"
          rel="noopener noreferrer"
          style={s.introCloudCreditLink}
        >
          Hazel Z
        </a>
        <span style={{ color: C.border }} aria-hidden="true">
          {' · '}
        </span>
        <a
          href="https://unsplash.com/?utm_source=syrian-cloud-computing&utm_medium=referral"
          target="_blank"
          rel="noopener noreferrer"
          style={s.introCloudCreditLink}
        >
          Unsplash
        </a>
      </figcaption>
    </figure>
  );
}
