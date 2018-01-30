export class DiscountModel {
    percentuale: boolean;
    sconto: number;

    constructor(percentuale?: boolean, sconto?: number) {
        this.percentuale = percentuale
        this.sconto = sconto || 0
    }
    calculateDiscount(price: number) {
        return this.percentuale ? price - this.sconto * price : price - this.sconto
    }
}