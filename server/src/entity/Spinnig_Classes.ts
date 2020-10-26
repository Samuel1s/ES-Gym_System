import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, ManyToMany, Generated } from "typeorm"
import { Registration } from "./Registration";
import { Teacher } from "./Teacher";

@Entity()
export class Spinning {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "time", default: null })
    start_time: number
 
    @Column({ type: "time", default: null })
    end_time: number
 
    @Column({ default: null })
    number_of_enrollments: number

    @Column()
    day_of_week: String

    @Column({ default: 20 })
    max_capacity: number

    @Column({ default: true })
    availability: boolean

    @ManyToMany(() => Registration, register => register.modality_sp)
    registers: Registration[]

    @OneToOne(() => Teacher)
    @JoinColumn()
    teacher: Teacher
}