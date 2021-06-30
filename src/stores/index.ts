import { enableStaticRendering } from 'mobx-react'
import authStore from './authStore'
import {configure} from 'mobx';

const stores = {
	authStore
}

var isServer = typeof window === 'undefined'
enableStaticRendering(false)
configure({enforceActions: 'observed'});

const newStores = {}

export function initializeStores(mobxStores = null) {
  Object.keys(stores).map(key => {
    if (isServer) {
      newStores[key] = new stores[key](
        isServer,
        mobxStores ? mobxStores[key] : null
      )
    } else if (typeof newStores[key] === 'undefined') {
      newStores[key] = new stores[key](
        isServer,
        mobxStores ? mobxStores[key] : null
      )
    }
  })
  return newStores
}
