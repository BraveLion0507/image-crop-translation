<script lang="ts" setup>
import { Cropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";
import { ref, watch } from "vue";

defineProps({
  imageSource: {
    type: String,
    required: true,
  },
  imageSize: {
    type: Object,
  },
});
const imageRef = ref("parentImageRef");
const emit = defineEmits(["onImageChange", "onCrop", "onCancel"]);
watch(imageRef, () => {
  emit("onImageChange", imageRef.value);
});

function onChangeCrop({ coordinates, canvas }) {
  // Convert the canvas to an image data URL
  const image = new Image();
  image.src = canvas.toDataURL();

  convertCanvasToFile(canvas).then((file) => {
    emit("onCrop", { coordinates, cropFile: file });
  });
}

async function convertCanvasToFile(canvas) {
  return new Promise((resolve, reject) => {
    // Convert the canvas content to a Blob
    canvas.toBlob(
      (blob) => {
        if (blob) {
          // Create a File object from the Blob
          const file = new File([blob], "cropped-image.png", {
            type: "image/png",
          });
          resolve(file);
        } else {
          reject(new Error("Failed to convert canvas to file"));
        }
      },
      "image/png",
      1
    );
  });
}
</script>

<template>
  <div>
    <Cropper
      ref="imageRef"
      :src="imageSource"
      :stencil-size="imageSize"
      :autoZoom="false"
      :resizeImage="false"
      :moveImage="false"
      image-restriction="stencil"
      @change="onChangeCrop"
    >
    </Cropper>
  </div>
</template>

<style>
</style>