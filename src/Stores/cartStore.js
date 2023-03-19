import { create } from "zustand";
// import useUtilityStore from "./UtilityStore";
import axios from "axios";
import { BaseUrlSrc } from "@/Utility/Url";

// const { setLoading } = useUtilityStore();

const useCartStore = create((set) => ({

    showEditAccordion: false,
    setShowEditAccordion: (value) => set({ showEditAccordion: value }),

}));

export const addCart = async (body) => {
    try {
        // setLoading(true);
        const res = await axios.post(`${BaseUrlSrc}/cart/add`,  body );
        console.log("addCart res.data:::: ", res);

        if (res.status === 200) {
            // setLoading(false);
            return true;
        } else {
            // setLoading(false);
            return false;
        }
    } catch (error) {
        console.log("addCart:", error);
        // setLoading(false);
        return false;
    }
};


export default useCartStore;