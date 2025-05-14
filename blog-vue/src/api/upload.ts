import { http } from "@/plugins/axios";

interface UploadResponse {
    data: {
        url: string;
    };
}

// 上传图片
export function uploadImage(data: FormData): Promise<UploadResponse> {
  return http.request({
    url: "api/upload/image",
    method: "post",
    data,
  });
}