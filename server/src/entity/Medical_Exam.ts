import { Column, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
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
    imc: number

    @Column({ type: "float", default: null })
    fat_percentage: number

    @Column({ type: "float" , default: null })
    lean_mass_percentage: number

    @ManyToOne(() => User, user => user.exam_u)
    user: User

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}
