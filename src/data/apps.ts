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
    status: { ko: 'App Store 심사 중', en: 'In App Store review' },
    accent: '#7B5BFF',
    links: { web: '/pickie' },
    copy: {
      ko: {
        name: 'Pickie',
        tagline: '익명 친구 픽, 매일 9시',
        description: '친구 크루에서 한 명을 익명으로 픽. 다음 날 저녁 8시에 결과 공개. 누가 1등인지는 보여요. 누가 표를 줬는지는 비밀.',
      },
      en: {
        name: 'Pickie',
        tagline: 'Anonymous crew picks, every 9 PM',
        description: 'Pick one in your crew, anonymously. Counts go public the next day at 8 PM — votes stay private. Crew of 7-50 close friends only.',
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
