'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';

import HomeButton from '../../ui/HomeButton/HomeButton';
import HOmeTittle from '../../ui/HomeTitle/HOmeTittle';
import Image from 'next/image';

import adventure from '@/public/images/Home/adventure.png';
import precision from '@/public/images/Home/precision.png';
import culture from '@/public/images/Home/culture.png';

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Button animation
      gsap.from('.about-btn', {
        y: -40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          once: true,
        },
      });

      // Title + description
      gsap.from('.about-title', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-title',
          start: 'top 85%',
          once: true,
        },
      });

      // Images animation
      gsap.from('.about-image', {
        scale: 0.95,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.about-images',
          start: 'top 80%',
          once: true,
        },
      });

      // Text overlays
      gsap.from('.about-text', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.about-images',
          start: 'top 75%',
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      {/* Button */}
      <div className="about-btn">
        <HomeButton text={t("aboutUs")} />
      </div>

      {/* Title */}
      <div className="about-title">
        <HOmeTittle
          title={t("storyBehindMontero")}
          description={t("storyBehindMonteroDesc")}
        />
      </div>

      {/* Images */}
      <div className="max-w-7xl mx-auto px-4 pt-10 pb-12 about-images">
        <div className="flex flex-col md:flex-row gap-4">

          {/* IMAGE 1 */}
          <div className="relative flex-1 h-[420px] overflow-hidden about-image">
            <Image src={adventure} alt="Adventure" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white max-w-xs about-text">
              <h3 className="text-2xl ">{t("adventure")}</h3>
              <p className="text-sm text-gray-200 mt-1 font-body font-extralight">
                {t("adventureDesc")}
              </p>
            </div>
          </div>

          {/* IMAGE 2 */}
          <div className="relative flex-1 h-[420px] overflow-hidden about-image">
            <Image src={precision} alt="Precision" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white max-w-xs about-text">
              <h3 className="text-2xl">{t("precision")}</h3>
              <p className="text-sm text-gray-200 mt-1 font-body font-extralight">
                {t("precisionDesc")}
              </p>
            </div>
          </div>
        </div>

        {/* IMAGE 3 */}
        <div className="relative h-[420px] mt-4 overflow-hidden about-image">
          <Image src={culture} alt="Culture" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white max-w-xs about-text">
            <h3 className="text-2xl">{t("culture")}</h3>
            <p className="text-sm text-gray-200 mt-1 font-body font-extralight">
              {t("cultureDesc")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
