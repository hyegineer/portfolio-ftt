<template>
  <div class="column-chart-wrap">
    <apexchart
      id="columnChart"
      type="bar"
      height="350"
      :options="chartOptions"
      :series="series"
    />
  </div>
</template>

<script>
export default {
  data() {
    return{
      series: [{
        data: [0, 500, 1000],
      }],
      chartOptions: {
        states: {
          hover: {
            filter: {
              type: 'darken',
              value: 1,
            },
          },
          active: {
            allowMultipleDataPointsSelection: false,
            filter: {
              type: 'darken',
              value: 1,
            },
          },
        },
        chart: {
          height: 350,
          type: 'bar',
          toolbar: { // 다운로드 jpg, png, svg 막기
            show: false,
          },
        },
        colors: ['#CDCFDB', '#CDCFDB', '#00EB79'],
        plotOptions: {
          bar: {
            columnWidth: '45%',
            distributed: true,
            dataLabels: {
              position: 'top', // top, center, bottom
            },
          },
        },
        dataLabels: {
          formatter: function (val, opts) {
            return val.toLocaleString();
          },
          enabled: true,
          offsetY: -30,
          style: {
            fontFamily: 'NexonLv2Gothic, sans-serif',
            fontSize: '12px',
            colors: ['#5C5E70', '#5C5E70', '#000'],
          },
        },
        tooltip: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        xaxis: {
          categories: [
            '-', '2020', '2021',
          ],
          labels: {
            style: {
              colors: ['#FFB300'],
              fontSize: '12px',
            },
          },
          tooltip: {
            enabled: false,
          },
        },
        yaxis: {
          show: false,
        },
      }, 
    };
  },
};
</script>

<style lang="scss" scoped>
</style>