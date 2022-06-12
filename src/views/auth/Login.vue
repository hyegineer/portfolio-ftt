<template>
  <div class="page login-page">
    <layout-header />
    <div class="page-container">
      <div class="narrow-panel auth-panel">
        <div
          class="banner-wrap"
          style="border: 5px solid orange"
        >
          배너영역 420X160
        </div>
        <p class="effect-ttl">
          <b class="bold-txt">팩트시트에 로그인</b>하고,<br>다양한 서비스를 이용해보세요!
        </p>
        <form class="form-area auth-form-area ftck-auth-form-area">
          <fieldset class="ffieldset">
            <legend class="ffieldset-ttl is-voice-only">
              로그인 정보
            </legend>
            <div class="effect-inp-wrap">
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
                >비밀번호</label>
                <input
                  v-model="payload.password"
                  type="password"
                  class="input"
                  @focus="isFocused.pw = true"
                  @blur="awayInputPw"
                >
              </div>
            </div>
            <btn-solid
              class="btn-xlg btn-full"
              @click="window.alert('로그인 버튼을 클릭하셨습니다.')"
            >
              로그인
            </btn-solid>
          </fieldset>
        </form>
        <div class="find-wrap">
          <p class="dec">
            계정을 잊으셨나요?
          </p>
          <div class="btn-wrap">
            <router-link
              to="/find-id"
              class="find-link"
            >
              아이디 찾기
            </router-link>
            <router-link
              to="/find-pw"
              class="find-link"
            >
              비밀번호 찾기
            </router-link>
          </div>
        </div>
        <div class="btn-join-wrap">
          <btn-bd-dark
            class="btn-md btn-full"
            @click="$router.push('/register-intro')"
          >
            팩트시트 가입하기
          </btn-bd-dark>
        </div>
      </div>
    </div>
    <layout-footer />
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
