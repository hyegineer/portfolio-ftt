<template>
  <!-- [D] 마이페이지 - 팩트체크-요청한 팩트체크 수정 -->
  <div
    mypage="ftck-edit-page"
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
          팩트체크
        </li>
        <li class="txt">
          요청한 팩트체크 수정
        </li>
      </breadcrumb>

      <h2 class="ttl">
        팩트체크
      </h2>
    </div>
    <!-- // 마이페이지 페이지 제목 -->

    <!-- 마이페이지 컨텐츠 영역 -->
    <div class="mypage-cont-wrap">
      <p class="big-ttl">
        요청내용 수정하기
      </p>
      <!-- 나의 팩트체크 수정 - 주의사항 설명박스 -->
      <div class="ftck-caution-box">
        <div class="ftck-cb-ttl">
          <i class="icon icon-i-green" />
          <span class="cb-ttl">주의사항</span>
        </div>

        <ul class="ul-dash">
          <li class="list">
            요청 항목별로 소모되는 포인트가 상이합니다.
          </li>
          <li class="list">
            팩트체커 선택 완료 시, 포인트가 차감됩니다.
          </li>
          <li class="list">
            팩트체커 선택이 완료되면 요청 내용 수정이 불가합니다.
          </li>
        </ul>
      </div>
      <!-- // 나의 팩트체크 수정 - 주의사항 설명박스 -->
      <div class="ftck-edit-wrap">
        <!-- 나의 팩트체크 수정 - 내용  -->
        <div class="ftck-edit-wrap">
          <div class="avatar-wrap">
            <div class="req-hgrp">
              <h6 class="ttl">
                요청 기업
              </h6>
            </div>
            <!-- 아바타 -->
            <div class="avatar-grp">
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
            </div>
          </div>
          <!-- END 아바타 -->

          <!-- 셀렉트 -->
          <div class="req-select-grp">
            <div class="req-inp-grp">
              <div class="req-hgrp">
                <p class="ttl">
                  요청 내용
                </p>
              </div>
              <div class="select-all-grp">
                <div class="select-grp">
                  <custom-slct
                    class="custom-slct01"
                    :selected="testOption"
                  >
                    <template #select>
                      {{ testOption || '선택해주세요' }}
                    </template>

                    <template #options>
                      <custom-slct-opt
                        @click="testOption = '손익계산'"
                      >
                        손익계산
                      </custom-slct-opt>

                      <custom-slct-opt
                        @click="testOption = '선택사항2'"
                      >
                        선택사항 2
                      </custom-slct-opt>
                    </template>
                  </custom-slct>
                </div>
                <div class="point-grp">
                  <p class="label">
                    사용 포인트
                  </p>
                  <p class="point">
                    100,000
                  </p>
                  <i class="icon icon-point" />
                </div>
              </div>
            </div>
          </div>
          <!-- END 셀렉트 -->

          <!-- 작성내용 -->
          <div class="req-cont-grp">
            <div class="req-hgrp">
              <p class="ttl">
                요청 내용
              </p>
            </div>
            <div class="inp-grp editor-inp-grp">
              <input
                type="text"
                class="inp editor-inp"
                value="작성된 제목의 내용"
              >
            </div>
            <div
              class="editor-cont-grp"
              style="border: 1px solid #DDDEE6"
            >
              EDITOR 들어가는 부분
            </div>
          </div>
          <!-- END 작성내용 -->
        </div>
        <!-- // 나의 팩트체크 수정 - 내용  -->
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
            작성완료
          </btn-solid>
        </div>
      </div>
    </div>
    <!-- // 마이페이지 컨텐츠 영역 -->
  </div>
</template>

<script>
export default {
  name: 'IFtckEdit',
};
</script>

<style lang="scss" scoped>
</style>
