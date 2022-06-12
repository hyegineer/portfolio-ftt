const formatters = {
    phoneFormatter(num) {
        let formatNum = '';
        if (num.length === 11) {
            formatNum = num.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
        } else if (num.length === 8) {
            formatNum = num.replace(/(\d{4})(\d{4})/, '$1-$2');
        } else if (num.indexOf('02') === 0) {
            formatNum = num.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3');
        } else {
            formatNum = num.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
        }
        return formatNum;
    },
    secretPhoneFormatter(num) {
        let formatNum = '';
        formatNum = num.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
        formatNum = `${formatNum.substr(0, 4)}****` + '-' + `**${formatNum.substr(11, 2)}`;
        return formatNum;
    },
};

export default formatters;
