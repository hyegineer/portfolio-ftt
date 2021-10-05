<template>
  <div
    class="img-cont-wrap"
  >
    <div class="l-center">
      <ul
        ref="imageContainer"
        class="shop-img-scroll-wrap"
        :class="{'is-added' : imageAppendList.length > 0}"
        style="overflow-y: hidden; scroll-behavior: smooth"
      >
        <li
          v-for="(imageItem, index) in imageAppendList"
          :key="index"
          class="shop-img-list"
          @click.prevent="deleteFile(index)"
        >
          <img
            v-if="imageItem.type === 'file'"
            :src="`${imageItem.src}`"
            :alt="`image-${index}`"
            class="shop-img"
          >
          <img
            v-else-if="imageItem.type === 'url'"
            :src="`${storageUrl}/${storagePath}/${imageItem.src}`"
            :alt="`image-${index}`"
            class="shop-img"
          >
        </li>
        <li
          v-show="!hideAddOnMax || (hideAddOnMax && imageAppendList.length < max)"
          class="shop-img-list"
          @click="addFile"
        >
          <button
            class="add-btn"
          />
          <input
            ref="imageInput"
            accept="image/*"
            type="file"
            class="none"
            :disabled="disabled"
            @change="changeFile"
          >
        </li>
      </ul>
    <!--
    <div
      v-for="(imageItem, index) in imageAppendList"
      :key="index"
      class="input-img-list"
    >
      <div class="input-img-frame photo-img">
        <img
          v-if="imageItem.type === 'file'"
          :src="`${imageItem.src}`"
          :alt="`image-${index}`"
          class="input-img"
        >
        <img
          v-else-if="imageItem.type === 'url'"
          :src="`${storageUrl}/${storagePath}/${imageItem.src}`"
          :alt="`image-${index}`"
          class="input-img"
        >
      </div>

      <button
        type="button"
        class="del-btn"
        @click.prevent="deleteFile(index)"
      >
        <span class="is-voice-only">사진 지우기</span>
      </button>
    </div>
      -->
    </div>
    <div />
  </div>
</template>

<script>
import Compressor from 'compressorjs';

export default {
    name: 'FileInputList',
    props: {
        imageList: {
            type: Array,
            default: () => [],
        },
        storagePath: {
            type: String,
            default: '',
        },
        max: {
            type: Number,
            default: 4,
        },
        compress: {
            type: Boolean,
            default: true,
        },
        hideAddOnMax: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            isFileLoading: false,
            imageAppendList: [],
            imageRemainList: [],
        };
    },
    watch: {
        imageList() {
            this.loadImageList();
        },
        imageAppendList() {
            this.updateValue();
        },
    },
    created() {
        this.loadImageList();
    },
    methods: {
        loadImageList() {
            this.imageRemainList = [...this.imageList];
            this.imageAppendList = this.imageList.map((x) => ({
                type: 'url',
                src: x,
                data: x,
            }));
        },
        addFile() {
            if (this.imageAppendList.length >= this.max) {
                this.alert(`이미지는 최대 ${this.max}개까지 추가 가능합니다.`);
                return;
            }

            if (this.isFileLoading) {
                return;
            }

            this.$refs.imageInput.click();
        },
        async deleteFile(index) {
            if (this.disabled) {
                return;
            }

            if (this.isFileLoading) {
                return;
            }

            const result = await this.confirm('해당 이미지를 삭제하시겠습니까?', '');

            if (result.success) {
                const image = this.imageAppendList[index];
                if (image.type === 'url') {
                    this.imageRemainList = this.imageRemainList.filter(
                        (x) => x !== image.data,
                    );
                }
                this.imageAppendList.splice(index, 1);
            }
        },
        async changeFile(e) {
            try {
                if (this.isFileLoading) {
                    return;
                }
                this.isFileLoading = true;

                const { file, dataURL } = await this.processImageFile(e);

                this.imageAppendList.push({
                    type: 'file',
                    src: dataURL,
                    data: file,
                });

                e.target.value = '';

                setTimeout(() => {
                    this.$refs.imageContainer.scrollLeft = this.$refs.imageContainer.scrollWidth +
            this.$refs.imageContainer.offsetWidth;
                }, 0);
            } catch (e) {
                console.error(e);
            } finally {
                this.isFileLoading = false;
            }
        },
        async processImageFile(e) {
            const fileObject = this._.get(e, 'target.files[0]', null);
            if (fileObject) {
                const file = this.compress
                    ? await this.compressImage(fileObject)
                    : fileObject;
                const dataURL = await this.readAsDataURLAsync(file);
                return { file, dataURL };
            }

            return { file: null, dataURL: null };
        },
        readAsDataURLAsync(file) {
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
            if (!file) {
                return null;
            }

            return new Promise((resolve, reject) => {
                // eslint-disable-next-line no-new
                new Compressor(file, {
                    convertSize: 250000,
                    maxHeight: 1280,
                    maxWidth: 1280,
                    success(result) {
                        resolve(result);
                    },
                    error(err) {
                        reject(err);
                    },
                });
            });
        },
        updateValue() {
            const imageRemainList = [...this.imageRemainList];
            const imageAppendList = this.imageAppendList
                .filter((x) => x.type === 'file')
                .map((x) => x.data);

            this.$emit('listChange', {
                imageRemainList,
                imageAppendList,
                imageList: imageRemainList.concat(imageAppendList),
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.none {
    display: none !important;
}
</style>
