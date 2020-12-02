import { Entity, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, Column, OneToMany, ManyToOne, ManyToMany, JoinTable } from "typeorm"
import { Registration } from "./Registration"
import { Medical_Exam } from "./Medical_Exam"
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

    @ManyToMany(() => Registration, registration => registration.teachers, {cascade: true })
    @JoinTable()
    users_records: Registration[]

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}