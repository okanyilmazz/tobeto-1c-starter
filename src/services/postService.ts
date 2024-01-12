import { AxiosResponse } from "axios";
import { Post } from "../models/post";
import axiosInstance from "../components/utils/axiosInterceptors";

class PostService {
    getAll(): Promise<AxiosResponse<Post[], any>> {
        return axiosInstance.get<Post[]>("posts")
    }
}

export default new PostService();