export interface IMonomialEquation {
    detachEquationMembers(): void;
    defineEquationMember(strValue: string): void;
    addNewMonomial(strMonomial: string): void;
    addNewConstant(strConstant: string): void;
}