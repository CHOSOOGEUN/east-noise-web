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
    status: { ko: 'App Store 출시', en: 'On the App Store' },
    accent: '#FF6B9D',
    links: { web: '/luvit', ios: 'https://apps.apple.com/kr/app/%EB%9F%AC%EB%B9%97-luvit/id6762438141' },
    copy: {
      ko: {
        name: '러빗 (Luvit)',
        tagline: '둘만의 우주, 매일 하나의 미션',
        description: '매일 9시, 커플에게 미션 한 개. 비밀스럽게 수행하고, 상대 미션은 추측. 자정에 결과 공개. 토끼 두 마리가 사는 우주선이 우리 둘만의 작은 공간이에요.',
      },
      en: {
        name: 'Luvit',
        tagline: 'A tiny universe, one mission a day',
        description: 'Every 9 PM, one mission lands in your couple\'s spaceship. Carry it out in secret while guessing your partner\'s. Midnight reveals everything. Two rabbits live in a room that belongs only to the two of you.',
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
