import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, ManyToMany } from "typeorm"
import { Registration } from "./Registration"
import { Teacher } from "./Teacher"

@Entity()
export class Weight_Training {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "time", default: null })
    start_time: number
 
    @Column({ type: "time", default: null })
    end_time: number
 
    @Column({ default: null })
    number_of_enrollments: number

    @Column()
    day_of_week: String

    @Column({ default: null })
    max_capacity: number

    @Column({ default: true })
    availability: boolean

    @ManyToMany(() => Registration, register => register.modality_wt)
    registers: Registration[]

    @OneToOne(() => Teacher)
    @JoinColumn()
    teacher: Teacher
}