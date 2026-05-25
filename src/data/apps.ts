import type { Locale } from '../i18n/strings';

interface AppCopy {
  name: string;
  tagline: string;
  description: string;
}

export interface App {
  slug: string;
  status: { ko: string; en: string };
  accent: string;
  links?: { ios?: string; android?: string; web?: string };
  copy: Record<Locale, AppCopy>;
}

export const apps: App[] = [
  {
    slug: 'luvit',
    status: { ko: 'iOS 출시 준비 중', en: 'Coming soon to iOS' },
    accent: '#ec4899',
    copy: {
      ko: {
        name: 'Luvit',
        tagline: '커플을 위한 데일리 미션',
        description: '하루에 한 개의 미션을 받고, 파트너의 미션을 추측하며 가까워지는 작은 게임. 커플의 작은 일상에 끼어드는 우주선 룸.',
      },
      en: {
        name: 'Luvit',
        tagline: 'Daily missions for couples',
        description: 'Get one mission a day, guess your partner\'s, and grow closer through small playful interactions. A tiny spaceship room for couples.',
      },
    },
  },
  {
    slug: 'pickie',
    status: { ko: 'App Store 출시 임박', en: 'App Store soon' },
    accent: '#a855f7',
    copy: {
      ko: {
        name: 'Pickie',
        tagline: '친구들과 함께 고르는 것들',
        description: '뭐 먹지? 어디 가지? 친구들이랑 같이 후보를 모아 한 번에 정하는 결정 앱. 영어권 사용자 대상.',
      },
      en: {
        name: 'Pickie',
        tagline: 'Decisions, with your people',
        description: 'What to eat? Where to go? Pool options with friends and pick together — built for English-speaking users.',
      },
    },
  },
  {
    slug: 'seed',
    status: { ko: 'TestFlight', en: 'TestFlight' },
    accent: '#22A06B',
    links: { web: '/seed' },
    copy: {
      ko: {
        name: 'Seed.',
        tagline: '매일 인증, 식물이 자라요',
        description: '짧은 영상으로 하루의 루틴을 인증하면 가상 식물이 단계별로 자라고 코인이 쌓여요. 솔로 자기관리 앱.',
      },
      en: {
        name: 'Seed.',
        tagline: 'Log your day, grow your plant',
        description: 'Log each daily routine with a short clip — a tiny plant grows through stages and coins build up. A solo self-care app.',
      },
    },
  },
  {
    slug: 'heum',
    status: { ko: '베타', en: 'Beta' },
    accent: '#3b82f6',
    copy: {
      ko: {
        name: '흠 (heum)',
        tagline: '자학 진단 플랫폼',
        description: '오늘 내 ㅂㅅ력은 몇 점일까. 짧고 웃긴 자가진단 테스트들을 모아둔 플랫폼.',
      },
      en: {
        name: 'heum',
        tagline: 'Self-deprecating quizzes',
        description: 'How dumb am I today? A platform of short, funny self-diagnostic quizzes. Korean-language only.',
      },
    },
  },
];
