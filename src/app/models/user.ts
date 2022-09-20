import { Campaign } from "./campaign"

export interface User {
    uid: string;
    name:string,
    photo: string // ipfs,
    wallet: string,
    campaigns: Campaign[]
    liked: Campaign[]
}