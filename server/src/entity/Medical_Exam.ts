import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Exam } from "./Exam"

@Entity()
export class Medical_Exam extends Exam{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    result_exam: boolean

    @Column({ type: "float" })
    imc: number

    @Column({ type: "float" })
    fat_percentage: number

    @Column({ type: "float" })
    lean_mass_percentage: number

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}
