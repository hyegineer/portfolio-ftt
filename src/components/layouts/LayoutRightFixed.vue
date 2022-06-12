<template>
  <div class="right-fixed">
    <div class="fixed-con-container">
      <div class="fixed-con-ttl">
        업데이트 내역 ({{ '5' }})
      </div>
      <div class="fixed-con-contents">
        <div class="empty-conts">
          <img
            src="@/assets/images/icon/icon-empty-update.svg"
            alt="업데이트 아이콘"
          >
          <p class="txt">
            업데이트 내역이 없습니다.
          </p>
        </div>
        <ul class="fixed-conts-list-wrap">
          <li class="fixed-con-list">
            <!-- TODO: 자사 yellow, 팩트체커 green, 오래된 항목은 badge만 -->
            <div class="badge badge-sm-square green">
              {{ '팩트체커' }}
            </div>
            <div class="date">
              {{ '2021.00.00 00:00' }}
            </div>
            <ul class="info-list">
              <li class="info">
                {{ '기업정보' }}
              </li>
              <li class="info">
                {{ '재무상태' }}
              </li>
            </ul>
            <a
              href="#"
              target="_blank"
              class="view-link"
            >+ 상세보기</a>
          </li>
          <li class="fixed-con-list">
            <!-- TODO: 자사 yellow, 팩트체커 green, 오래된 항목은 badge만 -->
            <div class="badge badge-sm-square yellow">
              {{ '자사' }}
            </div>
            <div class="date">
              {{ '2021.00.00 00:00' }}
            </div>
            <ul class="info-list">
              <li class="info">
                {{ '기업정보' }}
              </li>
              <li class="info">
                {{ '재무상태' }}
              </li>
            </ul>
            <a
              href="#"
              target="_blank"
              class="view-link"
            >+ 상세보기</a>
          </li>
          <li class="fixed-con-list">
            <!-- TODO: 자사 yellow, 팩트체커 green, 오래된 항목은 badge만 -->
            <div class="badge badge-sm-square">
              {{ '팩트체커' }}
            </div>
            <div class="date">
              {{ '2021.00.00 00:00' }}
            </div>
            <ul class="info-list">
              <li class="info">
                {{ '기업정보' }}
              </li>
              <li class="info">
                {{ '재무상태' }}
              </li>
            </ul>
            <a
              href="#"
              target="_blank"
              class="view-link"
            >+ 상세보기</a>
          </li>
          <li class="fixed-con-list">
            <!-- TODO: 자사 yellow, 팩트체커 green, 오래된 항목은 badge만 -->
            <div class="badge badge-sm-square">
              {{ '자사' }}
            </div>
            <div class="date">
              {{ '2021.00.00 00:00' }}
            </div>
            <ul class="info-list">
              <li class="info">
                {{ '기업정보' }}
              </li>
              <li class="info">
                {{ '재무상태' }}
              </li>
            </ul>
            <a
              href="#"
              target="_blank"
              class="view-link"
            >+ 상세보기</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
