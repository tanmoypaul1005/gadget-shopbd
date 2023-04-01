import {create} from "zustand";


const useUtilityStore = create((set) => ({

    loggedUser: {
        name: "",
        email: "",
    },
    setLoggedUser: (value) => set({ loggedUser: value }),

    isLoading: true,
    setLoading: (value) => set({ isLoading: value }),

    isTopBarOpen: false,
    setIsTopBarOpen: (value) => set({ isTopBarOpen: value }),

    isLoadingSearch: false,
    setLoadingSearch: (status) => set((state) => (state.isLoadingSearch = status)),

    secondaryClick: false,
    setSecondaryClick: (status) => set((state) => (state.secondaryClick = status)),

    showImagePopup: false,
    setShowImagePopup: (value) => set({ showImagePopup: value }),

    showImagePreviewSRC: "",
    setShowImagePreviewSRC: (value) => set({ showImagePreviewSRC: value }),

    showEditProfileModal: false,
    setShowEditProfileModal: (value) => set({ showEditProfileModal: value }),

    showEditAccordion: false,
    setShowEditAccordion: (value) => set({ showEditAccordion: value }),

    
}));



export default useUtilityStore;