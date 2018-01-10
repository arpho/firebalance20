import { getComponent } from 'ionic-angular/navigation/nav-util';
import { Observable } from 'rxjs/Rx';
export interface DbLayer {
    getElements(any): any;
    getElementById(id:string,cb): any;
    getComponentType():string; //ritorna l'identificativo che permette al componente selector di presentare il giusto popup di creazione
    isReady:() => boolean
}