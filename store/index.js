
import VuexORM from '@vuex-orm/core'
import database from '@/database';
import VuexORMLocalForage from 'vuex-orm-localforage'

VuexORM.use(VuexORMLocalForage, {
    database,
    localforage: { name: 'hsgm-db' },

})


export const plugins = [
    VuexORM.install(database)
]