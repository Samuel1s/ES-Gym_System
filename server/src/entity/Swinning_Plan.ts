import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Swinning {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "float", default: 255.00 })
    month_2xweek_price: number;

    @Column({ type: "float", default: 229.00 })
    month_3xweek_price: number;
    
    @Column({ type: "float", default: 1161.00 })
    semiannual_2xweek_price: number;

    @Column({ type: "float", default: 1236.60 })
    semiannual_3xweek_price: number;

    @Column({ type: "float", default: 2193.00 })
    annual_2xweek_price: number;

    @Column({ type: "float", default: 2268.00 })
    annual_3xweek_price: number;
}