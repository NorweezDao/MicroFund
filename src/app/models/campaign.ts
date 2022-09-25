import { Perk } from "./perk";
import { User } from "./user";

export interface Campaign {
    uid: string;
    name: string,
    image: string //ipfs,
    description: string,
    perks: Perk[],
    goal: number,
    video?: string// ipfs,
    likes: User[] 
}