export interface InputInterface{
    type: string;
    placeholder: string;
    name: string;
    nameLabel: string;
    value?:string | number
    className?:string
    label?:string
    ref?: any;
}