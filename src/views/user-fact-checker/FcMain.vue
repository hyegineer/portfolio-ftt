<template>
  <div class="page">
    <layout-header />
    <div class="page-container">
      <!-- section-ftck-visual -->
      <section class="section-ftck-visual">
        <div class="name-grp">
          <img
            src="@/assets/images/img/img-join-checker.svg"
            alt="checker"
            class="img-word"
          >
          <span class="sub-name">기업 정밀 관리사</span>
          <h2 class="name">
            <span class="point">{{ '최정밀' }}</span>
            팩트체커
          </h2>
        </div>

        <div class="ftck-cnt-list-grp">
          <dl class="ftck-cnt-list">
            <dt class="lbel">
              진행중 팩트체크
            </dt>
            <dd class="cont">
              <div class="amount-item">
                <strong class="amount">{{ '100' }}</strong>
                <span class="unit">개</span>
              </div>
            </dd>
          </dl> 
          
          <dl class="ftck-cnt-list">
            <dt class="lbel">
              완료한 팩트체크
            </dt>
            <dd class="cont">
              <div class="amount-item">
                <strong class="amount">{{ '200' }}</strong>
                <span class="unit">개</span>
              </div>
            </dd>
          </dl> 
        </div>
      </section>
      <!-- section-ftck-visual -->
      
      <!-- section-ftck-list -->
      <section class="section-ftck-list">
        <div class="wide-panel">
          <article class="ftck-main-article">
            <div class="article-cont-hgrp">
              <div class="txt-grp">
                <p class="ttl">
                  전체 팩트체크 요청 리스트
                </p>
              </div>
              <div class="btn-grp">
                <button
                  type="button"
                  class="btn-all-view"
                  @click="$router.push('/fact-checker/mypage/ftck-total-list')"
                >
                  + 전체보기
                </button>
              </div>
            </div>
        
            <!-- 전체 팩트체크가 있을 때 -->
            <table class="ftck-list-grp board-list-grp">
              <!-- [D] 비공개면 is-secret 클래스 추가 -->
              <tr
                class="board-list is-secret"
              >
                <td class="td-subject">
                  <div class="ftck-state-subject">
                    <div class="ftck-state">
                      <badge-state txt="진행중" />

                      <!-- [D] 비공개일 때만 보임 -->
                      <div class="badge-secret">
                        <i class="icon icon-secret" />
                        <span class="txt">비공개</span>
                      </div>
                    </div>

                    <div class="ftck-subject">
                      <span class="lbel">{{ '항목명' }}</span>
                      <p class="subject">
                        {{ '비공개 팩트체크입니다.' }}
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <span class="amount-item">
                    <div class="badge-p badge-p-sm" />
                    <span class="fz-13">150</span>
                  </span>
                </td>
                <td>
                  <span class="td-word-writer">
                    {{ '투자기업명' }}
                    <i class="icon icon-gt" />
                    {{ '요청 스타트업명' }}
                  </span>
                </td>
                <td>
                  <span class="td-word-date">{{ '2021.00.00' }}</span>
                </td>
              </tr>
        
              <tr
                class="board-list" 
              >
                <td class="td-subject">
                  <div class="ftck-state-subject">
                    <div class="ftck-state">
                      <badge-state txt="대기중" />
                      <badge-state txt="배정완료" />

                      <!-- [D] 비공개일 때만 보임 -->
                      <!-- <div class="badge-secret">
                  <i class="icon icon-secret" />
                  <span class="txt">비공개</span>
                </div> -->
                    </div>

                    <div class="ftck-subject">
                      <span class="lbel">{{ '항목명' }}</span>
                      <p class="subject">
                        {{ '팩트체크 요청사항 제목입니다. 두 줄일리 없겠지만 두 줄일 때는 말줄임표시가 나옵니다. 팩트체크 요청사항 제목입니다. 두 줄일리 없겠지만 두 줄일 때는 말줄임표시가 나옵니다.' }}
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <span class="amount-item">
                    <div class="badge-p badge-p-sm" />
                    <span class="fz-13">150</span>
                  </span>
                </td>
                <td>
                  <span class="td-word-writer">
                    {{ '투자기업명' }}
                    <i class="icon icon-gt" />
                    {{ '요청 스타트업명' }}
                  </span>
                </td>
                <td>
                  <span class="td-word-date">{{ '2021.00.00' }}</span>
                </td>
              </tr>
            </table>
            <!-- // 전체 팩트체크가 있을 때 -->

            <!-- 팩트체크가 없을 때 -->
            <div class="ftck-list-grp">
              <empty-contents txt="전체 팩트체크가 없습니다." />
            </div>
            <!-- // 팩트체크가 없을 때 -->
          </article>
        
          <article class="ftck-main-article">
            <div class="article-cont-hgrp">
              <div class="txt-grp">
                <p class="ttl">
                  나의 팩트체크 리스트
                </p>
              </div>
              <div class="btn-grp">
                <button
                  type="button"
                  class="btn-all-view"
                  @click="$router.push('/fact-checker/mypage/ftck-my-list')"
                >
                  + 전체보기
                </button>
              </div>
            </div>
            
            <!-- 받은 팩트체크가 있을 때 -->
            <table class="ftck-list-grp board-list-grp">
              <!-- [D] 비공개면 is-secret 클래스 추가 -->
              <tr
                class="board-list is-secret"
              >
                <td class="td-subject">
                  <div class="ftck-state-subject">
                    <div class="ftck-state">
                      <badge-state txt="진행중" />

                      <!-- [D] 비공개일 때만 보임 -->
                      <div class="badge-secret">
                        <i class="icon icon-secret" />
                        <span class="txt">비공개</span>
                      </div>
                    </div>

                    <div class="ftck-subject">
                      <span class="lbel">{{ '항목명' }}</span>
                      <p class="subject">
                        {{ '비공개 팩트체크입니다.' }}
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <span class="amount-item">
                    <div class="badge-p badge-p-sm" />
                    <span class="fz-13">150</span>
                  </span>
                </td>
                <td>
                  <span class="td-word-writer">
                    {{ '투자기업명' }}
                    <i class="icon icon-gt" />
                    {{ '요청 스타트업명' }}
                  </span>
                </td>
                <td>
                  <span class="td-word-date">{{ '2021.00.00' }}</span>
                </td>
              </tr>
        
              <tr
                class="board-list" 
              >
                <td class="td-subject">
                  <div class="ftck-state-subject">
                    <div class="ftck-state">
                      <badge-state txt="대기중" />
                      <badge-state txt="내용 검토중" />
                      <badge-state txt="진행중" />
                      <badge-state txt="완료" />
                      <badge-state txt="이의신청" />
                      <badge-state txt="보완요청" />

                      <!-- [D] 비공개일 때만 보임 -->
                      <!-- <div class="badge-secret">
                  <i class="icon icon-secret" />
                  <span class="txt">비공개</span>
                </div> -->
                    </div>

                    <div class="ftck-subject">
                      <span class="lbel">{{ '항목명' }}</span>
                      <p class="subject">
                        {{ '팩트체크 요청사항 제목입니다. 두 줄일리 없겠지만 두 줄일 때는 말줄임표시가 나옵니다. 팩트체크 요청사항 제목입니다. 두 줄일리 없겠지만 두 줄일 때는 말줄임표시가 나옵니다.' }}
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <span class="amount-item">
                    <div class="badge-p badge-p-sm" />
                    <span class="fz-13">150</span>
                  </span>
                </td>
                <td>
                  <span class="td-word-writer">
                    {{ '투자기업명' }}
                    <i class="icon icon-gt" />
                    {{ '요청 스타트업명' }}
                  </span>
                </td>
                <td>
                  <span class="td-word-date">{{ '2021.00.00' }}</span>
                </td>
              </tr>
            </table>
            <!-- // 받은 팩트체크가 있을 때 -->

            <!-- 팩트체크가 없을 때 -->
            <div class="ftck-list-grp">
              <empty-contents txt="나의 팩트체크가 없습니다." />
            </div>
            <!-- // 받은 팩트체크가 없을 때 -->
          </article>
        </div>
      </section>
      <!-- END section-ftck-list -->
      
      <!-- section-subscribe -->
      <section class="section-subscribe">
        <div class="wide-panel">
          <div class="subscribe-hgrp">
            <img
              src="@/assets/images/badge/badge-subs.svg"
              alt="최근 등록한 리뷰"
              class="badge-flag"
            >
            <h3 class="ttl">
              이메일 주소만 입력하면<br>
              팩트시트 최신소식을 받아보실 수 있습니다!
            </h3>
          </div>
          <div>
            <div class="chk-grp">
              <input
                id="check-box"
                type="checkbox"
                class="is-none check-switch"
              >
              <label
                for="check-box"
                class="check-onoff"
              />
              <label
                for="check-box"
                class="check-box-lb"
              >개인정보 취급방침에 동의합니다.</label>
            </div>
            <div class="inp-grp inp-btn-grp">
              <div class="inp-grp inp-time-grp">
                <input
                  type="text"
                  class="inp"
                  placeholder="구독하실 이메일 주소를 입력해주세요!"
                >
              </div>

              <btn-solid-dark
                class="btn-md"
              >
                구독하기
              </btn-solid-dark>
            </div>
          </div>
        </div>
      </section>
      <!-- END section-subscribe -->
    </div>
    <layout-footer />
  </div>
</template>

<script>
export default {
  name: 'FcMain',
};
</script>

<style lang="scss" scoped>
</style>