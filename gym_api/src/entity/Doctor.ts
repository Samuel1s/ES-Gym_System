import { Entity, CreateDateColumn, UpdateDateColumn, Column, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Medical_Exam } from "./Medical_Exam"
import { Profile } from "./Profile"
import { Person } from "./Person"

@Entity()
export class Doctor extends Person {
    @Column()
    crm: number

    @Column()
    speciality: string

    @OneToOne(() => Profile)
    @JoinColumn()
    profile_d: Profile

    @OneToMany(() => Medical_Exam, type => type.id)
    exams: Medical_Exam[]

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}