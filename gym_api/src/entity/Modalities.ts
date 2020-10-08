import { Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Weight_Training } from "./ Weight_Training_Plan"
import { Swinning } from "./Swinning_Plan"
import { SCR } from "./SCR_Plan" 


@Entity()
export class Modalities {
    @PrimaryGeneratedColumn()
    id: number

    @OneToMany(() => Weight_Training, type => type.id)
    limit_wt: Weight_Training[]

    @OneToMany(() => Swinning, type => type.id)
    limit_sw: Swinning[]

    @OneToMany(() => SCR, type => type.id)
    limit_sp: SCR[]

    @OneToMany(() => SCR, type => type.id)
    limit_cf: SCR[]

    @OneToMany(() => SCR, type => type.id)
    limit_rt: SCR[]

}