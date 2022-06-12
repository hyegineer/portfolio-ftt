<template>
  <!-- [D] 마이페이지 - 기업정보-포트폴리오 추가 -->
  <div
    mypage="etpr-portfolio-add-page"
    class="mypage-container mypage-rfixed-container"
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
          기업정보
        </li>
        <li class="txt">
          포트폴리오 추가
        </li>
      </breadcrumb>

      <h2 class="ttl">
        기업정보
      </h2>
    </div>
    <!-- // 마이페이지 페이지 제목 -->

    <!-- 마이페이지 컨텐츠 영역 -->
    <div class="mypage-cont-wrap">
      <div class="mypage-common-card">
        <div class="cont-hgrp">
          <p class="ttl">
            투자기업 추가
          </p>
          <p class="ttl-sub">
            포트폴리오에 투자기업을 추가합니다.
          </p>
        </div>

        <layout-right-fixed />

        <div class="pflio-hd-info-box">
          <strong class="ttl">추가할 기업</strong>

          <div class="cont">
            <span class="pflio-hd-cont-name">주식회사 팩트컴퍼니</span>
            <span class="fc-gray fz-13">김철수</span>
            <span class="fc-gray fz-13">02-000-0000</span>
          </div>
        </div>

        <!-- 업데이트 내역 -->
        <!-- // 업데이트 내역 -->

        <form>
          <fieldset class="ffieldset">
            <legend class="ffieldset-ttl">
              투자정보
            </legend>

            <p class="ffieldset-guide">
              투자금액 = 인수 주식수*주당 인수가격
            </p>

            <div class="pflio-add-form-grp">
              <!-- 투자일 -->
              <div class="lbel-inp-grp inp-grp-md">
                <label class="lbel">투자일</label>
                  
                <button
                  type="button"
                  class="inp inp-icon"
                >
                  <i class="icon icon-cal" />
                  <span>날짜를 선택하세요.</span>
                </button>
              </div>

              <!-- 재원 -->
              <div class="lbel-inp-grp">
                <label class="lbel">재원</label>

                <custom-slct 
                  class="custom-slct01"
                  :selected="addList.finance"
                >
                  <template #select>
                    <span class="word">
                      {{ addList.finance || '재원 선택' }}
                    </span>
                  </template>

                  <template #options>
                    <custom-slct-opt 
                      @click="addList.finance = '재원 1'"
                    >
                      재원 1
                    </custom-slct-opt>
            
                    <custom-slct-opt 
                      @click="addList.finance = '재원 2'"
                    >
                      재원 2
                    </custom-slct-opt>
                  </template>
                </custom-slct>
              </div>

              <!-- 인수 주식수 -->
              <div class="lbel-inp-grp inp-grp-sm">
                <label class="lbel">인수 주식수</label>

                <div class="inp-grp inp-unit-grp">
                  <input
                    type="text"
                    class="inp"
                    placeholder="0"
                  >
                  <span class="inp-unit">주</span>
                </div>
              </div>

              <!-- 주당 인수가격 -->
              <div class="lbel-inp-grp inp-grp-sm">
                <label class="lbel">주당 인수가격</label>

                <div class="inp-grp inp-unit-grp">
                  <input
                    type="text"
                    class="inp"
                    placeholder="0"
                  >
                  <span class="inp-unit">원</span>
                </div>
              </div>

              <btn-bd-dark
                class="add-btn btn-md"
                @click="alert('투자금액은 기업 정보에 등록된 <br>재원 금액을 넘을 수 없습니다.')"
              >
                추가
              </btn-bd-dark>
            </div>
              
            <div class="simple-list-grp-box pflio-add-list-grp-box">
              <!-- 내용이 있을 때 -->
              <table class="simple-list-grp">
                <tr
                  v-for="(item, index) in 1"
                  :key="index"
                  class="simple-list"
                >
                  <td class="td-date">
                    <span class="fc-gray">{{ '2020.00.00' }}</span>
                  </td>
                    
                  <td class="td-cite">
                    <span class="bold">{{ '재원 출처명' }}</span>
                  </td>
                
                  <td>
                    <span>{{ '000,000,000 주' }}</span>
                  </td>
                
                  <td>
                    <span>{{ '000,000,000 원' }}</span>
                  </td>
                
                  <td class="td-invest-amount-item">
                    <div class="invest-amount-item">
                      <span class="lbel">투자금액</span>
                      <div class="amount">
                        000,000,000,000 원
                      </div>
                    </div>
                  </td>

                  <td class="td-right">
                    <button
                      type="button"
                      class="btn btn-x"
                    >
                      <i class="icon icon-del" />
                      <span class="is-voice-only">항목 삭제</span>
                    </button>
                  </td>
                </tr>
              </table>
              <!-- // 내용이 있을 때 -->

              <!-- 내용이 없을 때 -->
              <div class="simple-list-nothing">
                내용이 없습니다.
              </div>
              <!-- // 내용이 없을 때 -->
            </div>

            <div class="pflio-add-total-price">
              <div class="invest-amount-item">
                <span class="lbel">총 투자금액</span>
                <div class="amount">
                  000,000,000,000 원
                </div>
              </div>
            </div>
          </fieldset>

          <fieldset class="ffieldset">
            <!-- 증빙자료 -->
            <div class="lbel-inp-grp">
              <label class="lbel">증빙자료</label>
              
              <div class="inp-grp inp-btn-grp">
                <input
                  readonly
                  type="text"
                  class="inp"
                  placeholder="증빙자료"
                >

                <btn-bd-dark
                  class="btn-md"
                >
                  파일첨부
                </btn-bd-dark>
              </div>
            </div>

            <!-- 상세내용 -->
            <div class="lbel-inp-grp">
              <div class="lbel lbel-unit">
                <span>상세내용</span>
                <span class="length-unit">(0/500)</span>
              </div>

              <div class="inp-grp">
                <textarea
                  class="inp"
                  cols="30"
                  rows="10"
                  placeholder="내용을 작성해주세요."
                />
              </div>
            </div>
          </fieldset>
        </form>
          
        <div
          position="double-centered"
          class="btn-grp"
        >
          <btn-bd-light
            class="btn-lg btn-full color-gray btn-prev"
            @click="$router.push('etpr-portfolio-main')"
          >
            이전
          </btn-bd-light>

          <btn-solid
            class="btn-lg btn-full"
            @click="alert('포트폴리오가 저장되었습니다.')"
          >
            저장하기
          </btn-solid>
        </div>
      </div>
    </div>
    <!-- // 마이페이지 컨텐츠 영역 -->
  </div>
</template>

<script>
export default {
  name: 'IEtprPortfolioAdd',
  data() {
    return{
      addList: { // custom-select 동작을 구현하기위한 더미데이터
        date: null, // 투자일
        finance: null, // 재원
        buyStock: null, // 인수 주식수
        priceStock: null, // 주당 인수가격
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.page .right-fixed {
  margin-bottom: 30px;
}
</style>