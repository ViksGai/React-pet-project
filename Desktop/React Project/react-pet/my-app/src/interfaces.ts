export interface ICard {
    id: string;
    name: string;
    description: string;
    price: number;
}

export interface IInput {
    label: string;
    input: {
        id: string;
        type: string;
        min: string;
        max: string;
        step: string;
        defaultValue: string;
    }
}
