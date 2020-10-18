import { Column, PrimaryGeneratedColumn } from "typeorm"

export abstract class Exam {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ type: "float", default: null })
    cardiac_auscultation: number

    @Column({ type: "float", default: null })
    blood_pressure: number

    @Column({ default: undefined })
    anamnesis: String

}