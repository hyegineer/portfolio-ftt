const seller01 = {
    free: {
        si_no: 1,
        name: 'basic',
        price: '무료',
        desc: `프로필을 등록하고 더 많은 노출 기회를 <br />
        안전 결제는 물론, 수수료는 업계 최저!`,
        benefits: [
            {
                active: true,
                txt: '업계 최저 수수료 9.99%',
            },
            {
                txt: '개인 프로필 등록 및 노출',
            },
            {
                txt: '빌런즈 안전결제로 대금 보호',
            },
        ],
        amount: 0
    },
    pro: {
        si_no: 2,
        name: 'pro',
        price: '월 49,900원',
        desc: `더 낮은 수수료로 더 많은 수익을! <br />
    더 많은 노출 기회와 다양한 제휴 서비스까지`,
        basicBenefits: 'BASIC 요금제의 모든 기능 +',
        benefits: [
            {
                active: true,
                txt: `수수료, 단 5.99%`,
            },
            {
                txt: 'SNS에서 다양한 노출',
            },
            {
                active: true,
                txt: `빌런즈 멤버를 위한 제휴 서비스 <br />
        (의상, 메이크업샵, 라이브커머스 아카데미 할인권 등)`,
            },
            {
                active: true,
                txt: `빌런즈 멤버를 위한 추천 서비스 <br />
        (라이브 커머스 쇼호스트, 방송, 강의, MC 등)`,
            },
            {
                txt: '빌런즈 내 텐션 lv.10 추가',
            },
        ],
        amount: 49900
    },
    premium: {
        si_no: 3,
        name: 'premium',
        price: '월 79,900원',
        desc: `업계 최초 수수료 0원! <br />
    보험제도로 갑작스런 방송 취소도 걱정 NO`,
        basicBenefits: 'BASIC 요금제의 모든 기능 +',
        benefits: [
            {
                active: true,
                txt: '업계 최초 수수료 0원',
            },
            {
                active: true,
                // INFO: 환불정책)
                txt: `빌런즈 보험제도 보장 <br />
        <span class="fc-gray">* 빌런즈 보험이란? <br />
        고객이 갑작스럽게 취소할 경우에도 결제대금을 보장합니다.<br />
        보장금은 취소 시점에 따라 차등 지급됩니다. (영업일 기준)</span>
        <ul class="list-grp type-bullet">
          <li class="list">방송 당일 ~ 3일 전 취소 시: 결제대금의 100% 보장</li>
          <li class="list">4일 전: 결제대금의 90% 보장</li>
          <li class="list">5일 전: 결제대금의 70% 보장</li>
          <li class="list">6일 전: 결제대금의 50% 보장</li>
          <li class="list">7일 전: 0원</li>
        </ul>
        `,
            },
            {
                active: true,
                txt: `영상 프로필 촬영 및 제작 <br />
        (프리미엄 3개월 이상 구독자를 위한 혜택!)`,
            },
            {
                txt: 'SNS에서 다양한 노출',
            },
            {
                active: true,
                txt: `빌런즈 멤버를 위한 제휴 서비스 <br />
        (의상, 메이크업샵, 라이브커머스 아카데미 할인권 등)`,
            },
            {
                active: true,
                txt: `빌런즈 멤버를 위한 추천 서비스 <br />
        (라이브 커머스 쇼호스트, 방송, 강의, MC 등)`,
            },
            {
                txt: '빌런즈 내 텐션 lv.20 추가',
            },
        ],
        amount: 79900
    },
};

const seller02 = {
    name: '입점비',
    si_no: 4,
    price: '월 99,900원',
    desc: '빌런즈에서 한 번에 해결!',
    benefits: `빌런즈 앱과 웹에 마케팅 대행사의 정보와 포트폴리오,<br class="mb-show" />
    상품 정보를 <br class="mb-hide" />
    노출하고 홍보할 수 있는 서비스입니다. <br />
    <span class="fc-green">입점비는 매월 99,900원 (VAT 별도)로 결제되며,</span> <br />
    빌런즈를 통해 체결되는 라이브 커머스 대행 건에 대한 <br class="mb-show" />
    중개 수수료는 <br class="mb-hide" />
    발생하지 않습니다.`,
    amount: 99900
};

module.exports = { seller01, seller02 };
