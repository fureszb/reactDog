import { szenvedoMondatok } from "../adat";

export default class Model
{
    #cim;
    #sugoSzoveg;
    #Obj;
    #aktindex = 0;
    constructor(){
        this.#Obj = [];
        this.#cim = szenvedoMondatok[0];
        this.#sugoSzoveg = szenvedoMondatok[1];
        for (let index = 2; index < szenvedoMondatok.length; index++) {
            this.#Obj.push(szenvedoMondatok[index]);
            
        }
    }
    getcim(){
        return this.#cim;
    }
    getSugo(){
        return this. #sugoSzoveg;
    }
    getList(){
        return this.#Obj;
    }
    getAktIndex(){
        return this.#aktindex;
    }
    aktMondatFeldarabol() {
        const mondat = this.#Obj[this.#aktindex].mondat;
        const mondatReszei = (mondat.split('_'));
        return mondatReszei;
    }
    
    aktMondatOsszeallit() {
        return this.#Obj[this.#aktindex].mondat;
    }
    kovMondat(){
        this.#aktindex++;

    }
    getZarojel(){
        return  this.#Obj[this.#aktindex].alap;
    }
}