import { IConstant } from '../interfaces/IConstant.interface';

export class Constant implements IConstant{
    literalValue: string;
    numericValue: number;
    
    /**@override*/
    calculateNumericValue(literalValue: string): number {
       return this.numericValue = Number(literalValue);
    }
}