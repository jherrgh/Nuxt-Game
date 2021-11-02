import { Model } from '@vuex-orm/core'
import Player from './Player'

export default class Team extends Model {
    static entity = 'teams'
    static fields() {
        return {
            id: this.uid(),
            tid: this.attr(null),
            name: this.string(''),
            city: this.string(''),
            players: this.hasMany(Player, 'tid')
        }
    }

}