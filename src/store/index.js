import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import keepAlive from './modules/keep-alive'
import settings from './modules/settings'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    alertPopup: {
      isPopupVisible: false,
      title: '',
      message: '',
      onClose: () => {}
    },
    confirmPopup: {
      isPopupVisible: false,
      title: '',
      message: '',
      onConfirm: () => {},
      onCancel: () => {}
    },
    loading: {
      isVisible: false
    },
    modal: { // 페이지에 맞는 팝업
      visible: false,
      type: null
    },
    tooltip: { // 툴팁 (모바일)
      visible: false,
      type: null
    },
    tooltipSellerDetail: null
  },
  mutations: {
    setIsAlertPopup(state, payload) {
      state.alertPopup = payload
    },
    setIsConfirmPopup(state, payload) {
      state.confirmPopup = payload
    },
    setIsVisibleLoading(state, payload) {
      state.loading.isVisible = payload
    },
    setIsModal(state, payload) {
      state.modal = payload
    },
    setIsTooltip(state, payload) {
      state.tooltip = payload
    },
    setIsSellerDetail(state, payload) {
      state.tooltipSellerDetail = payload
    }
  },
  actions: {
    toggleAlert({ commit }, payload) {
      commit('setIsAlertPopup', payload)
    },
    toggleConfirm({ commit }, payload) {
      commit('setIsConfirmPopup', payload)
    },
    toggleLoading({ commit }, payload) {
      commit('setIsVisibleLoading', payload)
    },
    toggleModal({ commit }, payload) {
      commit('setIsModal', payload)
    },
    toggleTooltip({ commit }, payload) {
      commit('setIsTooltip', payload)
    },
    putSellerDetail({ commit }, payload) {
      commit('setIsSellerDetail', payload)
    }
  },
  modules: {
    user,
    keepAlive,
    settings
  }
})
