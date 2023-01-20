import { AxiosResponse } from "axios";
import { Dispatch, SetStateAction } from "react";

export interface IDashboardMenu {
  setShowContent: Dispatch<SetStateAction<string>>;
  setDataApiProvider: Dispatch<SetStateAction<AxiosResponse<any, any>>> | any;
}

export interface IDashboardWindow {
  showContent: string;
  dataApiProvider: AxiosResponse<any, any> | undefined;
  setDataApiProvider: Dispatch<SetStateAction<AxiosResponse<any, any>>> | any;
}