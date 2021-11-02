
import { Model } from '@vuex-orm/core'

export default class League extends Model {
    static entity = 'leagues'
    static fields() {
        return {
            id: this.uid(),
            lid: this.attr(null),
            name: this.string(''),
        }
    }
}