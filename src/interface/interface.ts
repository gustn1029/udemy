import MeetupsItem from "../components/meetups/MeetupsItem";

export interface BtnEvent {
    cancel?: ()=> void;
    confirm?: ()=> void;
    submit?: ()=> void;
}

export interface MenuList {
    path: string;
    title: string;
}

export interface MeetupData {
    id: string;
    title: string;
    image: string;
    address: string;
    description: string;
}

export interface MeetupArray {
    items: MeetupData[]
}