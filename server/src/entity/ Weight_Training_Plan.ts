import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Weight_Training {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "float", default: 125.00 })
    month_7xweek_price: number;

    @Column({ type: "float", default: 675.00 })
    semiannual_7xweek_price: number;

    @Column({ type: "float", default: 1275.00 })
    annual_7xweek_price: number;
}