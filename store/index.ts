// store.ts
import { defineStore } from 'pinia'

export const useMyStore = defineStore({
    id: 'myStore',
    state: () => ({
        mode: 'default', // Initial value for mode
        cropImage: '',
        visibleArea: {
        }
        // Add other state properties here
    }),
    actions: {
        // Add actions to update state here
        changeMode(value: string) {
            this.mode = value; // Update the mode state
        },

        changeCropImage(value: string) {
            this.cropImage = value; //Update cropped image url
        },
        changeVisibleArea(value: any) {
            this.visibleArea = value; //Update cropped image area
        }
    },
})