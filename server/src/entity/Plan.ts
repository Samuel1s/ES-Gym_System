import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Weight_Training } from "./Weight_Training_Classes"
import { Registration } from "./Registration"
import { Swinning } from "./Swinning_Classes"
import { Spinning } from "./Spinnig_Classes" 
import { Crossfit } from "./Crossfit_Classes"
import { Rhythm } from "./Rhythm_Classes"
import { User } from "./User"

/** DOC: 1,
 *  When the secretary creates the register she needs to register a plan for the user.
 *  Plan type and modalitie.
 */

@Entity()
export class Plan {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({default: ''})
    plan_type: string;

    @Column({default: null})
    times_per_week: number 

    @Column({type: 'float', default: null})
    total_plan_value: number

    @Column({ default: '' })
    modality: string

    @ManyToMany(() => Registration, register => register.plans)
    registers: Registration[]
}