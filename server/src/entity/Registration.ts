import { Entity, OneToMany, ManyToMany, OneToOne, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, JoinColumn, JoinTable } from "typeorm"
import { Medical_Exam } from "./Medical_Exam"
import { User } from "./User"
import { Plan } from "./Plan"
import { Teacher } from "./Teacher"
import { Swinning } from "./Swinning_Classes"
import { Spinning } from "./Spinnig_Classes"
import { Crossfit } from "./Crossfit_Classes"
import { Weight_Training } from "./Weight_Training_Classes"
import { Rhythm } from "./Rhythm_Classes"

@Entity()
export class Registration {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ default: null })
    register_number: number

    @Column({ default: null })
    general_description_of_training: string
   
    @OneToOne(() => User, user => user.registration_u)
    user: User
    
    @ManyToMany(() => Teacher, teacher => teacher.users_records)
    teachers: Teacher[]

    @ManyToMany(() => Plan, plan => plan.registers, {cascade: true})
    @JoinTable()
    plans: Plan[]

    @OneToOne(() => Medical_Exam, medical_exam => medical_exam.register, {onDelete: 'CASCADE'})
    @JoinColumn()
    user_medical_exams: Medical_Exam

    @ManyToMany(() => Swinning, swinning => swinning.registers, {cascade: true})
    @JoinTable()
    modality_sw: Swinning[]

    @ManyToMany(() => Spinning, spinning => spinning.registers, {cascade: true})
    @JoinTable()
    modality_sp: Spinning[]

    @ManyToMany(() => Crossfit, crossfit => crossfit.registers, {cascade: true})
    @JoinTable()
    modality_cf: Crossfit[]

    @ManyToMany(() => Weight_Training, weight_training => weight_training.registers, {cascade: true})
    @JoinTable()
    modality_wt: Weight_Training[]

    @ManyToMany(() => Rhythm, rhythm => rhythm.registers, {cascade: true})
    @JoinTable()
    modality_rt: Rhythm[]

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}
