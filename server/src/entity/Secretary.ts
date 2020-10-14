import { Entity, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, Column } from "typeorm";
import { Profile } from "./Profile"
import { Person } from "./Person"

@Entity()
export class Secretary extends Person {
    @Column({ default: "Secretary" })
    craft: string;

    @OneToOne(() => Profile)
    @JoinColumn()
    profile_s: Profile

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}