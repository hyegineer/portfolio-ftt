<template>
  <div class="components-page">
    <section class="section">
      <h1 class="cp-ttl">
        1. 버튼
      </h1>

      <div class="section-cont section-btns-cont">
        <btn-solid
          class="btn-lg btn-full"
          @click="window.alert('다음 버튼을 클릭하셨습니다.')"
        >
          다음
        </btn-solid>

        <btn-solid
          class="btn-xlg btn-full"
          @click="window.alert('로그인 버튼을 클릭하셨습니다.')"
        >
          로그인
        </btn-solid>

        <btn-bd
          class="btn-xlg"
          @click="window.alert('기업정보 업데이트 버튼을 클릭하셨습니다.')"
        >
          기업정보 업데이트
        </btn-bd>
        
        <btn-bd-dark
          class="btn-sm"
          @click="window.alert('설정하기 버튼을 클릭하셨습니다.')"
        >
          설정하기
        </btn-bd-dark>

        <btn-bd-dark
          class="btn-md"
          @click="window.alert('인증번호 발송 버튼을 클릭하셨습니다.')"
        >
          인증번호 발송
        </btn-bd-dark>

        <btn-bd-light
          class="btn-sm"
          @click="window.alert('엑셀양식 다운로드 버튼을 클릭하셨습니다.')"
        >
          엑셀양식 다운로드
        </btn-bd-light>

        <btn-bd-light
          class="btn-rounded btn-xsm"
        >
          버튼명
        </btn-bd-light>
      </div>
    </section>
    
    <section class="section">
      <h1 class="cp-ttl">
        2. 기타 버튼들
      </h1>

      <div class="section-cont section-btns-cont">
        <!-- 토글 스위치 -->
        <input
          id="switch"
          type="checkbox"
          class="is-none toggle-switch"
        >
        <label
          for="switch"
          class="toggle-onoff"
        />
        <!-- // 토글 스위치 -->
        
        <!-- 체크박스 -->
        <input
          id="check-box"
          type="checkbox"
          class="is-none check-switch"
        >
        <label
          for="check-box"
          class="check-onoff"
        />
        <!-- // 체크박스 -->

        <!-- 채팅 버튼 -->
        <btn-square-bd @click="window.alert('메세지 버튼 누르기')">
          <i class="icon icon-msg" />
          <span class="is-voice-only">메세지</span>
        </btn-square-bd>
        <!-- // 채팅 버튼 -->

        <!-- 작성 버튼 -->
        <button
          type="button"
          class="btn-txt"
        >
          <i class="icon icon-pen" />
          <span class="txt">작성하기</span>
        </button>
        <!-- // 작성 버튼 -->
      </div>
    </section>
    
    <section class="section">
      <h1 class="cp-ttl">
        3. 기타 뱃지들
      </h1>

      <div class="section-cont section-btns-cont">
        <!-- 기본뱃지 -->
        <badge-rounded>
          최대여덟글자입력
        </badge-rounded>
        <!-- // 기본뱃지 -->
        
        <!-- 완료뱃지 -->
        <div class="badge-state">
          <i class="icon icon-check" />
          <span class="txt">
            완료
          </span>
        </div>
        <!-- // 완료뱃지 -->
        
        <!-- 포인트 -->
        <div class="badge-p">
          <span class="is-voice-only">포인트</span>
        </div>
        <!-- // 포인트 -->

        <!-- 별점 -->
        <div class="hover-desc">
          <span
            class="hover-overlay mb-show" 
            :class="{'is-show': mbMdOptions1.visible}"
            @click="mbMdClose('star')"
          />

          <div
            class="star-txt" 
            @click="mbMdOpen('star')"
          >
            <i class="icon icon-star" />
            <span class="txt">4.3</span>
          </div>

          <div
            class="hover-desc-box"
            :class="{'is-show' : mbMdOptions1.visible}"
          >
            <span class="ttl">종합 점수</span>

            <dl class="star-desc-list">
              <dt class="desc-ttl">
                기술성
              </dt>
              <dd class="desc-dt">
                <i class="icon icon-star" />
                <span class="txt">5</span>
              </dd>
            </dl>

            <dl class="star-desc-list">
              <dt class="desc-ttl">
                시장성
              </dt>
              <dd class="desc-dt">
                <i class="icon icon-star" />
                <span class="txt">5</span>
              </dd>
            </dl>

            <dl class="star-desc-list">
              <dt class="desc-ttl">
                팀역량
              </dt>
              <dd class="desc-dt">
                <i class="icon icon-star" />
                <span class="txt">5</span>
              </dd>
            </dl>

            <dl class="star-desc-list">
              <dt class="desc-ttl">
                실행역량
              </dt>
              <dd class="desc-dt">
                <i class="icon icon-star" />
                <span class="txt">5</span>
              </dd>
            </dl>

            <dl class="star-desc-list">
              <dt class="desc-ttl">
                아이템 우수성
              </dt>
              <dd class="desc-dt">
                <i class="icon icon-star" />
                <span class="txt">5</span>
              </dd>
            </dl>
          </div>
        </div>
        <!-- // 별점 -->

        <!-- 도움말 -->
        <div class="hover-desc">
          <span
            class="hover-overlay mb-show" 
            :class="{'is-show': mbMdOptions2.visible}"
            @click="mbMdClose('question')"
          />

          <div
            class="badge-qus"
            @click="mbMdOpen('question')"
          >
            <span class="is-voice-only">도움말</span>
          </div>

          <div
            class="hover-desc-box"
            :class="{'is-show' : mbMdOptions2.visible}"
          >
            <span class="ttl">토글 제목</span>
            
            <p class="desc">
              해당 토글 내용
            </p>
          </div>
        </div>
        <!-- // 도움말 -->
      </div>
    </section>

    <section class="section">
      <h1 class="cp-ttl">
        4. 폼
      </h1>
      <div class="section-cont section-input-cont">
        <h2>4-1. 인풋만</h2>
        <div class="inp-grp">
          <input
            type="text"
            class="inp"
            placeholder="플레이스 홀더"
          >
        </div>
        
        <div class="inp-grp">
          <input
            type="text"
            class="inp"
            value="작성된 내용"
          >
        </div>
        
        <div class="inp-grp">
          <input
            type="text"
            class="inp"
            disabled
            value="작성할 수 없는 입력영역"
          >
        </div>
        
        <div class="inp-grp">
          <button
            type="button"
            class="inp"
          >
            <i class="icon icon-cal" />
            <span>2021.10.05</span>
          </button>
        </div>
        <!-- // 인풋만 -->

        
        <h2>4-2. 인풋 + 인증번호</h2>
        <div class="inp-grp inp-btn-grp">
          <input
            type="text"
            class="inp"
            placeholder="검색어를 입력하세요"
          >

          <btn-bd class="btn-md">
            인증번호 발송
          </btn-bd>
        </div>
        
        <div class="inp-grp inp-btn-grp">
          <div class="inp-grp inp-time-grp">
            <input
              type="text"
              class="inp"
              placeholder="검색어를 입력하세요"
            >
            <span class="inp-time">3:00</span>
          </div>

          <button
            type="button"
            class="btn-solid-dark btn-md"
          >
            인증하기
          </button>
        </div>

        <h2>4-3. 인풋 + 검색버튼</h2>
        <div class="inp-grp inp-sch-grp">
          <input
            v-model="exInput"
            type="text"
            class="inp"
            placeholder="검색어를 입력하세요"
          >
          <button
            v-if="exInput"
            type="button"
            class="inp-del-btn"
            @click="exInput = ''"
          >
            <span class="is-voice-only">검색어 지우기</span>
          </button>
          <button
            type="button" 
            class="inp-sch-btn"
          >
            <span class="is-voice-only">검색하기</span>
          </button>
        </div>
        <div class="inp-grp inp-sch-grp">
          <input
            v-model="exInput"
            type="text"
            class="inp inp-strong"
            placeholder="검색어를 입력하세요"
          >
          <button
            v-if="exInput"
            type="button"
            class="inp-del-btn"
            @click="exInput = ''"
          >
            <span class="is-voice-only">검색어 지우기</span>
          </button>
          <button
            type="button" 
            class="inp-sch-btn"
          >
            <span class="is-voice-only">검색하기</span>
          </button>
        </div>
        <!-- // 인풋 + 검색버튼 -->

        <h2>4-4. 라벨 + 인풋</h2>
        <div class="lbel-inp-grp">
          <label class="lbel">대표자명 <span class="required">*</span></label>
          <div class="inp-grp">
            <input
              type="text"
              class="inp"
              placeholder="플레이스 홀더"
            >
          </div>
        </div>
        <!-- // 라벨 + 인풋 -->

        <h2>4-5. 단위있는 인풋</h2>
        <div class="inp-grp inp-unit-grp">
          <input
            type="text"
            class="inp"
            placeholder="플레이스 홀더"
          >
          <span class="inp-unit">단위</span>
        </div>
        <!-- // 단위있는 인풋 -->
        
        <h2>4-6. 셀렉트</h2>
        <select
          id="#"
          name="#"
          class="slct"
        >
          <option value="옵션1">
            옵션1
          </option>
          <option value="옵션2">
            옵션2
          </option>
        </select>
        <!-- // 셀렉트 -->

        <h2>4-7. 커스텀 셀렉트</h2>
        <!-- 커스텀 셀렉트 1 -->
        <custom-slct 
          class="custom-slct01"
          :selected="testOption"
        >
          <template #select>
            {{ testOption || '옵션을 선택해주세요ㅋㅋ' }}
          </template>

          <template #options>
            <custom-slct-opt 
              @click="testOption = '선택사항1'"
            >
              선택사항 1
            </custom-slct-opt>
            
            <custom-slct-opt 
              @click="testOption = '선택사항2'"
            >
              선택사항 2
            </custom-slct-opt>
          </template>
        </custom-slct>
        <!-- // 커스텀 셀렉트 1 -->
        
        <custom-slct
          class="custom-slct02"
          :selected="testOption"
        >
          <template #select>
            {{ testOption || '팩트체크 요청순' }}
          </template>

          <template #options>
            <custom-slct-opt 
              @click="testOption = '선택사항1'"
            >
              선택사항 1
            </custom-slct-opt>
            
            <custom-slct-opt 
              @click="testOption = '선택사항2'"
            >
              선택사항 2
            </custom-slct-opt>
          </template>
        </custom-slct>
        <!-- // 커스텀 셀렉트 2 -->
      </div>
    </section>

    <section class="section">
      <h1 class="cp-ttl">
        5. 아바타 & 썸네일
      </h1>

      <div class="section-cont ">
        <h2>5-1. 기업로고 아바타</h2>
        <avatar />
        
        <h2>5-2. 기업구성원 아바타</h2>
        <avatar lg />
        
        <h2>5-3. 썸네일</h2>
        <div class="card-thumb">
          <thumbnail />
        </div>
        
        <h2>5-4. 썸네일 큰사이즈</h2>
        <div class="card-thumb card-thumb-lg">
          <thumbnail />
        </div>
      </div>
    </section>
    
    <section class="section">
      <h1 class="cp-ttl">
        6. 내용이 없을 때
      </h1>

      <div class="section-cont ">
        <empty-contents txt="등록된 문의사항이 없습니다." />
      </div>
    </section>

    <section class="section">
      <h1 class="cp-ttl">
        7. 프로필 카드
      </h1>

      <div class="section-cont">
        <h2>7-1. 검색결과 프로필 카드</h2>
        <div class="card">
          <div class="card-thumb">
            <thumbnail />
            <span class="ribbon">정보 업데이트</span>
          </div>

          <ul class="card-subtxt-grp">
            <li class="card-subtxt-list">
              기업규모
            </li>
            <li class="card-subtxt-list">
              산업분류
            </li>
            <li class="card-subtxt-list">
              산업분야
            </li>
          </ul>

          <h6 class="card-name">
            주식회사 팩트컴퍼니
          </h6>

          <ul class="card-tag-grp">
            <li class="card-tag-list">
              #태그텍스트여덟자
            </li>
            <li class="card-tag-list">
              #태그텍스트여덟자
            </li>
            <li class="card-tag-list">
              #태그텍스트여덟자
            </li>
            <li class="card-tag-list">
              #태그텍스트여덟자
            </li>
            <li class="card-tag-list">
              #태그텍스트여덟자
            </li>
          </ul>
        </div>
        
        <h2>7-2. 투자자 프로필 카드</h2>
        <div class="card">
          <div class="card-thumb">
            <thumbnail />
          </div>
          
          <span class="card-user-type">
            개인 투자자
          </span>

          <h6 class="card-name">
            투자자명
          </h6>
        </div>
      </div>
    </section>

    <section class="section">
      <h1 class="cp-ttl">
        8. 아바타 + 정보
      </h1>

      <div class="section-cont">
        <h2>8-1. 아바타 + 회사정보</h2>
        <div class="avatar-with-name">
          <avatar />
          <div class="name-grp">
            <span class="name">
              주식회사 팩트컴퍼니
            </span>
            
            <ul class="name-subtxt-grp">
              <li class="name-subtxt-list">
                기업규모
              </li>
              <li class="name-subtxt-list">
                산업분류
              </li>
              <li class="name-subtxt-list">
                산업분야
              </li>
            </ul>
          </div>
        </div>

        <h2>8-2. 아바타 + 투자자 타입</h2>
        <div class="avatar-with-name">
          <avatar />
          <div class="name-grp">
            <span class="name-user-type">개인 투자자</span>
            <span class="name">
              주식회사 팩트컴퍼니
            </span>
          </div>
        </div>
        
        <h2>8-2. 아바타 + 회사정보</h2>
        <div class="avatar-with-name col-avatar-with-name">
          <avatar />
          <div class="name-grp">
            <span class="name">
              주식회사 팩트컴퍼니
            </span>
            
            <ul class="name-subtxt-grp">
              <li class="name-subtxt-list">
                기업규모
              </li>
              <li class="name-subtxt-list">
                산업분류
              </li>
              <li class="name-subtxt-list">
                산업분야
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <h1 class="cp-ttl">
        9. 기타 정보
      </h1>

      <div class="section-cont">
        <div class="icon-with-txt">
          <i class="icon icon-jump" />
          <a
            href="#"
            class="txt"
          >www.팩트컴퍼니.com</a>
        </div>
        
        <div class="icon-with-txt">
          <i class="icon icon-loca" />
          <span class="txt">서울특별시 강남구 테헤란로 312 비전타워...</span>
        </div>
      </div>
    </section>
    
    <section class="section">
      <h1 class="cp-ttl">
        10. 회사정보 카드
      </h1>

      <div class="section-cont">
        <div class="info-card">
          <div class="card-thumb card-thumb-lg">
            <thumbnail lg />
          </div>

          <div class="card-company-info">
            <!-- 회사이름 -->
            <div class="avatar-with-name">
              <avatar />
              <div class="name-grp">
                <span class="name">
                  {{ '스타트업명' }}
                </span>

                <div class="icon-with-txt">
                  <i class="icon icon-jump" />
                  <a
                    href="#"
                    class="txt"
                  >{{ 'www.팩트컴퍼니.com' }}</a>
                </div>
              </div>
            </div>
            <!-- // 회사이름 -->

            <!-- 회사정보 -->
            <div class="card-dlist-grp">
              <dl class="card-dlist">
                <dt class="lbel">
                  대표자
                </dt>
                <dd class="txt">
                  <span>{{ '김철수' }}</span>
                </dd>
              </dl>
              
              <dl class="card-dlist">
                <dt class="lbel">
                  사업자번호
                </dt>
                <dd class="txt">
                  <span>{{ '000-00-00***' }}</span>
                </dd>
              </dl>
              
              <dl class="card-dlist">
                <dt class="lbel">
                  본사주소
                </dt>
                <dd class="txt">
                  <span>{{ '서울특별시 강남구 테헤란로 312 비전타워' }}</span>
                </dd>
              </dl>
              
              <dl class="card-dlist">
                <dt class="lbel">
                  연락처
                </dt>
                <dd class="txt">
                  <span>{{ '02-1234-5678' }}</span>
                </dd>
              </dl>
              
              <dl class="card-dlist">
                <dt class="lbel">
                  기업규모
                </dt>
                <dd class="txt">
                  <span>{{ '소기업' }}</span>
                </dd>
              </dl>
              
              <dl class="card-dlist">
                <dt class="lbel">
                  산업분류
                </dt>
                <dd class="txt">
                  <span>-</span>
                </dd>
              </dl>
              
              <dl class="card-dlist">
                <dt class="lbel">
                  산업분야
                </dt>
                <dd class="txt">
                  <span>-</span>
                </dd>
              </dl>
              
              <dl class="card-dlist">
                <dt class="lbel">
                  설립일
                </dt>
                <dd class="txt">
                  <span>{{ '2021년 03월 10일' }}</span>
                </dd>
              </dl>
            </div>
            <!-- // 회사정보 -->

            <!-- 회사 관련 키워드뱃지 -->
            <div class="card-keyword-badge-grp">
              <badge-rounded>
                최대여덟글자입력
              </badge-rounded>
              
              <badge-rounded>
                최대여덟글자입력
              </badge-rounded>
            
              <badge-rounded>
                최대여덟글자입력
              </badge-rounded>
            
              <badge-rounded>
                최대여덟글자입력
              </badge-rounded>
            
              <badge-rounded>
                최대여덟글자입력
              </badge-rounded>
            </div>
            <!-- // 회사 관련 키워드뱃지 -->
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <h1 class="cp-ttl">
        11. 페이지네이션
      </h1>

      <div class="pagination">
        <btn-square-bd @click="window.alert('이전 버튼 누르기')">
          <i class="icon icon-page-prev" />
          <span class="is-voice-only">이전</span>
        </btn-square-bd>

        <button
          type="button"
          class="num-btn is-active"
        >
          1
        </button>
        
        <button
          type="button" 
          class="num-btn"
        >
          2
        </button>
        
        <button
          type="button" 
          class="num-btn"
        >
          3
        </button>
        
        <button
          type="button" 
          class="num-btn"
        >
          4
        </button>

        <button
          type="button" 
          class="num-btn"
        >
          ···
        </button>
        
        <button
          type="button" 
          class="num-btn"
        >
          10
        </button>
        
        <btn-square-bd @click="window.alert('다음 버튼 누르기')">
          <i class="icon icon-page-next" />
          <span class="is-voice-only">다음</span>
        </btn-square-bd>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return{
      mbMdOptions1: {
        visible: false,
      },
      mbMdOptions2: {
        visible: false,
      },
      customSlct1: {
        visible: false,
        value: false,
      },
      customSlct2: {
        visible: false,
        value: false,
      },
      exInput: null,
      testOption: null,
    };
  },
  methods: {
    mbMdOpen(opt) {
      if(window.innerWidth <= 600) {
        switch (opt) {
        case 'star':
          this.mbMdOptions1.visible = true;
          break;
        case 'question':
          this.mbMdOptions2.visible = true;
          break;
        }
      }
    },
    mbMdClose(opt) {
      if(window.innerWidth <= 600) {
        switch (opt) {
        case 'star':
          this.mbMdOptions1.visible = false;
          break;
        case 'question':
          this.mbMdOptions2.visible = false;
          break;
        }
      }
    },
    selectOpt(opt, val) {
      switch (opt) {
      case 1:
        this.customSlct1.value = val;
        this.customSlct1.visible = !this.customSlct1.visible;
        this.away();
        break;
      case 2:
        this.customSlct2.value = val;
        this.customSlct2.visible = !this.customSlct2.visible;
        break;
      }
    },
    showOpt(opt) {
      switch (opt) {
      case 1:
        this.customSlct1.visible = !this.customSlct1.visible;
        break;
      case 2:
        this.customSlct2.visible = !this.customSlct2.visible;
        break;
      }
    },
    away() {
      this.customSlct1.visible = false;
    },
  },
};
</script>

<style lang="scss">
.components-page {
  width: 100%;
  max-width: 1200px;
  margin: 50px auto;

  .cp-ttl {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  .section {
    border-bottom: 1px solid #ebebeb;

    padding: 20px 0;

    &:last-child {
      border-bottom: 0;
    }
  }

  .section-btns-cont {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    align-items: flex-start;
  }

  .section-card-cont {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    align-items: flex-start;

    & > * {
      flex-shrink: 0;
    }
  }
}

.section-cont {
  & > h2 {
    margin: 15px 0;
    font-weight: 500;
  }
}
</style>