import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class SCR {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;

    @Column({ type: "float", default: 155.00 })
    month_3xweek_price: number;

    @Column({ type: "float", default: 834.00 })
    semiannual_3xweek_price: number;

    @Column({ type: "float", default: 1560.00 })
    annual_3xweek_price: number;
}