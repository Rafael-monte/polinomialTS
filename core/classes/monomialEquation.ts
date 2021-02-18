import { Monomial } from './monomial.model';
import { Constant } from './constant.models';
import { IMonomialEquation } from '../interfaces/IMonomialEquation.interface';
import { Static } from '../staticValues';

export class MonomialEquation implements IMonomialEquation{
    strEquation: string;
    monomials: Array<Monomial> = new Array<Monomial>();
    constants: Array<Constant> = new Array<Constant>();
    
    detachEquationMembers() {
    /**@override*/

    /**@TODO realizar um algoritmo para organizar e separar os membros da equação */
        // let arrEquation = this.strEquation.split('');
        // for(let i in arrEquation) {
        //     if (Static.basicOperations.find(value => value === arrEquation[i])) { 
        //         this.defineEquationMember(arrEquation[Number(i) - 1]);
        //     }
        // }
    }

    defineEquationMember(strValue: string): void {
    /**@override*/
        if(isNaN(Number(strValue))) {
            return this.addNewMonomial(strValue);
        }
        return this.addNewConstant(strValue);
    }
    addNewMonomial(strMonomial: string): void {
    /**@override*/
        this.monomials.push(new Monomial(strMonomial));
    }
    addNewConstant(strConstant: string): void {
    /**@override*/
        const constant = new Constant();
        constant.literalValue = strConstant;
        this.constants.push(constant);
    }
}