import { enableStaticRendering } from "mobx-react";
import authStore from "./authStore";
var isServer: boolean = typeof window === "undefined";
const stores = {
  authStore
};

enableStaticRendering(false);
const newStores:any = {};

export function initializeStores(mobxStores = null):any {
  Object.keys(stores).map((key) => {
    if (isServer) {
      newStores[key] = new stores[key](
        isServer,
        mobxStores ? mobxStores[key] : null
      );
    } else if (typeof newStores[key] === "undefined") {
      newStores[key] = new stores[key](
        isServer,
        mobxStores ? mobxStores[key] : null
      );
    }
  });
  return newStores;
}
