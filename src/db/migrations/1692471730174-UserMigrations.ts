import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class UserMigrations1692471730174 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "username",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "password",
                        type: "uuid"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE users`)
    }
}
