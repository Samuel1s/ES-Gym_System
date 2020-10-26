import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Physical_Condition {
   @PrimaryGeneratedColumn()
   id: number

   @Column({ type: 'float', default: null })
   min_rate: number

   @Column({ type: 'float', default: null })
   max_rate: number

   @Column({ default: null })
   physical_description: string
}

