import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      database: 'todoappdb',
      username: 'testuser',
      password: 'password',
      entities: [__dirname + '/**/*.model{.ts,.js}'],
      synchronize: true, // 本番環境ではデータが消える可能性があるので、使用しない方が良い
      logging: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
