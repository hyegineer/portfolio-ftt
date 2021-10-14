<template>
  <!-- [D] 문의하기 페이지 (회원, 비회원 문의가능) -->
  <div class="page inquiry-page">
    <layout-header />

    <div class="page-container">
      <div class="company-hgrp">
        <div class="wide-panel">
          <h5 class="ttl">
            <span class="txt">1:1문의</span>
          </h5>
          <p class="ttl-sub">
            <span class="txt1">아래 양식을 작성하여 보내주시면, </span>
            <span class="txt2">빠르고 정확하게 답변드리겠습니다.</span>
          </p>
        </div>
      </div>

      <div class="tab">
        <div class="wide-panel">
          <button class="tab-btn is-active">
            문의하기
          </button>
          <button
            class="tab-btn" 
            @click="$router.push('/inquiry-history')"
          >
            문의내역
          </button>
        </div>
      </div>

      <div class="wide-panel">
        <form>
          <fieldset class="inquiry-ffieldset">
            <div class="inquiry-ffieldset-grid">
              <!-- 카테고리 -->
              <div class="lbel-inp-grp">
                <label class="lbel">카테고리</label>
                <div class="inp-grp">
                  <custom-slct 
                    class="custom-slct01 btn-full"
                    :selected="payload.cat"
                  >
                    <template #select>
                      <span class="word">
                        {{ payload.cat || '선택하세요' }}
                      </span>
                    </template>

                    <template #options>
                      <custom-slct-opt 
                        v-for="(category, index) in categorys"
                        :key="index"
                        @click="payload.cat = category"
                      >
                        {{ category }}
                      </custom-slct-opt>
                    </template>
                  </custom-slct>
                </div>
              </div>
              
              <!-- 이름 -->
              <div class="lbel-inp-grp">
                <label class="lbel">이름</label>
                <div class="inp-grp">
                  <input
                    type="text"
                    class="inp"
                    placeholder="이름 입력"
                  >
                </div>
              </div>
              
              <!-- 휴대폰 번호 -->
              <div class="lbel-inp-grp">
                <label class="lbel">휴대폰 번호</label>
                <div class="inp-grp">
                  <input
                    type="tel"
                    class="inp"
                    placeholder="휴대폰 번호 입력"
                  >
                </div>
              </div>
              
              <!-- 이메일 -->
              <div class="lbel-inp-grp">
                <label class="lbel">이메일</label>
                <div class="inp-grp">
                  <input
                    type="email"
                    class="inp"
                    placeholder="이메일 입력"
                  >
                </div>
              </div>
            </div>

            <div class="inquiry-ffieldset-grid">
              <!-- 제목 -->
              <div class="lbel-inp-grp">
                <label class="lbel">제목</label>
                <div class="inp-grp">
                  <input
                    type="text"
                    class="inp"
                    placeholder="제목 입력"
                  >
                </div>
              </div>
              
              <!-- 내용 -->
              <div class="lbel-inp-grp">
                <label class="lbel">내용</label>
                <div class="inp-grp">
                  <textarea
                    id="#"
                    name="#"
                    cols="30"
                    rows="10"
                    class="inp"
                    placeholder="팩트시트에 문의할 내용을 작성해주세요"
                  />
                </div>
              </div>
            </div>
          </fieldset>
        </form>

        <div class="agree-cont-box">
          <div class="ttl-grp">
            <span class="ttl">개인정보 수집·이용에 대한 동의</span>
            <div class="check-lbel-ment">
              <input
                id="privacyAgree"
                type="checkbox"
                class="is-none check-switch"
              >
              <label
                for="privacyAgree"
                class="check-onoff"
              />

              <label
                for="privacyAgree"
                class="ment"
              >개인정보 취급방침에 동의합니다.</label>
            </div>
          </div>
          <div class="agree-cont">
            <!-- 개인정보약관 -->
            약관 txt
          </div>
        </div>

        <div class="txtsm-center-grp">
          <span class="txtsm">문의 답변 수신여부를 선택해주세요.</span>
            
          <div class="center-grp">
            <div class="check-lbel-ment">
              <input
                id="receiveSms"
                type="radio"
                name="receiveType"
                class="is-none check-switch"
              >
              <label
                for="receiveSms"
                class="check-onoff"
              />

              <label
                for="receiveSms"
                class="ment dark-ment"
              >SMS</label>
            </div>
              
            <div class="check-lbel-ment">
              <input
                id="receiveEmail"
                type="radio"
                name="receiveType"
                class="is-none check-switch"
              >
              <label
                for="receiveEmail"
                class="check-onoff"
              />

              <label
                for="receiveEmail"
                class="ment dark-ment"
              >E-Mail</label>
            </div>
          </div>
        </div>

        <btn-bd class="submit-btn btn-xlg">
          문의하기
        </btn-bd>
      </div>
    </div>

    <layout-footer />
  </div>
</template>

<script>
export default {
  name: 'Inquiry',
  data() {
    return{
      categorys: ['카테고리1'], // custom-select 동작을 구현하기위한 더미데이터
      payload: { // custom-select 동작을 구현하기위한 더미데이터
        cat: null,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>