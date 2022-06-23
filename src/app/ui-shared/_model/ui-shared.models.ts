export interface TableHeader {
    key: string;
    text: string;
    isSort: boolean;
}

export interface TableActions {
    key: string;
    icon: string;
    title: string;
    class: string;
}

export interface Dropdowndata {
    id: number;
    name: string;
}

export interface CheckData {
    className: string;
    inputClassName: string;
    label: string;
}

export interface TablePage {
    total: number;
    size: number;
    index: number;
}