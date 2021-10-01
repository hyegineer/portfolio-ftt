import Compressor from 'compressorjs';
import get from 'lodash/get';

const processImageFile = {
    async processImageFile(e) {
    // input[type=file]의 change 이벤트를 받아서 입력된 파일 변환
        const fileObject = get(e, 'target.files[0]', null);
        if (fileObject && fileObject.type.includes('image')) {
            const file = await processImageFile.compressImage(fileObject);
            const dataURL = await processImageFile.readAsDataURLAsync(file);
            return { file, dataURL };
        }

        return { file: null, dataURL: null };
    },
    readAsDataURLAsync(file) {
    // image[src]에 표시할 수 있는 형식으로 변환
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = () => {
                resolve(reader.result);
            };

            reader.onerror = reject;

            reader.readAsDataURL(file);
        });
    },
    compressImage(file) {
    // 이미지 리사이즈
        if (!file) {
            return;
        }

        return new Promise((resolve, reject) => {
            // eslint-disable-next-line no-new
            new Compressor(file, {
                convertSize: 250000,
                maxHeight: 1024,
                maxWidth: 1024,
                success(result) {
                    resolve(result);
                },
                error(err) {
                    reject(err);
                },
            });
        });
    },
};

export default processImageFile;
