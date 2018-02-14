export class Category{
    title:string;
    id: string;
    constructor(category?:{title:string,$key:string}){
        this.title = (category)?category.title:'';
        this.id = (category)?category.$key:"";
    }
    build(title,key){
        this.title = title;
        this.id = key;
        return this;
    }
}