(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22c809"],{f405:function(t,s,a){"use strict";a.r(s);var l=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"mypage-container"},[a("div",{staticClass:"mypage-hgrp"},[a("breadcrumb",[a("li",{staticClass:"txt"},[t._v(" 홈 ")]),a("li",{staticClass:"txt"},[t._v(" 마이페이지 ")]),a("li",{staticClass:"txt"},[t._v(" 기업정보 ")]),a("li",{staticClass:"txt"},[t._v(" 구성원 관리 ")])]),a("h2",{staticClass:"ttl"},[t._v(" 기업정보 ")])],1),a("div",{staticClass:"mypage-cont-wrap"},[a("div",{staticClass:"mypage-common-card"},[t._m(0),a("article",{staticClass:"guide-box"},[t._m(1),a("div",{staticClass:"btn-grp"},[a("btn-solid-grayblue",{staticClass:"btn-sm",on:{click:function(s){return t.openModal("addMember")}}},[t._v(" 구성원 추가 ")]),a("btn-bd-light",{staticClass:"btn-sm",on:{click:function(s){return t.openModal("openSetting")}}},[t._v(" 항목 공개 설정 ")])],1)]),t._m(2),a("div",{staticClass:"member-list-grp"},t._l(5,(function(s,l){return a("div",{key:l,staticClass:"member-list"},[a("avatar"),a("article",{staticClass:"member-info"},[a("div",{staticClass:"account-info"},[a("h5",{staticClass:"name"},[t._v(" "+t._s("김철수")+" ")]),a("span",{staticClass:"mail"},[t._v(t._s("email@email.com"))]),a("dl",{staticClass:"dlist"},[a("dt",{staticClass:"lbel"},[t._v(" 키포인트 ")]),a("dd",{staticClass:"txt"},[t._v(" "+t._s("키포인트 텍스트")+" ")])])]),a("ul",{staticClass:"ul-bullet"},[a("li",{staticClass:"list"},[t._v(" "+t._s("이력사항 텍스트")+" ")]),a("li",{staticClass:"list"},[t._v(" "+t._s("이력사항 텍스트")+" ")]),a("li",{staticClass:"list"},[t._v(" "+t._s("이력사항 텍스트")+" ")])])]),a("div",{staticClass:"member-btn-grp btn-grp"},[a("btn-bd-light",{staticClass:"btn-rounded btn-xsm btn-edit-ctrl",on:{click:function(s){return t.openModal("editMember")}}},[a("i",{staticClass:"icon icon-pen"}),a("span",{staticClass:"txt"},[t._v("수정")])]),a("btn-bd-light",{staticClass:"btn-rounded btn-xsm btn-edit-ctrl",on:{click:function(s){return t.confirm("구성원을 삭제하시겠습니까?")}}},[a("i",{staticClass:"icon icon-trash"}),a("span",{staticClass:"txt"},[t._v("삭제")])])],1)],1)})),0),a("div",{staticClass:"member-list-grp"},[a("empty-contents",{attrs:{txt:"구성원이 없습니다."}})],1)])]),a("modal-dialog",[a("modal-light-box",{on:{click:t.closeModal}}),a("modal",{class:{"is-show":t.$store.state.modal.visible&&"openSetting"===t.$store.state.modal.type},attrs:{ttl:"항목 공개 설정"}},[a("div",{staticClass:"modal-cont"},[a("ul",{staticClass:"toggle-list-grp"},[a("li",{staticClass:"toggle-list"},[a("span",{staticClass:"name"},[t._v("이메일")]),a("input",{staticClass:"is-none toggle-switch",attrs:{id:"openEmail",type:"checkbox"}}),a("label",{staticClass:"toggle-onoff",attrs:{for:"openEmail"}})]),a("li",{staticClass:"toggle-list"},[a("span",{staticClass:"name"},[t._v("이름")]),a("input",{staticClass:"is-none toggle-switch",attrs:{id:"openName",type:"checkbox"}}),a("label",{staticClass:"toggle-onoff",attrs:{for:"openName"}})]),a("li",{staticClass:"toggle-list"},[a("span",{staticClass:"name"},[t._v("키포인트")]),a("input",{staticClass:"is-none toggle-switch",attrs:{id:"openKeypoint",type:"checkbox"}}),a("label",{staticClass:"toggle-onoff",attrs:{for:"openKeypoint"}})]),a("li",{staticClass:"toggle-list"},[a("span",{staticClass:"name"},[t._v("이력사항")]),a("input",{staticClass:"is-none toggle-switch",attrs:{id:"openHistory",type:"checkbox"}}),a("label",{staticClass:"toggle-onoff",attrs:{for:"openHistory"}})])])]),a("div",{staticClass:"modal-btn-wrap"},[a("btn-bd-light",{staticClass:"btn-fb btn-md btn-cancel",on:{click:t.closeModal}},[t._v(" 닫기 ")]),a("btn-solid-dark",{staticClass:"btn-md"},[t._v(" 저장 ")])],1)]),a("modal",{class:{"is-show":t.$store.state.modal.visible&&"addMember"===t.$store.state.modal.type},attrs:{wide:"",ttl:"구성원 추가"}},[a("div",{staticClass:"modal-cont modal-scrl-cont"},[a("form",[a("fieldset",{staticClass:"ffieldset"},[a("legend",{staticClass:"ffieldset-ttl"},[t._v(" 프로필 이미지 ")]),a("div",{staticClass:"file-inp-grp"},[a("div",{staticClass:"input-img-frame input-circle-img-frame"},[a("span",{staticClass:"btn btn-upload"},[a("i",{staticClass:"icon icon-cam"}),a("span",{staticClass:"is-voice-only"},[t._v("기업 로고 이미지 업로드")])])]),a("p",{staticClass:"ffieldset-guide"},[t._v(" 해상도 100*100px 이상의 JPG, PNG 파일을 첨부해주세요. "),a("br"),t._v(" 이미지 미첨부시, 기본이미지로 설정됩니다. ")])])]),a("fieldset",{staticClass:"ffieldset"},[a("legend",{staticClass:"ffieldset-ttl"},[t._v(" 기본 정보 ")]),a("div",{staticClass:"lbel-inp-grp"},[a("label",{staticClass:"lbel"},[t._v("이름")]),a("div",{staticClass:"inp-grp"},[a("input",{staticClass:"inp",attrs:{type:"text",placeholder:"이름 입력"}})])]),a("div",{staticClass:"lbel-inp-grp"},[a("label",{staticClass:"lbel"},[t._v("이메일")]),a("div",{staticClass:"inp-grp"},[a("input",{staticClass:"inp",attrs:{type:"email",placeholder:"이메일 입력"}})])]),a("div",{staticClass:"lbel-inp-grp"},[a("label",{staticClass:"lbel"},[t._v("키포인트")]),a("div",{staticClass:"inp-grp"},[a("input",{staticClass:"inp",attrs:{type:"text",placeholder:"ex) 10개 기업 창업"}})])]),a("div",{staticClass:"lbel-inp-grp"},[a("label",{staticClass:"lbel"},[t._v("경력사항")]),a("div",{staticClass:"inp-grp"},[a("input",{staticClass:"inp",attrs:{type:"text"}})]),a("div",{staticClass:"add-inp-grp"},[a("div",{staticClass:"inp-grp inp-btn-grp"},[a("input",{staticClass:"inp",attrs:{type:"text"}}),a("btn-square-bd",{staticClass:"del-btn"},[a("span",{staticClass:"is-voice-only"},[t._v("항목 삭제")])])],1)]),a("btn-bd-dark",{staticClass:"btn-md btn-full add-inp-btn"},[t._v(" 경력사항 추가 ")])],1)])])]),a("div",{staticClass:"modal-btn-wrap"},[a("btn-bd-light",{staticClass:"btn-fb btn-md btn-cancel",on:{click:t.closeModal}},[t._v(" 닫기 ")]),a("btn-solid-dark",{staticClass:"btn-md"},[t._v(" 추가완료 ")])],1)]),a("modal",{class:{"is-show":t.$store.state.modal.visible&&"editMember"===t.$store.state.modal.type},attrs:{wide:"",ttl:"구성원 수정"}},[a("div",{staticClass:"modal-cont modal-scrl-cont"},[a("form",[a("fieldset",{staticClass:"ffieldset"},[a("legend",{staticClass:"ffieldset-ttl"},[t._v(" 프로필 이미지 ")]),a("div",{staticClass:"file-inp-grp"},[a("div",{staticClass:"input-img-frame input-circle-img-frame"},[a("span",{staticClass:"btn btn-upload"},[a("i",{staticClass:"icon icon-cam"}),a("span",{staticClass:"is-voice-only"},[t._v("기업 로고 이미지 업로드")])])]),a("p",{staticClass:"ffieldset-guide"},[t._v(" 해상도 100*100px 이상의 JPG, PNG 파일을 첨부해주세요. "),a("br"),t._v(" 이미지 미첨부시, 기본이미지로 설정됩니다. ")])])]),a("fieldset",{staticClass:"ffieldset"},[a("legend",{staticClass:"ffieldset-ttl"},[t._v(" 기본 정보 ")]),a("div",{staticClass:"lbel-inp-grp"},[a("label",{staticClass:"lbel"},[t._v("이름")]),a("div",{staticClass:"inp-grp"},[a("input",{staticClass:"inp",attrs:{type:"text",placeholder:"이름 입력",value:"김철수"}})])]),a("div",{staticClass:"lbel-inp-grp"},[a("label",{staticClass:"lbel"},[t._v("이메일")]),a("div",{staticClass:"inp-grp"},[a("input",{staticClass:"inp",attrs:{type:"email",placeholder:"이메일 입력",value:"gooseongwon@naver.com"}})])]),a("div",{staticClass:"lbel-inp-grp"},[a("label",{staticClass:"lbel"},[t._v("키포인트")]),a("div",{staticClass:"inp-grp"},[a("input",{staticClass:"inp",attrs:{type:"text",placeholder:"ex) 10개 기업 창업",value:"좋은 개발자"}})])]),a("div",{staticClass:"lbel-inp-grp"},[a("label",{staticClass:"lbel"},[t._v("경력사항")]),a("div",{staticClass:"inp-grp"},[a("input",{staticClass:"inp",attrs:{type:"text",value:"네이버 근무"}})]),a("div",{staticClass:"add-inp-grp"},[a("div",{staticClass:"inp-grp inp-btn-grp"},[a("input",{staticClass:"inp",attrs:{type:"text"}}),a("btn-square-bd",{staticClass:"del-btn"},[a("span",{staticClass:"is-voice-only"},[t._v("항목 삭제")])])],1)]),a("btn-bd-dark",{staticClass:"btn-md btn-full add-inp-btn"},[t._v(" 경력사항 추가 ")])],1)])])]),a("div",{staticClass:"modal-btn-wrap"},[a("btn-bd-light",{staticClass:"btn-fb btn-md btn-cancel",on:{click:t.closeModal}},[t._v(" 닫기 ")]),a("btn-solid-dark",{staticClass:"btn-md"},[t._v(" 수정완료 ")])],1)])],1)],1)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"cont-hgrp"},[a("p",{staticClass:"ttl"},[t._v(" 구성원 관리 ")]),a("p",{staticClass:"ttl-sub"},[t._v(" 기업의 구성원을 관리합니다. ")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"guide-box-cont"},[a("h6",{staticClass:"lbel"},[t._v(" 안내사항 ")]),a("p",{staticClass:"txt"},[t._v(" 기업 프로필에 '구성원'으로 노출됩니다. ")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"member-list-grp-ttl"},[a("p",{staticClass:"txt"},[t._v(" 총 "),a("span",{staticClass:"bold"},[t._v("0")]),t._v("명 ")])])}],e={name:"SEtprMemberManage"},c=e,n=a("2877"),o=Object(n["a"])(c,l,i,!1,null,"08df27b2",null);s["default"]=o.exports}}]);