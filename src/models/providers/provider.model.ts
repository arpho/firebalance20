import { FormControl } from '@angular/forms';
export class ProviderModel {
    nome: string;
    note: string;
    indirizzo: string;
    latitudine: string;
    longitudine: string;
    key: string;
    onLine: boolean;
    constructor(fornitore?: {
        nome: string,
        note: string,
        indirizzo: string,
        latitudine: string,
        longitudine: string,
        key: string,
        onLine: boolean,
       
    }) {
        this.key = fornitore && fornitore.key || "";
        this.nome = fornitore && fornitore.nome || "";
        this.note = fornitore && fornitore.note || "";
        this.indirizzo = fornitore && fornitore.indirizzo || "";
        this.latitudine = fornitore && fornitore.latitudine || "";
        this.longitudine = fornitore && fornitore.longitudine || "";
        this.onLine = fornitore && fornitore.onLine || false;
    }
    buildFromActiveForm(fornitore:{
        nome: FormControl,
        note: FormControl,
        key: FormControl,
        indirizzo: FormControl,
        longitudine: FormControl,
        latitudine: FormControl,
        onLine: FormControl
    }){
        this.key = fornitore && fornitore.key.value || "";
        this.nome = fornitore && fornitore.nome.value || "";
        this.note = fornitore && fornitore.note.value || "";
        this.indirizzo = fornitore && fornitore.indirizzo.value || "";
        this.latitudine = fornitore && fornitore.latitudine.value || "";
        this.longitudine = fornitore && fornitore.longitudine.value || "";
        this.onLine = fornitore && fornitore.onLine.value || false;
        return this;
    }
}
