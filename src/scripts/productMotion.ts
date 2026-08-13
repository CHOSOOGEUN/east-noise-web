import { animate, createAnimatable, createScope, onScroll, stagger } from 'animejs';

type MotionScope = ReturnType<typeof createScope>;

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';
const HOVER_QUERY = '(hover: hover) and (pointer: fine)';
const MOTION_BOOTING_CLASS = 'motion-booting';
const MOTION_READY_CLASS = 'motion-ready';

const disableDocumentMotion = () => {
  document.documentElement.classList.remove(MOTION_BOOTING_CLASS, MOTION_READY_CLASS);
};

const revealImmediately = (root: HTMLElement) => {
  root.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)').forEach((item) => {
    item.classList.add('is-visible');
  });
};

const animateReveals = (root: HTMLElement, scope: MotionScope) => {
  const items = [...root.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)')];
  if (!items.length) return () => {};

  const reveal = (item: HTMLElement) => {
    scope.execute(() =>
      animate(item, {
        opacity: { from: 0, to: 1 },
        y: { from: '1.4rem', to: 0 },
        duration: 760,
        ease: 'outExpo',
        onComplete: () => item.classList.add('is-visible'),
      }),
    );
  };

  if (!('IntersectionObserver' in window)) {
    items.forEach(reveal);
    return () => {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const item = entry.target as HTMLElement;
        reveal(item);
        observer.unobserve(item);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -7% 0px' },
  );

  items.forEach((item) => observer.observe(item));
  return () => observer.disconnect();
};

const bindPressFeedback = (root: HTMLElement) => {
  const cleanups: Array<() => void> = [];
  const pressTargets = root.querySelectorAll<HTMLElement>(
    '.primary-cta, .hero-cta, .text-link, .contact-link, .closing-actions a, .other-products a',
  );

  pressTargets.forEach((target) => {
    const pressMotion = createAnimatable(target, {
      scale: 320,
      ease: 'out(4)',
    });
    const press = () => {
      pressMotion.scale(0.975, 90, 'out(3)');
    };
    const release = () => {
      pressMotion.scale(1, 320, 'out(4)');
    };

    target.addEventListener('pointerdown', press);
    target.addEventListener('pointerup', release);
    target.addEventListener('pointercancel', release);
    target.addEventListener('pointerleave', release);
    cleanups.push(() => {
      target.removeEventListener('pointerdown', press);
      target.removeEventListener('pointerup', release);
      target.removeEventListener('pointercancel', release);
      target.removeEventListener('pointerleave', release);
    });
  });

  if (matchMedia(HOVER_QUERY).matches) {
    root.querySelectorAll<HTMLElement>('.product-rail a').forEach((link) => {
      const icon = link.querySelector<HTMLElement>('.rail-icon');
      if (!icon) return;
      const iconMotion = createAnimatable(icon, {
        y: 420,
        scale: 420,
        ease: 'out(4)',
      });

      const enter = () => {
        iconMotion.y(-3, 360, 'out(4)').scale(1.08, 360, 'out(4)');
      };
      const leave = () => {
        iconMotion.y(0, 420, 'out(4)').scale(1, 420, 'out(4)');
      };

      link.addEventListener('pointerenter', enter);
      link.addEventListener('pointerleave', leave);
      cleanups.push(() => {
        link.removeEventListener('pointerenter', enter);
        link.removeEventListener('pointerleave', leave);
      });
    });
  }

  return () => cleanups.forEach((cleanup) => cleanup());
};

const animateHomeIntro = (root: HTMLElement) => {
  const introCopy = root.querySelectorAll<HTMLElement>(
    '.hero-eyebrow, .hero h1 span, .hero-copy > p span, .primary-cta',
  );
  const livePanel = root.querySelector<HTMLElement>('.hero-live');
  const world = root.querySelector<HTMLElement>('.world-viewport img');
  const railItems = root.querySelectorAll<HTMLElement>('.product-rail a');

  animate(introCopy, {
    opacity: { from: 0, to: 1 },
    y: { from: '1.15rem', to: 0 },
    duration: 780,
    delay: stagger(65, { start: 40 }),
    ease: 'outExpo',
  });

  if (livePanel) {
    animate(livePanel, {
      opacity: { from: 0, to: 1 },
      x: { from: '1rem', to: 0 },
      scale: { from: 0.985, to: 1 },
      duration: 820,
      delay: 180,
      ease: 'outExpo',
    });
  }

  if (world) {
    animate(world, {
      opacity: { from: 0, to: 1 },
      y: { from: '1.75rem', to: 0 },
      scale: { from: 0.975, to: 1 },
      duration: 1120,
      delay: 160,
      ease: 'outExpo',
    });
  }

  animate(railItems, {
    opacity: { from: 0, to: 1 },
    y: { from: '1rem', to: 0 },
    duration: 720,
    delay: stagger(55, { start: 360 }),
    ease: 'outExpo',
  });
};

const animateHomeScroll = (root: HTMLElement) => {
  const hero = root.querySelector<HTMLElement>('.hero');
  const worldViewport = root.querySelector<HTMLElement>('.world-viewport');
  if (hero && worldViewport) {
    animate(worldViewport, {
      y: { from: 0, to: '-2.1rem' },
      ease: 'linear',
      autoplay: onScroll({
        target: hero,
        enter: 'top top',
        leave: 'top bottom',
        sync: 0.12,
      }),
    });
  }

  root.querySelectorAll<HTMLElement>('.product-story').forEach((story) => {
    const visualLayers = story.querySelectorAll<HTMLElement>(
      '.brand-poster, .detail-card, .heum-studio-screen, .heum-mobile-card',
    );
    if (!visualLayers.length) return;

    visualLayers.forEach((layer, index) => {
      animate(layer, {
        y: {
          from: index % 2 === 0 ? '1.15rem' : '2rem',
          to: index % 2 === 0 ? '-1rem' : '-1.5rem',
        },
        ease: 'linear',
        autoplay: onScroll({
          target: story,
          enter: 'bottom top',
          leave: 'top bottom',
          sync: 0.18,
        }),
      });
    });
  });
};

const animateProductIntro = (root: HTMLElement) => {
  const copy = root.querySelectorAll<HTMLElement>(
    '.hero-copy .eyebrow, .hero-copy h1, .hero-copy h2 span, .hero-body, .status, .hero-actions',
  );
  const world = root.querySelector<HTMLElement>('.hero-world img');
  const stats = root.querySelectorAll<HTMLElement>('.hero-stats > div');

  animate(copy, {
    opacity: { from: 0, to: 1 },
    y: { from: '1.2rem', to: 0 },
    duration: 760,
    delay: stagger(60, { start: 40 }),
    ease: 'outExpo',
  });

  if (world) {
    animate(world, {
      opacity: { from: 0, to: 1 },
      y: { from: '1.6rem', to: 0 },
      scale: { from: 0.975, to: 1 },
      duration: 1080,
      delay: 140,
      ease: 'outExpo',
    });
  }

  animate(stats, {
    opacity: { from: 0, to: 1 },
    y: { from: '0.8rem', to: 0 },
    duration: 700,
    delay: stagger(70, { start: 320 }),
    ease: 'outExpo',
  });
};

const animateProductScroll = (root: HTMLElement) => {
  const hero = root.querySelector<HTMLElement>('.product-hero');
  const world = root.querySelector<HTMLElement>('.hero-world');
  if (hero && world) {
    animate(world, {
      y: { from: 0, to: '-1.8rem' },
      ease: 'linear',
      autoplay: onScroll({
        target: hero,
        enter: 'top top',
        leave: 'top bottom',
        sync: 0.12,
      }),
    });
  }

  root.querySelectorAll<HTMLElement>('.screen-shot').forEach((screen, index) => {
    animate(screen, {
      y: { from: index === 0 ? '1.5rem' : '2.5rem', to: index === 0 ? '-1rem' : '-1.5rem' },
      ease: 'linear',
      autoplay: onScroll({
        target: screen,
        enter: 'bottom top',
        leave: 'top bottom',
        sync: 0.18,
      }),
    });
  });
};

const createMotionScope = (
  root: HTMLElement,
  intro: (root: HTMLElement) => void,
  scroll: (root: HTMLElement) => void,
) => {
  const scope = createScope({
    root,
    mediaQueries: { reduced: REDUCED_MOTION_QUERY },
  });

  scope.add((self) => {
    if (self?.matches.reduced) {
      disableDocumentMotion();
      root.removeAttribute('data-motion-active');
      revealImmediately(root);
      return;
    }

    if (!document.documentElement.classList.contains(MOTION_BOOTING_CLASS)) {
      root.removeAttribute('data-motion-active');
      revealImmediately(root);
      return;
    }

    document.documentElement.classList.replace(MOTION_BOOTING_CLASS, MOTION_READY_CLASS);
    root.setAttribute('data-motion-active', 'true');
    intro(root);
    scroll(root);
    const cleanupReveals = animateReveals(root, scope);
    const cleanupPress = bindPressFeedback(root);

    return () => {
      cleanupReveals();
      cleanupPress();
      document.documentElement.classList.remove(MOTION_READY_CLASS);
      root.removeAttribute('data-motion-active');
    };
  });

  return () => scope.revert();
};

export const initHomeMotion = (root: HTMLElement) =>
  createMotionScope(root, animateHomeIntro, animateHomeScroll);

export const initProductMotion = (root: HTMLElement) =>
  createMotionScope(root, animateProductIntro, animateProductScroll);
