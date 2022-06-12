<template>
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
            >{{ 'www.naver.com' }}</a>
          </div>
        </div>
      </div>
      <!-- // 회사이름 -->

      <!-- 회사정보 -->
      <div class="dlist-grp">
        <dl class="dlist">
          <dt class="lbel">
            대표자
          </dt>
          <dd class="txt">
            <span>{{ '김철수' }}</span>
          </dd>
        </dl>
              
        <dl class="dlist">
          <dt class="lbel">
            사업자번호
          </dt>
          <dd class="txt">
            <span>{{ '000-00-00***' }}</span>
          </dd>
        </dl>
              
        <dl class="dlist">
          <dt class="lbel">
            본사주소
          </dt>
          <dd class="txt">
            <span>{{ '서울특별시 강남구 테헤란로 312 비전타워' }}</span>
          </dd>
        </dl>
              
        <dl class="dlist">
          <dt class="lbel">
            연락처
          </dt>
          <dd class="txt">
            <span>{{ '02-1234-5678' }}</span>
          </dd>
        </dl>
              
        <dl class="dlist">
          <dt class="lbel">
            기업규모
          </dt>
          <dd class="txt">
            <span>{{ '소기업' }}</span>
          </dd>
        </dl>
              
        <dl class="dlist">
          <dt class="lbel">
            산업분류
          </dt>
          <dd class="txt">
            <span>-</span>
          </dd>
        </dl>
              
        <dl class="dlist">
          <dt class="lbel">
            산업분야
          </dt>
          <dd class="txt">
            <span>-</span>
          </dd>
        </dl>
              
        <dl class="dlist">
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
</template>

<script>
export default {
    
};
</script>

<style lang="scss" scoped>
</style>