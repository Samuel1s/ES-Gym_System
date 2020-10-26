import { Column, PrimaryGeneratedColumn } from "typeorm"

export abstract class Person {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    gender: string
    
    @Column()
    age: number

    @Column({type: "bigint", width: 11, default: null}) // Unfortunately bigint type convert to string.
    cpf: number

    @Column()
    blood_type: string

    @Column({type: "int", width: 8})
    n_identity: number

    @Column()
    n_telephone: number

    @Column()
    email: string
}