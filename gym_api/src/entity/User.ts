import { Entity, CreateDateColumn, OneToOne, JoinColumn, UpdateDateColumn, Column } from "typeorm";
import { Medical_Exam } from "./Medical_Exam"
import { Profile } from "./Profile"
import { Person } from "./Person"

@Entity()
export class User extends Person {
    @Column()
    owner_name_credit_card: string

    @Column({ type: "int", width: 16})
    n_credit_card: number

    @Column()
    credit_card_flag: string

    @Column({ nullable: false })
    pending_exam: boolean;             // If false doesn't has registered, if true has registered.

    @OneToOne(() => Profile)
    @JoinColumn()
    profile_u: Profile;     
    
    @OneToOne(() => Medical_Exam)
    @JoinColumn()
    exam_u: Medical_Exam

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
