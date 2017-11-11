import { AbstractControl, FormControl } from '@angular/forms';
export class PaymentsModel {
    nome: string;
    note: string;
    addebito: string;
    key: string;
    constructor(payment?: {
        nome: FormControl,
        addebito: FormControl,
        note: FormControl
        key: FormControl
    }) {
        this.nome = payment && payment.nome.value || "";
        this.addebito = payment && payment.addebito.value || "";
        this.note = payment && payment.note.value || "";
        this.key = payment && payment.key.value || "";

    }
    buildPayment(payment:any):PaymentsModel {
        this.nome = payment.nome;
        this.key = payment.key;
        this.addebito = payment.addebito;
        this.note = payment.note;
        return this;
    }
}