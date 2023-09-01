import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Address from "./addresses";
import Category from "./categories";
import Schedule from "./schedules";

@Entity("realEstates")
export default class RealEstate {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ default: false })
  sold: boolean;

  @Column({ type: "decimal", precision: 12, scale: 2, default: 0 })
  value: number | string;

  @Column({ type: "integer" })
  size: number;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string; 

  @OneToOne(() => Address, (address) => address.realEstate)
  @JoinColumn()
  address: Address;
  
  @OneToMany(() => Schedule, (sch) => sch.realEstate) 
  schedules: Array<Schedule>;

  @ManyToOne(() => Category, (cat) => cat.realEstate) 
  category: Category;
};
