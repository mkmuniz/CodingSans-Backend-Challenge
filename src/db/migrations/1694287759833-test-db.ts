import { MigrationInterface, QueryRunner } from "typeorm"

export class TestDb1694287759833 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createDatabase('test');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
