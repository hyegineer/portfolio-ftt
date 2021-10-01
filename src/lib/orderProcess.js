/*
  API, WEB 해당파일 동일하게 유지
*/

const moment = require('moment')

function calcSettlementAmount(si_no = null, pay_price_amt = 0) {
    // 정산 시 구독 종류에 따라 수수료를 차감한 실제 정산금액 계산 
    
    const siNo = Number(si_no); // 구독모델 번호
    const payPriceAmt = Number(pay_price_amt); // 상품금액
    
    let fees = 0 // 수수료

    // 구독 종류에 따라 수수료 차감
    if (!siNo) { // si_no 가 NULL일 때 BASIC으로 처리 
        // BASIC (쇼호스트)
        fees = payPriceAmt * 0.0999;
    } else if (siNo === 2) {
        // PRO (쇼호스트)
        fees = payPriceAmt * 0.0599;
    } else if (siNo === 3) {
        // PREMIUM (쇼호스트)
        // 수수료 없음
    } else if (siNo === 4) {
        // 입점비 (대행사)
        fees = payPriceAmt * 0.0999;
    } else {
        throw new Error('Invalid si_no:', si_no);
    }

    // 정산금액
    const settleAmount = payPriceAmt - fees;

    return Math.floor(settleAmount); // 소수점 버림
}

function calcPremiumHostSettlementInfo(hs_start_dt, cancel_dt, pay_price_amt = 0) {
    // 쇼호스트가 Premium 모델 구독 중 광고주가 환불 시 정산금액

    if(!hs_start_dt) {
        throw new Error("Invalid hs_start_dt:", hs_start_dt);
    }

    if(!cancel_dt) {
        throw new Error("Invalid cancel_dt:", cancel_dt);
    }

    const payPriceAmt = Number(pay_price_amt); // 상품금액

    // 'YYYY-MM-DD 00:00:00' 형태로 변환
    const cancelDay = moment(cancel_dt).startOf('day');
    const startDay = moment(hs_start_dt).startOf('day');

    // 방송시작 몇일전인지 확인
    const diffDays = startDay.diff(cancelDay, 'days');

    let hostPercent = 0;
    if (diffDays <= 3) hostPercent = 100; // 당일~3일전 : 100%
    else if (diffDays === 4) hostPercent = 90; // 4일전 : 90%
    else if (diffDays === 5) hostPercent = 70; // 5일전 : 70%
    else if (diffDays === 6) hostPercent = 50; // 6일전 : 50%
    // else hostPercent = 0 // 7일전: 0%

    // 정산금액
    const settleAmount = payPriceAmt * (hostPercent / 100);

    return { 
        settleAmount: Math.floor(settleAmount), // 소수점 버림
        hostPercent, 
        diffDays
    };
}

function calcDefCancelRefundInfo(hs_start_dt, pay_price_amt = 0) {
    // 광고주가 확정된 예약 취소 시 환불금액

    if(!hs_start_dt) {
        throw new Error("Invalid hs_start_dt:", hs_start_dt);
    }
    
    const payPriceAmt = Number(pay_price_amt); // 상품금액

    // 'YYYY-MM-DD 00:00:00' 형태로 변환
    const today = moment().startOf('day');
    const startDay = moment(hs_start_dt).startOf('day');

    // 방송시작 몇일전인지 확인
    const diffDays = startDay.diff(today, 'days');

    let userPercent = 0;
    if (diffDays <= 3) { userPercent = 0 } // 3일전 : 환불 없음
    else if (diffDays === 4) { userPercent = 10 } // 4일전 : 10%
    else if (diffDays === 5) { userPercent = 30 } // 5일전 : 30%
    else if (diffDays === 6) { userPercent = 50 } // 6일전 : 50%
    else if (diffDays >= 7) { userPercent = 100 } // 7일 이전 : 100% 

    // 환불금액
    const refundAmount = payPriceAmt * (userPercent / 100);

    return { 
        refundAmount: Math.floor(refundAmount),  // 소수점 버림
        userPercent, 
        diffDays
    };
}

function calcMonthlySubsRefundAmount(end_dt, pay_amt = 0) {
    // 월결제 구독 모델 변경 시 기존 구독모델의 사용일 차감 후 환불금액 계산

    if(!end_dt) {
        throw new Error("Invalid end_dt:", end_dt);
    }

    const endDt = moment(end_dt); // 종료일
    const payAmt = Number(pay_amt); // 상품금액

    // 사용 일수 (최대 30일)
    const usedDays = 30 - Math.min(endDt.diff(moment().startOf('day'), 'days'), 30);

    // 환불할 액수
    const refundAmt = payAmt - (payAmt * (usedDays / 30)); // 상품금액 - (상품금액의 100% * 사용일 / 30)

    return Math.floor(refundAmt); // 소수점 버림
}

module.exports = {
    calcSettlementAmount,
    calcMonthlySubsRefundAmount,
    calcPremiumHostSettlementInfo,
    calcDefCancelRefundInfo
}
