interface iComponent{
    name      : string,
    quantity  : number,
    ids       : Array<string>,
}
interface iBorrow  {
    borrower        : string | undefined,
    date            : string,
    activity        : string | undefined,
    componentNames  : Array<string>,
    components      : Array<iComponent>
}

interface iComponentModelListable{
    image: string,
    name: string,
    quantity: number,
}

export { iComponent, iBorrow, iComponentModelListable }