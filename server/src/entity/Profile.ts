import { CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, Column, AfterInsert } from "typeorm"

@Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    login: string

    @Column()
    password: string
    
    @Column({ default: false })
    permission: boolean;               // If true it's a worker, if false it's a client.

    @Column({ default: 1000 })
    permission_number: number        // 1xxxx - to Client, 2xxxx  - To secretary ...

    @Column({ default: null })
    photo: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}