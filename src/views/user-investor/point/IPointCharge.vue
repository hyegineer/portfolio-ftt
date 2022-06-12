<template>
  <!-- [D] 마이페이지 - 포인트-포인트 충전 -->
  <div
    mypage="point-charge-page"
    class="mypage-container"
  >
    <!-- 마이페이지 페이지 제목 -->
    <div class="mypage-hgrp">
      <breadcrumb>
        <li class="txt">
          홈
        </li>
        <li class="txt">
          마이페이지
        </li>
        <li class="txt">
          포인트
        </li>
        <li class="txt">
          포인트 충전/내역
        </li>
      </breadcrumb>

      <h2 class="ttl">
        포인트
      </h2>
    </div>
    <!-- // 마이페이지 페이지 제목 -->

    <!-- 마이페이지 컨텐츠 영역 -->
    <div class="mypage-cont-wrap">
      <div class="mypage-common-card">
        <div class="cont-hgrp">
          <p class="ttl">
            포인트 충전하기
          </p>
          <p class="ttl-sub">
            팩트체크 포인트를 충전합니다.
          </p>
        </div>

        <div class="narrow-panel w380">
          <form>
            <fieldset class="ffieldset">
              <div class="lbel-inp-grp">
                <label class="lbel">충전할 포인트</label>
              
                <div class="inp-grp inp-unit-grp">
                  <input
                    type="text"
                    class="inp charge-point-inp"
                    placeholder="0"
                  >
                  <span class="inp-unit">
                    <div class="badge-p" />
                  </span>
                </div>
              </div>

              <div class="space-between charge-form-grp">
                <label class="lbel">현재 보유 포인트</label>

                <div class="space-between-item">
                  <div class="amount-item">
                    <strong class="amount">0</strong>
                    <div class="badge-p" />
                  </div>
                </div>
              </div>
              
              <div class="space-between charge-form-grp">
                <label class="lbel">충전 후 포인트</label>

                <div class="space-between-item">
                  <div class="amount-item">
                    <strong class="amount">0</strong>
                    <div class="badge-p" />
                  </div>
                </div>
              </div>
            </fieldset>

            <fieldset class="ffieldset">
              <legend class="ffieldset-ttl">
                결제방법 선택
              </legend>

              <p class="ffieldset-guide">
                신용카드와 계좌이체 중 하나를 선택합니다.
              </p>

              <div class="btn-grp charge-btn-grp">
                <!-- [D] 선택하면 is-active 클래스 추가 -->
                <btn-bd-light class="charge-type-btn btn-sm is-active">
                  신용카드
                </btn-bd-light>
                <btn-bd-light class="charge-type-btn btn-sm">
                  계좌이체
                </btn-bd-light>
              </div>

              <div class="space-between charge-form-grp">
                <label class="lbel">총 결제금액</label>

                <div class="space-between-item">
                  <div class="amount-item">
                    <strong class="amount">0</strong>
                    <strong class="unit">원</strong>
                  </div>
                </div>
              </div>

              <div class="caution-box">
                <span class="cb-ttl">주의사항</span>

                <ul class="ul-dash">
                  <li class="list">
                    결제 관련 주의사항 텍스트
                  </li>
                  <li class="list">
                    주의사항이 없으면 이 영역은 삭제됩니다.
                  </li>
                </ul>
              </div>
            </fieldset>
          </form>
          
          <div
            position="double-centered"
            class="btn-grp"
          >
            <btn-bd-light
              class="btn-lg btn-full color-gray btn-prev"
              @click="$router.push('point-main')"
            >
              이전
            </btn-bd-light>

            <btn-solid
              class="btn-lg btn-full"
              @click="$router.push('point-charge-complete')"
            >
              충전하기
            </btn-solid>
          </div>
        </div>
      </div>
    </div>
    <!-- // 마이페이지 컨텐츠 영역 -->
  </div>
</template>

<script>
export default {
  name: 'IPointCharge',
};
</script>

<style lang="scss" scoped>
</style>