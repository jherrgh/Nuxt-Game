import { Model } from '@vuex-orm/core'

export default class Stats extends Model {
    static entity = 'stats'
    static fields() {
        return {
            pid: this.attr(null),
            pts: this.number(0)
        }
    }

}