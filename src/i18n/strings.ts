export const strings = {
  ko: {
    siteTitle: 'East Noise',
    siteDescription: '경기 수원에서 출발한 인디 앱 스튜디오',
    nav: { langSwitch: 'EN' },
    hero: {
      eyebrow: 'Indie App Studio',
      title: '작지만\n계속 만드는 사람들',
      lead: 'East Noise 는 사람들의 일상에 살짝 끼어드는 작은 앱들을 만듭니다. 커플, 친구, 그리고 자기 자신을 위한 도구.',
    },
    apps: {
      heading: '지금 만드는 것',
      cta: '자세히',
    },
    about: {
      heading: '회사',
      body: 'East Noise (동방의 소음) 는 조수근과 이유석 두 명이 만든 인디 앱 스튜디오입니다. 출시한 앱은 작지만 매일 사용되는 것을 목표로 합니다.',
      stats: [
        { label: '설립', value: '2026' },
        { label: '본사', value: '경기 수원' },
        { label: '출시 앱', value: '3' },
      ],
    },
    legal: {
      heading: '법인 정보',
      rows: [
        { label: 'Legal Entity', value: 'East Noise' },
        { label: 'D-U-N-S Number', value: '696554188' },
        { label: '본사', value: '경기도 수원시 장안구' },
      ],
    },
    contact: {
      heading: '연락',
      email: 'eastnoise26@gmail.com',
      copyright: '© 2026 East Noise',
    },
  },
  en: {
    siteTitle: 'East Noise',
    siteDescription: 'An indie app studio out of Suwon, Korea',
    nav: { langSwitch: 'KO' },
    hero: {
      eyebrow: 'Indie App Studio',
      title: 'Small things,\nshipped often',
      lead: 'East Noise builds small apps that quietly insert themselves into people\'s daily lives. Tools for couples, friends, and yourself.',
    },
    apps: {
      heading: 'Currently shipping',
      cta: 'Learn more',
    },
    about: {
      heading: 'Company',
      body: 'East Noise is a two-person indie app studio based in Suwon, Korea, founded by Soogeun Cho and Yuseok Lee. Our apps are small but aim to be used daily.',
      stats: [
        { label: 'Founded', value: '2026' },
        { label: 'HQ', value: 'Suwon, KR' },
        { label: 'Apps', value: '3' },
      ],
    },
    legal: {
      heading: 'Legal',
      rows: [
        { label: 'Legal Entity', value: 'East Noise' },
        { label: 'D-U-N-S Number', value: '696554188' },
        { label: 'HQ', value: 'Jangan-gu, Suwon-si, Gyeonggi-do, KR' },
      ],
    },
    contact: {
      heading: 'Contact',
      email: 'eastnoise26@gmail.com',
      copyright: '© 2026 East Noise',
    },
  },
} as const;

export type Locale = keyof typeof strings;
