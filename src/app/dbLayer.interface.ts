import { getComponent } from 'ionic-angular/navigation/nav-util';
import { Observable } from 'rxjs/Rx';
export interface DbLayer {
    getElements(): Observable<any>;
    getElementById(id:string): Observable<any>;
    getComponentType():string //ritorna l'identificativo che permette al componente selector di presentare il giusto popup di creazione
}