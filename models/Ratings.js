import { Model } from '@vuex-orm/core'
export default class Ratings extends Model {

    static entity = 'ratings'
    static fields() {
        return {
            id: this.uid(),
            pid: this.attr(null),
            hgt: this.number(0),
            stre: this.number(0),
            spd: this.number(0),
            jmp: this.number(0),
            endu: this.number(0),
            ins: this.number(0),
            dnk: this.number(0),
            ft: this.number(0),
            fg: this.number(0),
            tp: this.number(0),
            oiq: this.number(0),
            diq: this.number(0),
            drb: this.number(0),
            pss: this.number(0),
            reb: this.number(0),
        }
    }

}