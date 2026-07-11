import type { Locale } from '../i18n/strings';

interface AppCopy {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  proof: string;
}

export type AppGroup = 'live' | 'review' | 'lab' | 'ops';

export interface App {
  slug: string;
  group: AppGroup;
  status: Record<Locale, string>;
  kind: Record<Locale, string>;
  accent: string;
  links?: { ios?: string; android?: string; web?: string; repo?: string };
  copy: Record<Locale, AppCopy>;
}

export const apps: App[] = [
  {
    slug: 'luvit',
    group: 'live',
    status: { ko: 'App Store 공개 · v1.0.2', en: 'Live on App Store · v1.0.2' },
    kind: { ko: '커플 데일리 미션 앱', en: 'Couple daily mission app' },
    accent: '#FF6B9D',
    links: {
      web: '/luvit',
      ios: 'https://apps.apple.com/kr/app/%EB%9F%AC%EB%B9%97-luvit/id6762438141',
    },
    copy: {
      ko: {
        name: '러빗 (Luvit)',
        shortName: 'Luvit',
        tagline: '매일 9시, 둘만의 미션이 도착합니다.',
        description: '커플이 각자 비밀 미션을 수행하고, 상대의 미션을 추측한 뒤 자정에 결과를 확인하는 관계 루틴 앱입니다.',
        proof: 'Apple 공개 lookup 기준 v1.0.2, 2026-06-03 업데이트.',
      },
      en: {
        name: 'Luvit',
        shortName: 'Luvit',
        tagline: 'A private mission for two, every 9 PM.',
        description: 'A relationship routine app where couples complete secret missions, guess each other’s mission, and reveal the result at midnight.',
        proof: 'Public Apple lookup confirms v1.0.2, updated 2026-06-03.',
      },
    },
  },
  {
    slug: 'seed',
    group: 'live',
    status: { ko: 'App Store 공개 · v1.0', en: 'Live on App Store · v1.0' },
    kind: { ko: '솔로 자기관리 앱', en: 'Solo self-care app' },
    accent: '#22A06B',
    links: {
      web: '/seed',
      ios: 'https://apps.apple.com/kr/app/seed-%EB%A7%A4%EC%9D%BC-%EC%9E%90%EB%9D%BC%EB%8A%94-%EC%8B%9D%EB%AC%BC/id6772765829',
    },
    copy: {
      ko: {
        name: 'Seed. 매일 자라는 식물',
        shortName: 'Seed',
        tagline: '짧은 영상 인증으로 식물이 자랍니다.',
        description: '매일의 루틴을 2-4초 영상으로 인증하면 식물이 자라고, 하루 합본과 기록이 남는 자기관리 앱입니다.',
        proof: 'Apple 공개 페이지 기준 2026-06-27 출시, 건강 및 피트니스 카테고리.',
      },
      en: {
        name: 'Seed.',
        shortName: 'Seed',
        tagline: 'Verify a routine, grow a plant.',
        description: 'A self-care app where short daily video check-ins grow a virtual plant and become a private routine archive.',
        proof: 'Public Apple page confirms release on 2026-06-27 in Health & Fitness.',
      },
    },
  },
  {
    slug: 'heum',
    group: 'live',
    status: { ko: '웹 운영 중 · heum.cloud', en: 'Live web service · heum.cloud' },
    kind: { ko: '생활 패턴 진단 웹', en: 'Lifestyle pattern quiz web' },
    accent: '#111111',
    links: { web: 'https://heum.cloud' },
    copy: {
      ko: {
        name: '흠 (heum)',
        shortName: 'heum',
        tagline: '한국형 생활 패턴 진단.',
        description: '자조 유머와 일상 습관을 바탕으로 미루기, 회피, 답장 불안 같은 생활 패턴을 가볍게 살펴보는 웹 서비스입니다.',
        proof: 'heum.cloud 실제 응답 200, 진단/방법론/편집 원칙/읽을거리 경로 운영 중.',
      },
      en: {
        name: 'heum',
        shortName: 'heum',
        tagline: 'Korean lifestyle pattern quizzes.',
        description: 'A Korean web service using self-deprecating humor to turn habits like procrastination, avoidance, and reply anxiety into shareable quizzes.',
        proof: 'heum.cloud returned 200 across core trust and content routes.',
      },
    },
  },
  {
    slug: 'nambona',
    group: 'live',
    status: { ko: '웹 운영 중', en: 'Live web service' },
    kind: { ko: '익명 첫인상 수집 웹', en: 'Anonymous impression collection web' },
    accent: '#FF681F',
    links: { web: 'https://nambona.eastnoise26.chatgpt.site' },
    copy: {
      ko: {
        name: '남보나',
        shortName: '남보나',
        tagline: '친구들이 고른 다섯 개의 키워드를 모읍니다.',
        description: '친구들이 익명으로 고른 키워드를 모아 남들이 보는 나를 결과 카드로 보여주는 참여형 웹 서비스입니다.',
        proof: '운영 주소 응답 200 확인, Cloudflare D1 기반으로 서비스 중.',
      },
      en: {
        name: 'Nambona',
        shortName: 'Nambona',
        tagline: 'Collect five words your friends choose about you.',
        description: 'An anonymous participation web service that turns friends’ selected keywords into a shareable impression card.',
        proof: 'Live URL returned 200; service runs with Cloudflare D1.',
      },
    },
  },
  {
    slug: 'alpha',
    group: 'lab',
    status: { ko: '모바일 프로토타입 개발 중', en: 'Mobile prototype in development' },
    kind: { ko: '루틴·회고 모바일 실험', en: 'Routine/reflection mobile experiment' },
    accent: '#5F7CFF',
    links: { repo: '/Users/josugeun/Projects/East-Noise/alpha' },
    copy: {
      ko: {
        name: 'ALPHA',
        shortName: 'ALPHA',
        tagline: '루틴, 마감, 회고 상태를 로컬로 다루는 모바일 실험.',
        description: 'Expo React Native 기반으로 루틴과 reflection 상태를 AsyncStorage에 저장하는 네이티브 앱 프로토타입입니다.',
        proof: '로컬 repo 기준 Expo app, bundle com.eastnoise.alpha, generated iOS project 보유.',
      },
      en: {
        name: 'ALPHA',
        shortName: 'ALPHA',
        tagline: 'A local routine and reflection mobile experiment.',
        description: 'An Expo React Native prototype with native screens, AsyncStorage-backed routine, closing, and reflection state.',
        proof: 'Local repo confirms Expo app, bundle com.eastnoise.alpha, with generated iOS project.',
      },
    },
  },
  {
    slug: 'buying-service',
    group: 'ops',
    status: { ko: '내부 운영 시스템 개발 중', en: 'Internal operating system in development' },
    kind: { ko: '구매대행 자동화·검증 시스템', en: 'Buying-agent automation and validation system' },
    accent: '#FF6A00',
    links: { repo: '/Users/josugeun/Projects/East-Noise/buyingservice' },
    copy: {
      ko: {
        name: 'BuyingService',
        shortName: 'Buying OS',
        tagline: '구매대행을 대량 등록이 아니라 검증 시스템으로 다룹니다.',
        description: '규정 리스크, 예상 마진, 경쟁 강도, 콘텐츠 적합성, 주문 정산까지 나눠 보는 구매대행 운영 자동화 저장소입니다.',
        proof: '로컬 repo 기준 CategoryScout, readiness, marketplace export, ops dashboard 스크립트 보유.',
      },
      en: {
        name: 'BuyingService',
        shortName: 'Buying OS',
        tagline: 'Buying-agent work treated as a validation system, not a listing dump.',
        description: 'An internal operating system for compliance, margin, competition, content fit, marketplace export, and order reconciliation.',
        proof: 'Local repo includes CategoryScout, readiness checks, marketplace export, and ops dashboard scripts.',
      },
    },
  },
];
