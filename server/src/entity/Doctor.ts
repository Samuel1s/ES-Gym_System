import { Entity, CreateDateColumn, UpdateDateColumn, Column, OneToOne, JoinColumn, ManyToMany, JoinTable } from "typeorm";
import { Medical_Exam } from "./Medical_Exam"
import { Profile } from "./Profile"
import { Person } from "./Person"

/** DOC: 1,
 *  Many doctors have many medical tests from users.
 */

@Entity()
export class Doctor extends Person {
    @Column()
    crm: number

    @Column()
    speciality: string

    @OneToOne(() => Profile)
    @JoinColumn()
    profile_d: Profile

    @ManyToMany(() => Medical_Exam, exam => exam.doctors, {cascade: true })
    @JoinTable()
    exams: Medical_Exam[]

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}