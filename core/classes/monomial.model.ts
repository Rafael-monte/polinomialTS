import { IMonomial } from "../interfaces/IMonomial.interface";
import { MonomialFactory } from "./monomialFactory";

export class Monomial extends MonomialFactory{

    constructor(monomialStrValue: string) {
       super();
       super.createMonomial(monomialStrValue);
    }

}