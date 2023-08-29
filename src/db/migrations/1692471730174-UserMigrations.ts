import { MigrationInterface, QueryRunner } from "typeorm"

export class UserMigrations1692471730174 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE user (id integer not null, username varchar(50), password varchar(50), constraint pk_user_id primary key (id))`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE user`)
    }
}
