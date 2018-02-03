
import { Timestamp } from 'rxjs/Rx';
import * as _ from 'lodash'
import {DiscountModel} from './discount.model'

export class ItemModel {
    id: string;
    prezzo: number;
    barcode: string;
    nome: string;
    descrizione: string;
    picture: string
    categorieId: string[];
    tassoConversione: number;
    moneta: string;
    key: String;
    quantita: string;
    constructor(item?: any) {
        this.prezzo = 0;
        this.barcode = '';
        this.descrizione = '';
        this.picture = '';
        this.categorieId = [];
        this.tassoConversione = 1;
        this.moneta = '€';
        this.key = '';
        this.quantita = '';
    }

    build(item: any/* {prezzo:number,
                 barcode:string,
                descrizione:string,
                picture:string,
                categorieId:string[],
                key:string,
                id:string,
                moneta:string,
                quantita:string,
    tassoConversione:number}*/) {
        this.prezzo = item && item.prezzo || 0;
        this.barcode = item && item.barcode || '';
        this.descrizione = item && item.descrizione || '';
        this.picture = item && item.picture || '';
        this.categorieId = item && item.categorieId || [];
        this.tassoConversione = item && item.tassoConversione || 1;
        this.moneta = item && item.moneta || '€';
        this.key = item && item.key || '';
        this.id = item && item.id
        this.quantita = item && item.quantita || '';
        return this;
    }
}
export class ShoppingCartModel {
    fornitoreId: string;
    totale: number;
    pagamentoId: string;
    moneta: string;
    tassoConversione; number;
    dataAcquisto: string;
    online: boolean;
    sconto: { percentuale: boolean, sconto: number }
    dataAddebito: string;
    items: Array<ItemModel>;
    key: string;
    note: string;
    constructor(shoppingCart?: any) {
        if (shoppingCart) {
            this.sconto = shoppingCart.sconto ? shoppingCart.sconto : new DiscountModel()
            this.fornitoreId = shoppingCart.fornitoreId || "";
            this.pagamentoId = shoppingCart.pagamentoId || "";
            this.dataAcquisto = shoppingCart.dataAcquisto || new Date().toISOString();
            this.dataAddebito = shoppingCart.dataAddebito || new Date().toISOString();
            this.totale = shoppingCart.totale || 0;
            this.moneta = shoppingCart.moneta || "€";
            this.online = shoppingCart.online || false;
            this.items = shoppingCart.items || [];
            this.key = shoppingCart.key || "";
            this.note = shoppingCart.note || "";
        }
        else {
            this.fornitoreId = "";
            this.pagamentoId = "";
            this.sconto = new DiscountModel();
            this.dataAcquisto = new Date().toISOString();
            this.dataAddebito = new Date().toISOString();
            this.totale = 0;
            this.moneta = "€";
            this.online = false;
            this.items = [];
            this.key = "";

        }
    }

    generateItemId(){
        /*
        genera un ItemId univoco
        @return itemId:string
        */
        return String(new Date().getTime())
    }
    pushItem(item: ItemModel) {
        //item.id = String(new Date().getTime())// setto lo id dello item
        //this.items =
        this.items.push(item)
         this.items = _.cloneDeep(this.items) //fa scattare il changedetection
         
    }

    updateItem(item) {
        this.items = _.map(this.items, article => {
            return article.id == item.id ? article : item
        })
    }

    removeItem(item: ItemModel) {
        this.items = this.items.filter(article => article.id != item.id)
    }

    build(shoppingCart: {
        fornitoreId: string,
        pagamentoId: string,
        dataAcquisto: string,
        dataAddebito: string,
        online: boolean
        totale: number,
        key: string,
        items: [ItemModel],
        note?: string
    }) {
        this.fornitoreId = shoppingCart.fornitoreId || "";
        this.pagamentoId = shoppingCart.pagamentoId || "";
        this.dataAcquisto = shoppingCart.dataAcquisto || new Date().toISOString();
        this.dataAddebito = shoppingCart.dataAddebito || new Date().toISOString();
        this.totale = shoppingCart.totale || 0;
        this.online = shoppingCart.online || false;
        this.items = shoppingCart.items || [];
        this.key = shoppingCart.key || "";
        this.note = shoppingCart.note;
        return this;
    }
}