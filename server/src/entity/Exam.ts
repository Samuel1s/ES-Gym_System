import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

export abstract class Exam {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ type: "float" })
    cardiac_auscultation: number

    @Column({ type: "float" })
    blood_pressure: number

    @Column()
    anamnesis: String

}