<template>
  <div class="modal">
    <div class="modal-hd">
      <span class="modal-ttl">{{ ttl }}</span>
    </div>

    <div class="modal-cont">
      <slot />
    </div>

    <div class="btn-grp">
      <btn-bd-light 
        class="close-btn btn-md"
        @click="clickNo"
      >
        {{ btns[0] }}
      </btn-bd-light>
      <button
        type="button"
        class="btn-solid-dark btn-md"
        @click="clickYes"
      >
        {{ btns[1] }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    ttl: {
      type: String,
      default: '',
    },
    btns: {
      type: Array,
      default: null,
    },
  },
  methods: {
    clickYes() {
      this.$emit('clickYes');
    },
    clickNo() {
      this.$emit('clickNo');
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  border: 1px solid #dddee6;
  padding: 15px;
  width: 90%;
  max-width: 390px;

  .modal-hd {
    padding: 15px 0;
    text-align: center;
  }

  .modal-ttl {
    color: #171820;
    font-weight: 500;
    font-size: 18px;
    -webkit-text-stroke: 0.5px #171820;
  }

  .btn-grp {
    width: 100%;
    margin-top: 20px;

    .close-btn {
      flex-shrink: 0;
      width: 100%;
      max-width: 90px;
    }

    .btn-bd-light {
      color: #b8bac7;
      font-weight: 500;
    }

    .btn-solid-dark {
      width: 100%;
    }
  }
}
</style>