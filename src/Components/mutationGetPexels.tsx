import { useMutation } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

export const getData = () => {
  return axios.get(`https://api.pexels.com/v1/search?query=people`);
};

export const FetchData2 = ({
  onSuccess,
  onError,
}: { onSuccess?: () => void; onError?: () => void } = {}) => {
  return useMutation({
    onSuccess: (data) => {
      console.log("Success", data);
      if (onSuccess) onSuccess();
    },
    onError: (error) => {
      console.log("Error", error);
      if (onError) onError();
    },
    mutationFn: getData,
  });
};
