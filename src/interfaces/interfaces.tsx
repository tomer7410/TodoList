export interface MainProps{
    style?: React.CSSProperties
}
export  interface  NavBarProps extends MainProps{
    paths: string[];
}
export interface User{
    email:string,
    password:string
}

