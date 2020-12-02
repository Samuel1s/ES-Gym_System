import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, ManyToMany } from "typeorm"
import { Registration } from "./Registration"
import { Teacher } from "./Teacher"

@Entity()
export class Swinning {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({ type: "time", default: null })
    start_time: number
 
    @Column({ type: "time", default: null })
    end_time: number
 
    @Column({ default: null })
    number_of_enrollments: number

    @Column({ default: null })
    day_of_week: string

    @Column({ default: 6 })
    max_capacity: number

    @Column({ default: true })
    availability: boolean

    @ManyToMany(() => Registration, register => register.modality_sw)
    registers: Registration[]

    @OneToOne(() => Teacher)
    @JoinColumn()
    teacher: Teacher
}