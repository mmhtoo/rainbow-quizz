import {NestFactory} from '@nestjs/core'
import {AppModule} from './app.module'
import {ConfigService} from '@nestjs/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  /*
   * getting configuration service
   */
  const configService = app.get(ConfigService)
  const serverPort = configService.getOrThrow<number>('PORT')

  await app.listen(serverPort)
}
bootstrap()
