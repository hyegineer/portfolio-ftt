<template>
  <!-- [D] 마이페이지 - 팩트체크-요청한 팩트체크 보완요청 -->
  <div class="mypage-container mypage-ftck-checking-edit-page">
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
          팩트체크
        </li>
        <li class="txt">
          요청한 팩트체크 보완요청
        </li>
      </breadcrumb>

      <h2 class="ttl">
        팩트체크
      </h2>
    </div>
    <!-- // 마이페이지 페이지 제목 -->

    <!-- 마이페이지 컨텐츠 영역 -->
    <div class="mypage-cont-wrap">
      <!-- 나의 팩트체크 - 주의사항 설명박스 -->
      <div class="ftck-caution-box">
        <div class="ftck-cb-ttl">
          <i class="icon icon-i-green" />
          <span class="cb-ttl">주의사항</span>
        </div>

        <ul class="ul-dash">
          <li class="list">
            상단에 표시된 팩트체크에 보완요청 내용을 작성합니다.
          </li>
          <li class="list">
            이의신청된 팩트체크는 팩트체크 관리자가 직접 내용 확인 및 검토확정 여부를 결정합니다.
          </li>
          <li class="list">
            등록된 팩트체크 내용이 올바르지 않을 시, 작성한 팩트체커에게 재작성을 요청합니다.
          </li>
        </ul>
      </div>
      <!-- // 나의 팩트체크 - 주의사항 설명박스 -->

      <div class="ftck-detail-wrap">
        <!-- 제목 -->
        <div class="mypboard-detail-hd">
          <!-- 팩트체크 진행상태 & 제목 -->
          <div class="ftck-state-subject">
            <div class="ftck-state">
              <badge-state txt="내용 검토중" />

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
          <!-- // 팩트체크 진행상태 & 제목 -->

          <div class="mypboard-etc-grp">
            <span class="amount-item">
              <div class="badge-p badge-p-sm" />
              <span class="fz-13">150</span>
            </span>
            <span class="fc-gray fz-13">{{ '요청 스타트업명' }}</span>
            <span class="fc-gray-light fz-13">{{ '2021.00.00' }}</span>
          </div>
        </div>
        <!-- // 제목 -->

        <!-- 내용 -->
        <div class="mypboard-detail-cont">
          <h3 class="form-ttl">
            보완요청 내용
          </h3>

          <div class="form-item">
            <custom-slct
              class="custom-slct01 slct-depth01"
              :selected="reason"
            >
              <template #select>
                <span class="word">
                  {{ reason || '사유 선택' }}
                </span>
              </template>

              <template #options>
                <custom-slct-opt
                  @click="reason = '원하는 내용이 아님'"
                >
                  원하는 내용이 아님
                </custom-slct-opt>

                <custom-slct-opt
                  @click="reason = '부적절한 데이터가 포함되어 있음'"
                >
                  부적절한 데이터가 포함되어 있음
                </custom-slct-opt>

                <custom-slct-opt
                  @click="reason = '팩트가 아닌 정보'"
                >
                  팩트가 아닌 정보
                </custom-slct-opt>
              </template>
            </custom-slct>
          </div>

          <div class="form-item">
            <textarea
              class="inp"
              cols="30"
              rows="20"
              placeholder="내용 입력"
            />
          </div>
        </div>
        <!-- // 내용 -->
        
        <div
          position="double-centered"
          class="btn-grp"
        >
          <btn-bd-light
            class="btn-lg btn-full color-gray btn-prev"
          >
            이전
          </btn-bd-light>
          <btn-solid
            class="btn-lg btn-full"
          >
            보완요청 완료
          </btn-solid>
        </div>
      </div>
    </div>
    <!-- // 마이페이지 컨텐츠 영역 -->
  </div>
</template>

<script>
export default {
  name: 'IFtckCheckingEdit',
  data() {
    return{
      reason: null,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>