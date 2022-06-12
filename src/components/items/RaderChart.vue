<template>
  <article class="value-chart-wrap">
    <div v-if="data">
      <div class="wrap-hgrp">
        <h4 class="wrap-ttl">
          기업가치 평균 지수
        </h4>
        <span class="wrap-average-star">
          <i class="icon icon-star" />
          <strong class="rating">{{ dataAverage }}</strong>
        </span>
      </div>

      <apexchart
        id="valueChart"
        type="radar"
        height="300"
        :options="chartOptions"
        :series="series"
      />

      <ul class="xaxis-list-grp">
        <li
          v-for="(item, index) in chartOptions.xaxis.categories"
          :key="index"
          class="xaxis-list"
        >
          <div class="xaxis-item">
            <span class="lbel">{{ item }}</span>
            <strong class="cont">{{ series[0].data[index].toFixed(1) }}</strong>
          </div>
        </li>
      </ul>
    </div>

    <div
      v-else
      class="nothing-cont"
    >
      <empty-contents txt="별점이 아직 없습니다." />
    </div>
  </article>
</template>

<script>
// https://apexcharts.com/docs/chart-types/radar/

export default {
  name: 'Charts',
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
  data() {
    return{
      series: [{
        name: '기업가치 평균지수',
        data: Object.values(this.data),
      }],
      chartOptions: {
        chart: { // 차트 타입 및 백그라운드 스타일
          height: 545,
          type: 'radar',
          background: '#171820',
          toolbar: {
            show: false,
          },
        },
        plotOptions: { // 폴리곤 옵션
          radar: {
            size: 110, // 폴리곤 사이즈 조절
            polygons: {
              strokeColors: '#45454C', // 폴리곤 단위 border 색깔
            },
          },
        },
        stroke: { // 영역 stroke
          width: 1,
          colors: ['#00EB79'], // 영역 stroke 색깔
        },
        fill: { // 영역 fill 
          colors: ['#2DF118'],
          opacity: 0.2,
        },
        markers: { // 마커 옵션
          size: 2,
          colors: ['#fff'],
          strokeColor: '#fff',
        },
        yaxis: { // 1~5 단위 숨기기
          show: false,
        },
        xaxis: {
          type: 'category',
          categories: Object.keys(this.data),
          labels: {
            show: true,
            style: {
              colors: this.colorsArr(),
              fontFamily: 'NexonLv2Gothic, sans-serif',
              fontSize: '15px',
            },
          },
        },
      },
      chartDataLength: null,
    };
  },
  computed: {
    dataAverage() {
      let sum = null;
      const starArr = this.series[0].data;
      
      starArr.forEach(x => { sum += x; });

      return (sum / starArr.length).toFixed(1);
    },
  },
  methods: {
    colorsArr() {
      const colorsArr = [];
      const colorsArrLength = Object.keys(this.data).length;

      for(let i = 0; i < colorsArrLength; i++) {
        colorsArr.push('#00eb79');
      }

      return colorsArr;
    },
  },
};
</script>

