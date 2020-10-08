import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Weight_Training } from "./ Weight_Training_Plan"
import { Swinning } from "./Swinning_Plan"
import { SCR } from "./SCR_Plan" 

@Entity()
export class Plan {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: String;

    @OneToOne(() => Weight_Training)
    @JoinColumn()
    weight_training_p: Weight_Training;

    @OneToOne(() => Swinning)
    @JoinColumn()
    swinning_p: Swinning;

    @OneToOne(() => SCR)
    @JoinColumn()
    scr_p: SCR;



}