export interface MainProps{
    style?: React.CSSProperties
    

}
export  interface  NavBarProps extends MainProps{
    paths: string[];
}
export interface Assigment{
    name:string,
    describtion:string
}
export enum ModalType{
    CurrentAssigment,
    PreviousAssigment
}

