export class Category{
    title:string;
    id: string;
    constructor(category?:{title:string,$key:string}){
        this.title = category.title;
        this.id = category.$key;
    }
}