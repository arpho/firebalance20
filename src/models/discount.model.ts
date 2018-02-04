export class DiscountModel {
    percentuale: boolean;
    sconto: number;
    nota: string

    constructor(percentuale?: boolean, sconto?: number, nota?: string) {
        this.percentuale = !!percentuale;
        this.sconto = sconto || 0;
        this.nota = nota || "";
    }
    calculateDiscount(price: number) {
        return this.percentuale ? price - this.sconto * price : price - this.sconto
    }
}