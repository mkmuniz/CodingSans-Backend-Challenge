import { MigrationInterface, QueryRunner } from "typeorm"

export class DevDb1694289947908 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createDatabase('test');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
