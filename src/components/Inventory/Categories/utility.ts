export enum CATEGORY {
    CATEGORYA = 'Kids',
    CATEGORYB = 'Adults',
    CATEGORYC = 'Summer',
    CATEGORYD = 'Winter',
    CATEGORYE = 'Teen'
}

export interface categoryInterface{
    id: string
    typeCategory: CATEGORY
}