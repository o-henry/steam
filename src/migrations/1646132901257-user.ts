import { MigrationInterface, QueryRunner } from 'typeorm';

export class user1646132901257 implements MigrationInterface {
  name = 'user1646132901257';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`user\` (\`id\` varchar(36) NOT NULL, \`username\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`age\` int NOT NULL, \`email\` varchar(60) NOT NULL, \`phone\` varchar(255) NOT NULL, \`role\` enum ('user', 'publisher', 'admin') NOT NULL DEFAULT 'user', UNIQUE INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` (\`username\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`game\` (\`id\` varchar(36) NOT NULL, \`gamename\` varchar(255) NOT NULL, \`price\` int NOT NULL, \`rate\` int NOT NULL, \`url\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`publisher\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_0dbde898a77d3f84b4bfcd7860\` (\`gamename\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX \`IDX_0dbde898a77d3f84b4bfcd7860\` ON \`game\``,
    );
    await queryRunner.query(`DROP TABLE \`game\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` ON \`user\``,
    );
    await queryRunner.query(`DROP TABLE \`user\``);
  }
}
