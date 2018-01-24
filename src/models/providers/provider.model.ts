import { FormControl } from '@angular/forms';
export class ProviderModel {
    nome: string;
    note: string;
    indirizzo: string;
    latitudine: string;
    longitudine: string;
    altitude:string;
    key: string;
    onLine: boolean;
    constructor(fornitore?: {
        nome: string,
        note: string,
        indirizzo: string,
        latitudine: string,
        altitude:string,
        longitudine: string,
        key: string,
        onLine: boolean,

    }) {
        this.key = fornitore && fornitore.key || "";
        this.nome = fornitore && fornitore.nome || "";
        this.note = fornitore && fornitore.note || "";
        this.altitude = fornitore && fornitore.altitude ||"";
        this.indirizzo = fornitore && fornitore.indirizzo || "";
        this.latitudine = fornitore && fornitore.latitudine || "";
        this.longitudine = fornitore && fornitore.longitudine || "";
        this.onLine = fornitore && fornitore.onLine || false;
    }
    build(item) {
        this.key = item.key || "";
        this.nome = item.nome || "";
        this.note = item.note || "";
        this.latitudine = item.latitudine || "";
        this.longitudine = item.longitudine || "";
        this.onLine = this.onLine;
    }
    buildFromActiveForm(fornitore: {
        nome: FormControl,
        note: FormControl,
        key: FormControl,
        indirizzo: FormControl,
        longitudine: FormControl,
        altitude: FormControl,
        latitudine: FormControl,
        onLine: FormControl
    }) {
        this.key = fornitore && fornitore.key.value || "";
        this.nome = fornitore && fornitore.nome.value || "";
        this.note = fornitore && fornitore.note.value || "";
        this.altitude = fornitore && fornitore.altitude && fornitore.altitude.value ||"";
        this.indirizzo = fornitore && fornitore.indirizzo.value || "";
        this.latitudine = fornitore && fornitore.latitudine.value || "";
        this.longitudine = fornitore && fornitore.longitudine.value || "";
        this.onLine = fornitore && fornitore.onLine.value || false;
        return this;
    }
}
