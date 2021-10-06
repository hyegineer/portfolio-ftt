<template>
  <div class="page">
    <layout-header />
    <div class="narrow-panel auth-panel">
      <div
        class="banner-wrap"
        style="border: 5px solid orange"
      >
        배너영역 420X160
      </div>
      <p class="big-ttl">
        <b class="bold-txt">팩트시트에 로그인</b>하고,<br>다양한 서비스를 이용해보세요!
      </p>
      <div class="input-grp">
        <input
          type="text"
          class="input"
        >
        <label
          for=""
          class="label"
        >이메일 아이디</label>
      </div>


      <!-- 혜진코드 -->
      <div
        class="effect-inp-grp"
        :class="{'is-focused' : isFocused.userId}"
      >
        <label
          for=""
          class="label"
        >이메일 아이디</label>
        <input
          v-model="payload.userId"
          type="text"
          class="input"
          @focus="isFocused.userId = true"
          @blur="awayInputId" 
        >
      </div>

      <div
        class="effect-inp-grp"
        :class="{'is-focused' : isFocused.pw}"
      >
        <label
          for=""
          class="label"
        >비밀번호 입력</label>
        <input
          v-model="payload.password"
          type="password"
          class="input"
          @focus="isFocused.pw = true"
          @blur="awayInputPw"
        >
      </div>
      <!-- // 혜진코드 -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return{
      payload: {
        userId: null,
        password: null,
      },
      isFocused: {
        userId: false,
        pw: false,
      },
    };
  },
  methods: {
    awayInputId() {
      if(!this.payload.userId) {
        this.isFocused.userId = false;
      }
    },
    awayInputPw() {
      if(!this.payload.password) {
        this.isFocused.pw = false;
      }
    },
  },
};
</script>

<style>
</style>
