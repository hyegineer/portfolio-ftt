<template>
  <!-- [D] 마이페이지 - 포인트-멤버십 구매 -->
  <div
    mypage="membership-main-page"
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
          멤버십 구매
        </li>
      </breadcrumb>

      <h2 class="ttl">
        포인트
      </h2>
    </div>
    <!-- // 마이페이지 페이지 제목 -->

    <!-- 마이페이지 컨텐츠 영역 -->
    <div class="mypage-cont-wrap">
      <div class="keyword-card">
        <section class="keyword-card-section">
          <div class="hgrp">
            <span class="sub-ttl">
              <img
                src="@/assets/images/img/img-txt-member.svg"
                alt="membership"
              >
            </span>
            <h3 class="ttl">
              팩트시트 멤버십은?
            </h3>
          </div>

          <p class="keyword-card-desc">
            투자에 필요한 정보를 숨김없이 확인할 수 있는 혜택을 가집니다. <br>
            업데이트된 정보의 히스토리를 파악하여, 기업의 성장성과 투자시장에서의 가치를 판단할 수 있습니다. <br>
            빠르고 정확한 정보를 얻기 위하여 팩트시트 멤버십에 가입해보세요.
          </p>
        </section>
      </div>
      
      <div class="mypage-point-card">
        <div class="mypage-point-hgrp">
          <p class="ttl">
            <b class="bold">투자 컴퍼니</b>의 <br>멤버십 정보
          </p>

          <!-- [D] 멤버십 없을 때만 보이고, 있을 땐 안보임 -->
          <div class="nothing-membership">
            멤버십이 없습니다.
          </div>

          <div class="ttl-sub">
            <label class="lbel">현재 보유 포인트</label>

            <div class="amount-item">
              <strong class="amount">100,000</strong>
              <div class="badge-p" />
            </div>
          </div>
          <btn-bd-dark
            class="charge-btn btn-sm"
            @click="$router.push('point-charge')"
          >
            충전하기
          </btn-bd-dark>
        </div>

        <div class="mypage-point-history-wrap">
          <!-- [D] 멤버십 없을 때만 보이고, 있을 땐 안보임 -->
          <div class="ttl">
            우리 기업에 맞는 멤버십을 구매하세요.
          </div>
          
          <div class="membership-list-grp">
            <!-- [D] 구독중인 멤버십일 경우 is-active 클래스 추가 -->
            <article
              class="membership-list is-active"
            >
              <div>
                <div class="mbs-hgrp">
                  <span class="sub-name">팩트시트</span>
                  <h6 class="name">
                    6개월 멤버십
                  </h6>
                </div>

                <div class="mbs-benefit-list-grp">
                  <p class="mbs-benefit-list">
                    6개월간 멤버십 혜택 이용
                  </p>
                  <p class="mbs-benefit-list">
                    3개월이 지나 블라인드 된 <br>팩트시트를 확인할 수 있습니다.
                  </p>
                  <p class="mbs-benefit-list">
                    스타트업의 업데이트 이력을 확인할 수 있습니다.
                  </p>
                </div>

                <div class="mbs-point-grp">
                  <span class="lbel">사용 포인트</span>
                  <div class="amount-item">
                    <strong class="amount">0,000</strong>
                    <div class="badge-p" />
                  </div>
                </div>
              </div>

              <btn-solid-dark
                class="buy-btn btn-rounded btn-xsm btn-full" 
                @click="openModal('buyMembership')"
              >
                구매하기
              </btn-solid-dark>

              <!-- [D] 구독중일 때 버튼 -->
              <!-- <btn-solid-dark
                disabled
                class="buy-btn btn-rounded btn-xsm btn-full"
              >
                구독중
              </btn-solid-dark> -->
            </article>
            
            <article
              class="membership-list"
            >
              <div>
                <div class="mbs-hgrp">
                  <span class="sub-name">팩트시트</span>
                  <h6 class="name">
                    12개월 멤버십
                  </h6>
                </div>

                <div class="mbs-benefit-list-grp">
                  <p class="mbs-benefit-list">
                    12개월간 멤버십 혜택 이용
                  </p>
                  <p class="mbs-benefit-list">
                    3개월이 지나 블라인드 된 <br>팩트시트를 확인할 수 있습니다.
                  </p>
                  <p class="mbs-benefit-list">
                    스타트업의 업데이트 이력을 확인할 수 있습니다.
                  </p>
                </div>

                <div class="mbs-point-grp">
                  <span class="lbel">사용 포인트</span>
                  <div class="amount-item">
                    <strong class="amount">0,000</strong>
                    <div class="badge-p" />
                  </div>
                </div>
              </div>

              <btn-solid-dark
                class="buy-btn btn-rounded btn-xsm btn-full"
                @click="openModal('buyMembership')"
              >
                구매하기
              </btn-solid-dark>
            </article>
            
            <article
              class="membership-list"
            >
              <div>
                <div class="mbs-hgrp">
                  <span class="sub-name">팩트시트</span>
                  <h6 class="name">
                    24개월 멤버십
                  </h6>
                </div>

                <div class="mbs-benefit-list-grp">
                  <p class="mbs-benefit-list">
                    24개월간 멤버십 혜택 이용
                  </p>
                  <p class="mbs-benefit-list">
                    3개월이 지나 블라인드 된 <br>팩트시트를 확인할 수 있습니다.
                  </p>
                  <p class="mbs-benefit-list">
                    스타트업의 업데이트 이력을 확인할 수 있습니다.
                  </p>
                </div>

                <div class="mbs-point-grp">
                  <span class="lbel">사용 포인트</span>
                  <div class="amount-item">
                    <strong class="amount">0,000</strong>
                    <div class="badge-p" />
                  </div>
                </div>
              </div>

              <btn-solid-dark
                class="buy-btn btn-rounded btn-xsm btn-full" 
                @click="openModal('buyMembership')"
              >
                구매하기
              </btn-solid-dark>
            </article>
          </div>
        </div>
      </div>
    </div>
    <!-- // 마이페이지 컨텐츠 영역 -->

    <modal-dialog>
      <modal-light-box @click="closeModal" />

      <!-- [modal] 멤버십 구매하기 -->
      <modal
        :class="{'is-show': $store.state.modal.visible && $store.state.modal.type === 'buyMembership'}"
        wide
        ttl="'12개월 멤버십'을 <br>구매하시겠습니까?"
      >
        <div class="modal-cont md-buy-membership">
          <div class="lbel-amount-point-grp">
            <div class="lbel-amount-point">
              <span class="lbel">현재 보유 포인트</span>

              <div class="amount-point">
                <strong class="amount">150</strong>
                <div class="badge-p">
                  <span class="is-voice-only">포인트</span>
                </div>
              </div>
            </div>
            <div class="lbel-amount-point">
              <span class="lbel">구매 후 포인트</span>

              <div class="amount-point">
                <strong class="amount">150</strong>
                <div class="badge-p">
                  <span class="is-voice-only">포인트</span>
                </div>
              </div>
            </div>
          </div>

          <div class="lbel-inp-grp">
            <label class="lbel">약관</label>

            <textarea
              class="inp"
              cols="30"
              rows="10"
              readonly              
            >
            약관 txt
            </textarea>
          </div>

          <div class="check-lbel-ment">
            <input
              id="agreeBuyMbs"
              type="checkbox"
              class="is-none check-switch"
            >
            <label
              for="agreeBuyMbs"
              class="check-onoff"
            />

            <label
              for="agreeBuyMbs"
              class="ment dark-ment"
            >위 내용을 확인하였으며, 구매를 진행합니다.</label>
          </div>
        </div>

        <div class="modal-btn-wrap">
          <btn-bd-light
            class="btn-fb btn-md btn-cancel"
            @click="closeModal"
          >
            닫기
          </btn-bd-light>
          <btn-solid-dark class="btn-md">
            구매하기
          </btn-solid-dark>
        </div>
      </modal>
    </modal-dialog>
  </div>
</template>

<script>
export default {
  name: 'IMembershipMain',
};
</script>

<style lang="scss" scoped>
</style>