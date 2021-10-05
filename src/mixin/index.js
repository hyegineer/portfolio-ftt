import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import { mixin as clickaway } from 'vue-clickaway';
import { saveAs } from 'file-saver';
import _ from 'lodash';
import reactNativeWebViewHelper from '~@/lib/reactNativeWebViewHelper';
import formatters from '~@/lib/formatters';
import pagination from '~@/lib/pagination';
import processImageFile from '~@/lib/processImageFile';
import formDatas from '~@/lib/formDatas';

import example from '~@/constants/example';
import addrList from '~@/constants/addr-list';
import dayOfTheWeek from '~@/constants/day-of-the-week';
import bankcode from '~@/constants/bankcode';
import scheduleState from '~@/constants/schedule-state';
import msgInfoState from '~@/constants/msg-info-state';

const mixin = {
    mixins: [clickaway],
    created() {
        this.document = document;
        this.window = window;
        this._ = _;
        this.webUrl = process.env.VUE_APP_WEB_URL;
        this.apiUrl = process.env.VUE_APP_API_URL;
        this.storageUrl = process.env.VUE_APP_STORAGE_URL;
        this.scheme = process.env.VUE_APP_SCHEME_NAME;
        this.version = process.env.VUE_APP_VERSION;

        this.onerrorSrc =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKfdLFp3Byzzs4rXrkc3agvVwY9JoZKpDJrw&usqp=CAU';

        this.$constants = {
            example,
            addrList,
            dayOfTheWeek,
            bankcode,
            scheduleState,
            msgInfoState,
            payState: Object.freeze({
                0: '결제대기(미결제, 가상계좌 입금대기)',
                1: '결제완료',
                2: '환불신청',
                3: '환불완료',
                4: '결제오류',
                5: '환불거절', // (필요하면)
                6: '기타',
                7: '구독상품변경으로인한 환불',
                8: '일정변경중',
            }),
            userType: Object.freeze({
                def: '광고주',
                host: '쇼호스트',
                'host-org': '대행사',
            }),
            payType: Object.freeze({
                card: '카드',
            }),
            hostScheduleState: Object.freeze({
                '-1': '광고주취소',
                0: '취소',
                1: '예약대기',
                2: '예약확정',
                3: '방송완료',
                4: '노쇼',
                13: '예약변경요청',
                14: '예약변경승인',
                15: '예약변경거절',
            }),
            accountSettlementState: Object.freeze({
                1: '정산중',
                2: '정산완료',
                3: '정산거절',
            }),
        };
        this.savedPositions = [];
        this.unlockScroll();
    },
    computed: {
        ...mapGetters([
            'user',
            'isUser',
            'isUserVerified',
            'isUserSocial',
            'isDef',
            'isHost',
            'isHostOrg',
            'settings',
            'keepAlive',
        ]),
    },
    methods: {
        ...mapActions([
            'userLogin',
            'userDetail',
            'userDetailUpdate',
            'userLogout',
            'settingsLoad',
            'keep',
            'unkeep',
            'clearKeep',
            'toggleAlert',
            'toggleConfirm',
            'toggleLoading',
            'toggleModal',
            'toggleTooltip',
            'putSellerDetail',
        ]),
        ...reactNativeWebViewHelper,
        ...formatters,
        ...pagination,
        ...processImageFile,
        formDatas,
        formatDate(date) {
            return this.$moment(date).format('YYYY.MM.DD');
        },
        format24Date(date) {
            return this.$moment(date).format('YYYY.MM.DD HH:mm');
        },
        formatWeeks24Date(date) {
            return this.$moment(date).locale('ko').format('YYYY.MM.DD(ddd) HH:mm');
        },
        formatWeeksDate(date) {
            return this.$moment(date).locale('ko').format('YYYY.MM.DD(ddd)');
        },
        formatAvarage(data) {
            if(!data) {
                return '0.0';
            }

            return Number(data).toFixed(1);
        },
        formatPrice(price) {
            return `${Number(price).toLocaleString()}`;
        },
        // - 포함해서 숫자만 입력하게 하는 정규식 (계좌번호 입력할 때)
        onlyNumAndHyphen(data) {
            return data.replace(/[^0-9-]/gi, '');
        },
        // 모든 특수문자 제외해서 숫자만 입력하게 하는 정규식
        onlyNum(data) {
            return data.replace(/[^0-9]/g, '');
        },
        // String "10,000" -> Number 10000 으로 변환 
        strToNum(str) {
            if(str) {
                return parseInt(str.replace(/,/g, ''));
            }else{
                return null;
            }
        },
        // 입력시 세자리수마다 콤마 달아서 변환 
        commaFormat(num) {
            function comma(str) {
                str = String(str);
                return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
            }

            function uncomma(str) {
                str = String(str);
                return str.replace(/[^\d]+/g, '');
            }

            if(typeof num === 'string') {
                const number = num.replace(/(^0+)/, ''); // 왼쪽에 붙은 0 제거
                return comma(uncomma(number));
            }else{
                return comma(uncomma(num));
            }
        },
        scrollToTop() {
            // 스크롤 컨테이너 전체 스크롤 위로 이동
            document.querySelectorAll('html,body,#app,#page').forEach(x => { x.scrollTop = 0; });
        },
        lockScroll() {
            document.querySelector('html').style.overflow = 'hidden';
            // if (window.innerWidth >= 600) {
            //     document.querySelector('html').style.paddingRight = 4 + 'px';
            // }
        },
        unlockScroll() {
            document.querySelector('html').style.overflow = 'auto';
            // if (window.innerWidth >= 600) {
            //     document.querySelector('html').style.paddingRight = 0;
            // }
        },
        savePositions(selectors = []) {
            // 주의! : $router.push, $router.replace 호출 직전에 실행
            // keep-alive 상태인 엘리먼트들의 스크롤 상태 저장 (최외곽의 scroll인 경우 필요없음)
            for (const selector of selectors) {
                const position = {
                    selector,
                    x: 0,
                    y: 0,
                };

                const elem = document.querySelector(selector);
                if (elem) {
                    position.x = elem.scrollLeft;
                    position.y = elem.scrollTop;

                    this.savedPositions.push(position);
                }
            }
        },
        restorePositions(selectors = []) {
            // 주의! : activated 라이프사이클 함수에서 실행
            // keep-alive 상태인 엘리먼트들의 스크롤 상태 복구 후 초기화 (최외곽의 scroll인 경우 필요없음)
            for (const selector of selectors) {
                const elem = document.querySelector(selector);
                if (elem) {
                    const found = this.savedPositions.find(x => x.selector === selector);
                    if (found) {
                        elem.scrollTo({
                            left: found.x,
                            top: found.y,
                        });
                    }
                }
            }

            // 초기화
            this.savedPositions = [];
        },
        async download(path, filename = 'download.txt') {
            try {
                this.toggleLoading(true);

                await this.$axios
                    .get(path, {
                        responseType: 'blob',
                    })
                    .then((res) => {
                        // 웹서버 내부적으로 404일 때 301로 가져오는 index.html 무시
                        if (res.status === 301) {
                            throw new Error();
                        }

                        let downloadFilename = filename;
                        if (res.headers['content-disposition']) {
                            downloadFilename = res.headers['content-disposition']
                                .split('filename=')[1]
                                .replace(/['"]+/g, ''); // 헤더에서 파일명 추출 후 따옴표 제거
                        }
                        saveAs(new Blob([res.data]), downloadFilename);
                    });
            } catch (e) {
                console.error(e);

                switch (e.response?.data?.state) {
                default:
                    this.alert('서버오류. 지속되면 고객센터로 연락바랍니다.');
                }
            } finally {
                this.toggleLoading(false);
            }
        },
        async loadFile(e) {
            const fileObject = this._.get(e, 'target.files[0]', null);
            if (fileObject) {
                const file = fileObject;
                const dataURL = await this.readAsDataURLAsync(file);
                return { file, dataURL };
            }

            return { file: null, dataURL: null };
        },
        alert(title = '', desc = '', onClose = () => {}) {
            return new Promise((resolve, reject) => {
                if (typeof desc !== 'string') {
                    reject(new Error('desc 매개변수에는 문자열이 들어가야 합니다'));
                }

                this.toggleAlert({
                    isPopupVisible: true,
                    title,
                    desc,
                    onClose: async () => {
                        await onClose();

                        this.toggleAlert({
                            isPopupVisible: false,
                            title,
                            desc,
                            onClose: () => {},
                        });

                        setTimeout(() => {
                            this.toggleAlert({
                                isPopupVisible: false,
                                title: '',
                                desc: '',
                                onClose: () => {},
                            });

                            resolve();
                        }, 250);
                    },
                });
            });
        },
        confirm(
            title = '',
            desc = '',
            yes = '확인',
            no = '취소',
            etc,
            onConfirm = () => {},
            onCancel = () => {},
        ) {
            return new Promise((resolve, reject) => {
                if (typeof desc !== 'string') {
                    reject(new Error('desc 매개변수에는 문자열이 들어가야 합니다'));
                }

                this.toggleConfirm({
                    isPopupVisible: true,
                    title,
                    desc,
                    yes,
                    no,
                    etc,
                    onConfirm: async () => {
                        await onConfirm();

                        this.toggleConfirm({
                            isPopupVisible: false,
                            title: '',
                            desc: '',
                            yes: '',
                            no: '',
                            etc: [],
                            onConfirm: () => {},
                            onCancel: () => {},
                        });

                        resolve({ success: true, type: 'confirm' });
                    },
                    onCancel: async () => {
                        await onCancel();

                        this.toggleConfirm({
                            isPopupVisible: false,
                            title: '',
                            desc: '',
                            yes: '',
                            no: '',
                            etc: [],
                            onConfirm: () => {},
                            onCancel: () => {},
                        });

                        resolve({ success: false, type: 'cancel' });
                    },
                });
            });
        },
        openModal(type) {
            this.lockScroll();
            this.toggleModal({
                visible: true,
                type: type,
            });
        },
        closeModal() {
            this.unlockScroll();
            this.toggleModal({
                visible: false,
                type: null,
            });
        },
    },
};

Vue.mixin(mixin);

export default mixin;
