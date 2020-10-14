import { Entity, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, Column, OneToMany } from "typeorm";
import { Profile } from "./Profile"
import { Person } from "./Person"
import { User } from "./User"

@Entity()
export class Teacher extends Person {
    @Column()
    craft: string

    @OneToOne(() => Profile)
    @JoinColumn()
    profile_t: Profile

    @OneToMany(() => User, many => many.id)
    users: User[]
    
    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}