import { Column, CreateDateColumn, Entity, ManyToOne, ManyToMany, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm"
import { Physical_Condition } from "./ Physical_Condition"
import { Registration } from "./Registration"
import { Doctor } from "./Doctor"
import { Exam } from "./Exam"
import { User } from "./User"

/** DOC: 1,
 *  In this entity, have many medical exams. They need be available by Doctor.
 */

 @Entity()
export class Medical_Exam extends Exam{
    @Column({ default: false })
    result_exam: boolean

    @Column({ type: "float", default: null })
    fat_percentage: number

    @Column({ type: "float" , default: null })
    lean_mass_percentage: number

    @ManyToOne(() => User, user => user.exam_u, { onDelete : 'CASCADE' })
    user: User

    @ManyToMany(()=> Doctor, doctor => doctor.exams)
    doctors: Doctor[]
    
    @OneToOne(() => Registration, register => register.user_medical_exams)
    register: Registration

    @OneToOne(() => Physical_Condition)
    @JoinColumn()
    physical_aptitude: Physical_Condition

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}
