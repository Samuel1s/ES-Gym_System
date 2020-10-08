import { CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, Column } from "typeorm"

@Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    login: string;

    @Column()
    password: string;
    
    @Column({ nullable: false })
    permission: boolean;               // If true it's a worker, if false it's a client.

    @Column()
    registration_number: number        // 1xxxxx - to Client, 2xxxxx  - To secretary ...

    @Column()
    photo: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}