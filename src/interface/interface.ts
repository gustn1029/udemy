export interface BtnEvent {
    cancel?: ()=> void;
    confirm?: ()=> void;
    submit?: ()=> void;
}

export interface MenuList {
    path: string;
    title: string;
}

export interface DummyData{
    id: string;
    title: string;
    image: string;
    address: string;
    description: string;
}