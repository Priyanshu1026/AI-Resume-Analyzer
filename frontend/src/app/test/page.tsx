"use client";
import { useEffect } from "react";
import Header from "@/components/landingPage/header";
import Hero from "@/components/landingPage/hero";
import Features from "@/components/landingPage/features";
import Stats from "@/components/landingPage/stats";
import FinalCTA from "@/components/landingPage/finalCTA";
import Footer from "@/components/landingPage/footer"
import SampleResults from "@/components/landingPage/analysis";
export default function Home() {
  useEffect(() => {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();

        const link = e.currentTarget as HTMLAnchorElement;
        const href = link.getAttribute('href');

        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });


    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "translate-y-8");
        }
      });
    }, observerOptions);

    document.querySelectorAll('.feature-card').forEach(card => {
      card.classList.add("opacity-0", "translate-y-8", "transition-all", "duration-500");
      observer.observe(card);
    });

    document.querySelectorAll('.cta-button').forEach(button => {
      button.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLElement;
        target.style.transform = 'scale(0.95)';
        setTimeout(() => {
          target.style.transform = 'scale(1)';
        }, 150);
      });
    });
  }, []);
  return (
    <>
      <Header />
      <main>
        <Hero/>
        {/* <SampleResults/> */}
        <Features/>
        {/* <Stats/> */}
        <FinalCTA/>
      </main>
      <Footer/>
    </>
  );
}





