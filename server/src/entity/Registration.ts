import { Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Modalities } from "./Modalities"
import { Teacher } from "./Teacher"
import { User } from "./User"
import { Plan } from "./Plan"

@Entity()
export class Registration {
    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(() => Teacher)
    @JoinColumn()
    teacher: Teacher
   
    @OneToOne(() => User)
    @JoinColumn()
    user: User;

    @OneToMany(() => Plan, plan => plan.id)
    plans: Plan[];
    
    @OneToMany(() => Modalities, modality => modality.id)
    modalities: Modalities[];
}
