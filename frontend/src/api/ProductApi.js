// /api/theloais

import axiosClient from "./axiosClient";

export const ProductApi = {
    getListTitle: () => {
        const url = '/api/user/all/listTitle';
        return axiosClient.get(url)
    },
    getListProduct: () => {
        const url = '/api/user/all/listProduct';
        return axiosClient.get(url)
    },
    getListLapTopTitle: () => {
        const url = '/api/user/laptop/listTitle';
        return axiosClient.get(url)
    },
    getListLapTopProduct: () => {
        const url = '/api/user/laptop/listProduct';
        return axiosClient.get(url)
    },
    getListDienThoaiTitle: () => {
        const url = '/api/user/dienthoai/listTitle';
        return axiosClient.get(url)
    },
    getListDienThoaiProduct: () => {
        const url = '/api/user/dienthoai/listProduct';
        return axiosClient.get(url)
    },
    getListPhuKienProduct: () => {
        const url = '/api/user/phukien/listProduct';
        return axiosClient.get(url)
    },
}