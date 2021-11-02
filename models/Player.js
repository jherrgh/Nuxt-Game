
import { Model } from '@vuex-orm/core'
import Ratings from './Ratings'
import Stats from './Stats'

export default class Player extends Model {
    static entity = 'players'
    static fields() {
        return {
            id: this.uid(),
            pid: this.attr(null),
            tid: this.attr(null),
            name: this.attr(),
            ratings: this.hasOne(Ratings, 'pid'),
            stats: this.hasOne(Stats, 'pid')
        }
    }
}