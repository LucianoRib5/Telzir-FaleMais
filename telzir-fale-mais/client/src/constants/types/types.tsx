export interface Props {
    showArrow?: boolean;
    text?: string
    funct?: VoidFunction
};

export interface Inputs {
    source: string,
    destiny: string,
    minutes: string,
    plan: string
};

export interface Plan {
    id: number,
    plan_name: string,
    minutes: number
};

export interface Area {
    id: number,
    area_code: string
};

export interface Result {
    plan_name: string,
    res_with_faleMais: number,
    res_dont_faleMais: number,
    source: string,
    destiny: string,
    time: number
};