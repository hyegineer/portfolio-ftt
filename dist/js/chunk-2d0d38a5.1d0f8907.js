(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d38a5"],{"5ccd":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"mypage-container mypage-rfixed-container"},[a("div",{staticClass:"mypage-hgrp"},[a("breadcrumb",[a("li",{staticClass:"txt"},[t._v(" 홈 ")]),a("li",{staticClass:"txt"},[t._v(" 마이페이지 ")]),a("li",{staticClass:"txt"},[t._v(" 기업정보 ")]),a("li",{staticClass:"txt"},[t._v(" 포트폴리오 ")])]),a("h2",{staticClass:"ttl"},[t._v(" 기업정보 ")])],1),a("div",{staticClass:"mypage-cont-wrap"},[a("div",{staticClass:"mypage-common-card"},[t._m(0),a("layout-right-fixed"),a("article",{staticClass:"guide-box"},[t._m(1),a("div",{staticClass:"btn-grp"},[a("btn-solid-grayblue",{staticClass:"btn-sm",on:{click:function(s){return t.openModal("addEnterprise")}}},[t._v(" 투자기업 추가 ")])],1)]),a("div",{staticClass:"board-list-grp-ttl"},[t._m(2),a("div",{staticClass:"txt-right"},[a("custom-slct",{staticClass:"page-custom-slct custom-slct02",attrs:{selected:t.searchOptions},scopedSlots:t._u([{key:"select",fn:function(){return[t._v(" "+t._s(t.searchOptions||"이름 순")+" ")]},proxy:!0},{key:"options",fn:function(){return[a("custom-slct-opt",{on:{click:function(s){t.searchOptions="이름 순"}}},[t._v(" 이름 순 ")]),a("custom-slct-opt",{on:{click:function(s){t.searchOptions="최신 순"}}},[t._v(" 최신 순 ")])]},proxy:!0}])})],1)]),a("div",{staticClass:"pflio-grid-grp"},t._l(5,(function(s,i){return a("div",{key:i,staticClass:"pflio-grid"},[a("div",{staticClass:"pflio-wrap"},[a("div",{staticClass:"pflio"},[a("i",{staticClass:"icon icon-i-white pflio-desc-icon",on:{click:function(s){return t.clickIicon(i)}}}),a("div",{staticClass:"avatar-with-name col-avatar-with-name"},[a("avatar"),t._m(3,!0)],1),t._m(4,!0),a("div",{staticClass:"pflio-ctrl-btns"},[a("btn-bd-light",{staticClass:"btn-rounded btn-xsm btn-edit-ctrl"},[a("i",{staticClass:"icon icon-pen"}),a("span",{staticClass:"txt"},[t._v("수정")])]),a("btn-bd-light",{staticClass:"btn-rounded btn-xsm btn-edit-ctrl"},[a("i",{staticClass:"icon icon-trash"}),a("span",{staticClass:"txt"},[t._v("삭제")])])],1)]),t.selectedIndex===i?a("div",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:t.awayPflioDescBox,expression:"awayPflioDescBox"}],staticClass:"pflio-desc-box"},[a("span",{staticClass:"ttl"},[t._v("투자정보 (3)")]),t._m(5,!0)]):t._e()])])})),0),a("div",{staticClass:"pflio-list-grp"},[a("empty-contents",{attrs:{txt:"투자한 기업이 없습니다. <br>포트폴리오에서 기업을 추가하세요."}})],1),a("div",{staticClass:"pagination"},[a("btn-square-bd",{on:{click:function(s){return t.window.alert("이전 버튼 누르기")}}},[a("i",{staticClass:"icon icon-page-prev"}),a("span",{staticClass:"is-voice-only"},[t._v("이전")])]),a("button",{staticClass:"num-btn is-active",attrs:{type:"button"}},[t._v(" 1 ")]),a("button",{staticClass:"num-btn",attrs:{type:"button"}},[t._v(" 2 ")]),a("button",{staticClass:"num-btn",attrs:{type:"button"}},[t._v(" 3 ")]),a("button",{staticClass:"num-btn",attrs:{type:"button"}},[t._v(" 4 ")]),a("button",{staticClass:"num-btn",attrs:{type:"button"}},[t._v(" ··· ")]),a("button",{staticClass:"num-btn",attrs:{type:"button"}},[t._v(" 10 ")]),a("btn-square-bd",{on:{click:function(s){return t.window.alert("다음 버튼 누르기")}}},[a("i",{staticClass:"icon icon-page-next"}),a("span",{staticClass:"is-voice-only"},[t._v("다음")])])],1)],1)]),a("modal-dialog",[a("modal-light-box",{on:{click:t.closeModal}}),a("modal",{class:{"is-show":t.$store.state.modal.visible&&"addEnterprise"===t.$store.state.modal.type},attrs:{wide:"",ttl:"투자기업 추가하기"}},[a("div",{staticClass:"modal-cont md-choice-cont"},[a("div",{staticClass:"inp-grp inp-sch-grp"},[a("input",{staticClass:"inp",attrs:{type:"text",placeholder:"기업명 / 기업 고유 아이디를 검색하세요."}}),a("button",{staticClass:"inp-del-btn",attrs:{type:"button"}},[a("span",{staticClass:"is-voice-only"},[t._v("검색어 지우기")])]),a("button",{staticClass:"inp-sch-btn",attrs:{type:"button"}},[a("span",{staticClass:"is-voice-only"},[t._v("검색하기")])])]),a("div",{staticClass:"cnt-txt-grp"},[a("div",{staticClass:"txt"},[a("span",{staticClass:"highlight"},[a("u",[t._v("'검색어'")])]),t._v(" 에 대한 전체 검색 결과 "),a("span",{staticClass:"bold"},[t._v("15")]),t._v("건 ")])]),a("div",{staticClass:"box-list-grp"},t._l(10,(function(s,i){return a("div",{key:i,staticClass:"box-choice-list box-list"},[a("div",{staticClass:"txt-dark-gray"},[a("p",{staticClass:"txt-dark"},[t._v(" 주식회사 팩트컴퍼니 ")]),a("span",{staticClass:"txt-gray"},[t._v("김철수 02-000-0000")])]),a("input",{staticClass:"is-none check-switch",attrs:{id:"enter"+i,type:"radio",name:"enter"}}),a("label",{staticClass:"check-onoff",attrs:{for:"enter"+i}})])})),0),a("empty-contents",{attrs:{txt:"추가할 기업이 없습니다."}})],1),a("div",{staticClass:"modal-btn-wrap"},[a("btn-bd-light",{staticClass:"btn-fb btn-md btn-cancel",on:{click:t.closeModal}},[t._v(" 닫기 ")]),a("btn-solid-dark",{staticClass:"btn-md",on:{click:function(s){return t.$router.push("etpr-portfolio-add")}}},[t._v(" 선택완료 ")])],1)])],1)],1)},c=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"cont-hgrp"},[a("p",{staticClass:"ttl"},[t._v(" 포트폴리오 ")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"guide-box-cont"},[a("h6",{staticClass:"lbel"},[t._v(" 안내사항 ")]),a("p",{staticClass:"txt"},[t._v(" 기업 프로필에 '포트폴리오'로 노출됩니다. ")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",{staticClass:"ttl-txt"},[t._v(" 총 "),a("span",{staticClass:"bold"},[t._v("15")]),t._v("개 ")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"name-grp"},[a("span",{staticClass:"name"},[t._v(" 주식회사 팩트컴퍼니 ")]),a("ul",{staticClass:"name-subtxt-grp"},[a("li",{staticClass:"name-subtxt-list"},[t._v(" 기업규모 ")]),a("li",{staticClass:"name-subtxt-list"},[t._v(" 산업분류 ")]),a("li",{staticClass:"name-subtxt-list"},[t._v(" 산업분야 ")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"pflio-toggle-item"},[a("div",{staticClass:"toggle-item"},[a("label",{staticClass:"tg-lbel",attrs:{for:"open01"}},[t._v("공개여부")]),a("input",{staticClass:"is-none toggle-switch",attrs:{id:"open01",type:"checkbox"}}),a("label",{staticClass:"toggle-onoff",attrs:{for:"open01"}})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"desc"},[a("dl",{staticClass:"pflio-dlist"},[a("dt",{staticClass:"dttl"},[t._v(" 재원명 ")]),a("dd",{staticClass:"ddt"},[a("strong",{staticClass:"amount"},[t._v("0,000,000,000,000")]),a("span",{staticClass:"unit"},[t._v("원")])])]),a("dl",{staticClass:"pflio-dlist"},[a("dt",{staticClass:"dttl"},[t._v(" 재원명이 길어질 때 2줄 이상 넘어갑니다. 재원명이 길어질 때 2줄 이상 넘어갑니다. ")]),a("dd",{staticClass:"ddt"},[a("strong",{staticClass:"amount"},[t._v("0,000,000,000,000")]),a("span",{staticClass:"unit"},[t._v("원")])])]),a("dl",{staticClass:"pflio-dlist"},[a("dt",{staticClass:"dttl"},[t._v(" 재원명이 길어질 때 2줄 이상 넘어갑니다. 재원명이 길어질 때 2줄 이상 넘어갑니다. ")]),a("dd",{staticClass:"ddt"},[a("strong",{staticClass:"amount"},[t._v("0,000,000,000,000")]),a("span",{staticClass:"unit"},[t._v("원")])])])])}],n={name:"IEtprPortfolioMain",data:function(){return{searchOptions:"이름 순",selectedIndex:null}},methods:{clickIicon:function(t){this.selectedIndex=t},awayPflioDescBox:function(){this.selectedIndex=null}}},l=n,e=a("2877"),o=Object(e["a"])(l,i,c,!1,null,"107c82c0",null);s["default"]=o.exports}}]);