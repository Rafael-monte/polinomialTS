import { IMonomial } from '../interfaces/IMonomial.interface';
import { Static } from '../staticValues';
export abstract class MonomialFactory implements IMonomial{
    name? : string;
    grade: string;
    coefficient: string;

    createMonomial(monomialStrValue: string) {
        this.calculateMonomialGrade(monomialStrValue);
        this.calculateMonomialName(monomialStrValue);

    }
    calculateMonomialGrade(monomialStrValue: string) {
    /**@override*/
        let coefficient = monomialStrValue;
        coefficient = coefficient.substring(coefficient.indexOf("^"), coefficient.length - 1);
        this.coefficient = coefficient;
    }

    calculateMonomialName(monomialStrValue: string) {
    /**@override*/
        this.name = monomialStrValue.substring(Static.ZERO, monomialStrValue.indexOf("^"));
    }
}