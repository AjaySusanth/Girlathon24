import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from 'lenis'


const useRoadmapScrollAnimation = () => {
  /*
     useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    const pinnedSection = document.querySelector(".pinned");
    const stickyHeader = document.querySelector(".sticky-header");
    const cards = document.querySelectorAll(".card");
    const progressBarContainer = document.querySelector(".progress-bar");
    const progressBar = document.querySelector(".progress");
    const indicesContainer = document.querySelector(".indices");
    const indices = document.querySelectorAll(".index");

    const cardCount = cards.length;
    const pinnedHeight = window.innerHeight * (cardCount + 1);

const startRotations = [0, 8, 4, -4, -8, 0];
const endRotations   = [-8, -4, 0, 0, 4, 8];

    const progressColors = ["#320F21", "#320F21", "#320F21", "#320F21"];

    cards.forEach((card, index) => {
      gsap.set(card, { rotation: startRotations[index] });
    });

    let isProgressBarVisible = false;
    let currentActiveIndex = -1;

    function animateIndexOpacity(newIndex) {
      if (newIndex !== currentActiveIndex) {
        indices.forEach((index, i) => {
          gsap.to(index, {
            opacity: i === newIndex ? 1 : 0.25,
            duration: 0.5,
            ease: "power2.out",
          });
        });
        currentActiveIndex = newIndex;
      }
    }

    function showProgressAndIndices() {
      gsap.to([progressBarContainer, indicesContainer], {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });
      isProgressBarVisible = true;
    }

    function hideProgressAndIndices() {
      gsap.to([progressBarContainer, indicesContainer], {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });
      isProgressBarVisible = false;
      animateIndexOpacity(-1);
    }
    
    const trigger = ScrollTrigger.create({
      markers:true,
      trigger: pinnedSection,
      start: "top top",
      end: `+=${pinnedHeight}`,
      pin: true,
      pinSpacing: true,
      onLeave: hideProgressAndIndices,
      onEnterBack: showProgressAndIndices,
      onUpdate: (self) => {
        const progress = self.progress * (cardCount + 1);
        const currentCard = Math.floor(progress);

        if (progress <= 1) {
          gsap.to(stickyHeader, {
            opacity: 1 - progress,
            duration: 0.1,
            ease: "none",
          });
        } else {
          gsap.set(stickyHeader, { opacity: 0 });
        }

        if (progress > 1 && !isProgressBarVisible) {
          showProgressAndIndices();
        } else if (progress <= 1 && isProgressBarVisible) {
          hideProgressAndIndices();
        }

        let progressHeight = 0;
        let colorIndex = -1;
        if (progress > 1) {
          progressHeight = ((progress - 1) / cardCount) * 100;
          colorIndex = Math.min(Math.floor(progress - 1), cardCount - 1);
        }

        gsap.to(progressBar, {
          height: `${progressHeight}%`,
          backgroundColor: progressColors[colorIndex],
          duration: 0.3,
          ease: "power1.out",
        });

        if (isProgressBarVisible) {
          animateIndexOpacity(colorIndex);
        }

        cards.forEach((card, index) => {
          if (index < currentCard) {
            gsap.set(card, {
              top: "50%",
              rotation: endRotations[index],
            });
          } else if (index === currentCard) {
            const cardProgress = progress - currentCard;
            const newTop = gsap.utils.interpolate(150, 50, cardProgress);
            const newRotation = gsap.utils.interpolate(
              startRotations[index],
              endRotations[index],
              cardProgress
            );
            gsap.set(card, {
              top: `${newTop}%`,
              rotation: newRotation,
            });
          }
        });
      },
    });
     return () => {
        lenis.destroy();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
},[])*/

 useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    const pinnedSection = document.querySelector(".pinned");
    const stickyHeader = document.querySelector(".sticky-header");
    const cards = document.querySelectorAll(".card");
    const progressBarContainer = document.querySelector(".progress-bar");
    const progressBar = document.querySelector(".progress");
    const indicesContainer = document.querySelector(".indices");
    const indices = document.querySelectorAll(".index");

    const cardCount = cards.length;
    const pinnedHeight = window.innerHeight * (cardCount + 1);
    const isMobile = window.innerWidth <= 900;

    // Adjusted rotations for better visual effect
    const startRotations = [0, 8, 4, -4, -8, 0];
    const endRotations = [-8, -4, 0, 0, 4, 8];

    const progressColors = ["#320F21", "#320F21", "#320F21", "#320F21"];

    // Set initial positions for cards - different for mobile vs desktop
    cards.forEach((card, index) => {
      // Set initial rotation
      gsap.set(card, { rotation: startRotations[index] });
      
      // Set initial position off-screen
      if (isMobile) {
        gsap.set(card, { top: '150%' });
      } else {
        gsap.set(card, { top: '150%' });
      }
    });

    let isProgressBarVisible = false;
    let currentActiveIndex = -1;

    function animateIndexOpacity(newIndex) {
      if (newIndex !== currentActiveIndex) {
        indices.forEach((index, i) => {
          gsap.to(index, {
            opacity: i === newIndex ? 1 : 0.25,
            duration: 0.5,
            ease: "power2.out",
          });
        });
        currentActiveIndex = newIndex;
      }
    }

    function showProgressAndIndices() {
      gsap.to([progressBarContainer, indicesContainer], {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });
      isProgressBarVisible = true;
    }

    function hideProgressAndIndices() {
      gsap.to([progressBarContainer, indicesContainer], {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });
      isProgressBarVisible = false;
      animateIndexOpacity(-1);
    }

    // Initial state setup - make sure nothing appears before scrolling
    gsap.set([progressBarContainer, indicesContainer], { opacity: 0 });
    
    // Create the scroll trigger
    const trigger = ScrollTrigger.create({
      trigger: pinnedSection,
      start: "top top", // Start at the top of the viewport
      end: `+=${pinnedHeight}`,
      pin: true,
      pinSpacing: true,
      onLeave: hideProgressAndIndices,
      onEnterBack: showProgressAndIndices,
      onUpdate: (self) => {
        const progress = self.progress * (cardCount + 1);
        const currentCard = Math.floor(progress);

        // Handle header fade out
        if (progress <= 1) {
          gsap.to(stickyHeader, {
            opacity: 1 - progress,
            duration: 0.1,
            ease: "none",
          });
        } else {
          gsap.set(stickyHeader, { opacity: 0 });
        }

        // Show/hide progress bar based on scroll position
        if (progress > 1 && !isProgressBarVisible) {
          showProgressAndIndices();
        } else if (progress <= 1 && isProgressBarVisible) {
          hideProgressAndIndices();
        }

        // Update progress bar height and color
        let progressHeight = 0;
        let colorIndex = -1;
        if (progress > 1) {
          progressHeight = ((progress - 1) / cardCount) * 100;
          colorIndex = Math.min(Math.floor(progress - 1), cardCount - 1);
        }

        gsap.to(progressBar, {
          height: `${progressHeight}%`,
          backgroundColor: progressColors[colorIndex],
          duration: 0.3,
          ease: "power1.out",
        });

        if (isProgressBarVisible) {
          animateIndexOpacity(colorIndex);
        }

        // Animate cards based on scroll position
        cards.forEach((card, index) => {
          // Card position parameters
          const topStart = isMobile ? 150 : 150;
          const topEnd = isMobile ? 50 : 50;
          
          if (index < currentCard) {
            // Cards that have already been animated to final position
            gsap.set(card, {
              top: `${topEnd}%`,
              rotation: endRotations[index],
            });
          } else if (index === currentCard) {
            // Currently animating card
            const cardProgress = progress - currentCard;
            const newTop = gsap.utils.interpolate(topStart, topEnd, cardProgress);
            const newRotation = gsap.utils.interpolate(
              startRotations[index],
              endRotations[index],
              cardProgress
            );
            gsap.set(card, {
              top: `${newTop}%`,
              rotation: newRotation,
            });
          } else {
            // Cards that haven't been animated yet - keep them off screen
            gsap.set(card, {
              top: `${topStart}%`,
              rotation: startRotations[index],
            });
          }
        });
      },
    });

    return () => {
      // Clean up
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
};
export default useRoadmapScrollAnimation

