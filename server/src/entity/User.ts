import { Entity, CreateDateColumn, OneToOne, JoinColumn, UpdateDateColumn, Column, OneToMany } from "typeorm";
import { Medical_Exam } from "./Medical_Exam"
import { Profile } from "./Profile"
import { Person } from "./Person"
import { Registration } from "./Registration";
/** DOC: 1,
 *  User can be have many medical exams and registration but needs have one profile.
 */

@Entity()
export class User extends Person {
    @Column()
    owner_name_credit_card: string

    @Column({ type: "bigint", width: 16, default: null})    // Unfortunately bigint type convert to string.
    n_credit_card: number;

    @Column()
    credit_card_flag: string

    @Column({ nullable: false })
    pending_exam: boolean;                // If false doesn't has registered, if true has registered.

    @Column({ nullable: false })
    pending_profile: boolean;             // If false doesn't has registered, if true has registered.

    @OneToOne(type => Profile)
    @JoinColumn()
    profile_u: Profile;     
    
    @OneToMany(() => Medical_Exam, medical_exam => medical_exam.user)   // OBS: Maybe Medical_Exam is "OneToMany" or "OneToOne".
    exam_u: Medical_Exam[];

    @OneToOne(() => Registration)        // OBS: Maybe registration is "OneToMany" or "OneToOne".
    @JoinColumn()
    registration_u: Registration;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
