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
    status: { ko: 'App Store 공개 · v1.0.4', en: 'Live on App Store · v1.0.4' },
    kind: { ko: '커플 데일리 미션 앱', en: 'Couple daily mission app' },
    accent: '#FF6B9D',
    links: {
      web: '/luvit',
      ios: 'https://apps.apple.com/kr/app/%EB%9F%AC%EB%B9%97-luvit/id6762438141',
    },
    copy: {
      ko: {
        name: '러빗-Luvit',
        shortName: 'Luvit',
        tagline: '매일 오전 9시, 둘만의 미션이 도착합니다.',
        description: '커플이 각자 미션을 수행하고, 다음 날 서로의 결과를 확인하며 둘의 방과 추억을 함께 키우는 관계 루틴 앱입니다.',
        proof: 'App Store 공개 버전은 1.0.4이며, 오전 9시 미션, 다음 날 상호 판정, 공동 30P 흐름을 운영합니다.',
      },
      en: {
        name: 'Luvit',
        shortName: 'Luvit',
        tagline: 'A private mission for two, every morning at 9.',
        description: 'A relationship routine app where couples complete separate missions, review each other’s result the next day, and grow one shared room and memory.',
        proof: 'Version 1.0.4 is live on the App Store with a 9 AM mission, next-day mutual review, and 30 shared points.',
      },
    },
  },
  {
    slug: 'seed',
    group: 'live',
    status: { ko: 'App Store · Google Play 공개', en: 'Live on App Store and Google Play' },
    kind: { ko: '영상 루틴 기록 앱', en: 'Video routine journal' },
    accent: '#22A06B',
    links: {
      web: '/seed',
      ios: 'https://apps.apple.com/kr/app/seed-%EB%A3%A8%ED%8B%B4%EC%9C%BC%EB%A1%9C-%ED%82%A4%EC%9A%B0%EB%8A%94-%EC%8B%9D%EB%AC%BC/id6772765829',
      android: 'https://play.google.com/store/apps/details?id=com.eastnoise.seed',
    },
    copy: {
      ko: {
        name: 'Seed. 루틴으로 키우는 식물',
        shortName: 'Seed',
        tagline: '해낸 순간을 영상으로 남기고, 식물을 키웁니다.',
        description: '매일의 루틴을 2–4초 영상으로 인증하고, 실제로 해낸 순간과 함께 식물을 키우는 습관 기록 앱입니다.',
        proof: '2–4초 영상 인증, 8종 식물의 7단계 성장, Daily Story와 7일·30일·연간 회고를 제공합니다.',
      },
      en: {
        name: 'Seed. Grow a Plant with Routines',
        shortName: 'Seed',
        tagline: 'Record the moment you showed up and grow a plant.',
        description: 'A habit journal where 2–4 second daily video check-ins preserve what you did and grow a virtual plant.',
        proof: 'It provides 2–4 second check-ins, eight plants with seven stages, Daily Story, and 7-day, 30-day, and yearly reviews.',
      },
    },
  },
  {
    slug: 'heum',
    group: 'live',
    status: { ko: 'Season 01 · 반송 예정', en: 'Season 01 · Return Pending' },
    kind: { ko: '브라우저 네이티브 ARG', en: 'Browser-native ARG' },
    accent: '#174D80',
    links: { web: '/heum' },
    copy: {
      ko: {
        name: '흠 (heum)',
        shortName: 'heum',
        tagline: '보내지 않은 물건이 72시간 먼저 도착했습니다.',
        description: '평범한 배송조회에서 시작해 택배사, 약국, 보관함, 기사와 도시 기록을 대조하고 다음 상태를 바꾸는 연속형 브라우저 ARG입니다.',
        proof: 'Season 01 「반송 예정」은 프롤로그부터 6장까지 하나의 연속 세계로 이어집니다.',
      },
      en: {
        name: 'heum',
        shortName: 'heum',
        tagline: 'An unsent object arrived 72 hours early.',
        description: 'A serialized browser-native ARG that begins with parcel tracking, compares records across delivery, pharmacies, lockers, drivers, and the city, then changes the next state.',
        proof: 'Season 01, Return Pending, runs from a prologue through six chapters inside one continuous world.',
      },
    },
  },
  {
    slug: 'alpha-magazine',
    group: 'live',
    status: { ko: 'Instagram 발행 중', en: 'Publishing on Instagram' },
    kind: { ko: '자기통제 매거진', en: 'Self-control magazine' },
    accent: '#E44C42',
    links: { web: 'https://www.instagram.com/alpha.magazine.kr/' },
    copy: {
      ko: {
        name: 'ALPHA Magazine',
        shortName: 'ALPHA Mag.',
        tagline: '습관은 세게 찌르고, 사람은 망가뜨리지 않습니다.',
        description: '아침, 몸, 공간, 도파민처럼 일상에서 무너지는 자기통제를 짧은 문장과 바로 할 수 있는 행동으로 다루는 편집 매거진입니다.',
        proof: '@alpha.magazine.kr에서 자체 기획한 캐러셀을 발행하고 있습니다.',
      },
      en: {
        name: 'ALPHA Magazine',
        shortName: 'ALPHA Mag.',
        tagline: 'Challenge the habit without tearing down the person.',
        description: 'An editorial magazine turning everyday lapses in mornings, body, space, and dopamine into sharp language and one immediate action.',
        proof: 'Original editorial carousels are published through @alpha.magazine.kr.',
      },
    },
  },
  {
    slug: 'alpha',
    group: 'live',
    status: { ko: 'App Store · Google Play 공개 · v1.0.3', en: 'Live on App Store and Google Play · v1.0.3' },
    kind: { ko: '90일 자기통제 루틴 앱', en: '90-day self-discipline app' },
    accent: '#FF1B1F',
    links: {
      web: '/alpha',
      ios: 'https://apps.apple.com/kr/app/alpha-reforge/id6788264733',
      android: 'https://play.google.com/store/apps/details?id=com.eastnoise.alpha',
    },
    copy: {
      ko: {
        name: 'ALPHA',
        shortName: 'ALPHA',
        tagline: '흔들려도, 이어가라.',
        description: 'BASIC, STANDARD, HARD의 세 과정을 루틴과 기록으로 통과하며 90일 동안 자신의 기준을 다시 세우는 자기통제 앱입니다.',
        proof: 'iOS와 Android에서 각 30일인 세 과정, 하루 마감, 회고와 과정 재도전을 제공합니다.',
      },
      en: {
        name: 'ALPHA',
        shortName: 'ALPHA',
        tagline: 'Even when you waver, keep going.',
        description: 'A self-discipline app for passing BASIC, STANDARD, and HARD through routines and records while rebuilding your standards over 90 days.',
        proof: 'The iOS and Android apps provide three 30-day courses, daily close, reflection, and course retries.',
      },
    },
  },
  {
    slug: 'mystery-platform',
    group: 'lab',
    status: { ko: '플레이 가능한 웹 프로토타입', en: 'Playable web prototype' },
    kind: { ko: '웹 미스터리 플랫폼 실험', en: 'Web mystery platform experiment' },
    accent: '#8F2431',
    copy: {
      ko: {
        name: 'Mystery Platform',
        shortName: 'Mystery',
        tagline: '평범한 웹사이트를 탐색하는 행동이 수사가 됩니다.',
        description: '조용한 사건 카탈로그에서 게임을 고르고, 사건 세계관 안의 별도 가상 웹사이트로 들어가 단서를 찾는 플레이 가능한 프로토타입입니다.',
        proof: '첫 에피소드 「이스트 노이즈의 실종」의 세 단계 단서와 최종 추리 흐름이 구현돼 있습니다.',
      },
      en: {
        name: 'Mystery Platform',
        shortName: 'Mystery',
        tagline: 'Browsing an ordinary website becomes the investigation.',
        description: 'A playable prototype where players choose a case from a quiet catalog, then enter a separate fictional website to find its clues.',
        proof: 'The first episode, The Disappearance of East Noise, implements three clue stages and a final deduction.',
      },
    },
  },
  {
    slug: 'oneulchi',
    group: 'lab',
    status: { ko: 'iOS MVP 개발 중', en: 'iOS MVP in development' },
    kind: { ko: '오프라인 루틴 앱', en: 'Offline routine app' },
    accent: '#FF6B35',
    copy: {
      ko: {
        name: '오늘치',
        shortName: '오늘치',
        tagline: '지금 할 일을 끝내며 하루 100 오늘치를 쌓습니다.',
        description: '시간 순서의 루틴, 로컬 알림, 즉시 완료 피드백, 최근 7일 기록을 한 기기 안에서 다루는 오프라인 우선 iOS 앱입니다.',
        proof: '오늘·기록·설정 화면과 100 오늘치 점수, 핵심·전체 알림 흐름을 갖춘 MVP를 개발하고 있습니다.',
      },
      en: {
        name: 'Oneulchi',
        shortName: 'Oneulchi',
        tagline: 'Finish what is next and build a 100-point day.',
        description: 'An offline-first iOS app for time-ordered routines, local reminders, instant completion feedback, and a seven-day record.',
        proof: 'The MVP covers Today, History, Settings, a 100-point daily score, and key or full reminder modes.',
      },
    },
  },
  {
    slug: 'buying-service',
    group: 'ops',
    status: { ko: '내부 운영 시스템 개발 중', en: 'Internal operating system in development' },
    kind: { ko: '구매대행 운영 OS', en: 'Buying-agent operating system' },
    accent: '#FF6A00',
    copy: {
      ko: {
        name: 'BuyingService',
        shortName: 'Buying OS',
        tagline: '많이 올리기보다, 팔아도 되는 상품인지 먼저 확인합니다.',
        description: '공급처 가격과 재고, 규정, 실제 손익, 상품 등록 승인, 주문 운영을 한 흐름으로 관리하는 동방의 소음 내부 시스템입니다.',
        proof: '상품 등록과 금전·고객 권리에 영향을 주는 작업은 사람 승인을 유지하도록 설계돼 있습니다.',
      },
      en: {
        name: 'BuyingService',
        shortName: 'Buying OS',
        tagline: 'Validate whether a product should be sold before listing more.',
        description: 'East Noise’s internal system for supplier price and stock, compliance, realized margin, listing approval, and order operations.',
        proof: 'Human approval remains required for listing and actions that affect money or customer rights.',
      },
    },
  },
];
