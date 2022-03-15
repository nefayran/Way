/*
 * GUID Realisation
 * based by:
 * https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid/8809472#8809472
 * */
import IGuid from "./IGuid";

export default class Guid implements IGuid {
  readonly str: string;

  constructor(str?: string) {
    this.str = str || this.generate();
  }

  public toString() {
    return this.str;
  }

  public isEqual(guid: IGuid) {
    if (guid && this.str) return this.str === guid.toString();
    return false;
  }

  public generate() {
    let d = new Date().getTime();
    if (window.performance && typeof window.performance.now === "function") {
      d += performance.now();
    }
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    });
  }
}
