/* eslint-disable no-bitwise */
import IBaseService from "@/app/core/services/IBaseService";

export default class GuidService implements IBaseService {
  async handle(): Promise<string> {
    const guid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0;
      const v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
    return new Promise((resolve, reject) => {
      resolve(guid);
    });
  }
}
