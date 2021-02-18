import { Monomial } from "../classes/monomial.model";

export interface IMonomial {
    calculateMonomialGrade(strValue: string): void
    calculateMonomialName(strValue: string): void
}