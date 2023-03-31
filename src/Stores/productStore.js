import { create } from "zustand";
// import useUtilityStore from "./UtilityStore";
import axios from "axios";
import { BaseUrlSrc } from "@/Utility/Url";

// const { setLoading } = useUtilityStore();

const useProductStore = create((set) => ({

    productDetails: {},
    setProductDetails: (value) => set({ productDetails: value }),

}));

export const getProductDetails = async (id) => {
    try {
        // setLoading(true);
        const res = await axios.get(`${BaseUrlSrc}/product/${id}`);
        console.log("getProductDetails res.data:::: ", res);

        if (res.status === 200) {
            
            // setLoading(false);
            return true;
        } else {
            // setLoading(false);
            return false;
        }
    } catch (error) {
        console.log("getProductDetails:", error);
        // setLoading(false);
        return false;
    }
};


export default useProductStore;