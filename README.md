<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

# nestjsPrac

```shell
$ sudo npm i -g @nestjs/cli
$ nest new project-name
```

상위폴더에서 nest new project-name 입력. (프로젝트 이름은 카멜케이스)

project-name 폴더가 생성되고 src/ 안에 여러 코어파일이 들어간다.

remote 연결 수동으로 해줘야 함 !

<hr>
app.controller.ts: 하나의 라우트가 있는 기본 컨트롤러

app.controller.spec.ts: 컨트롤러를 위한 유닛 테스트

app.module.ts: 애플리케이션의 루트 모듈

app.service.ts: 단일 메소드를 사용하는 기본 서비스

main.ts: 핵심기능 **NestFactory**를 사용하여 Nest 애플리케이션 인스턴스를 생성하는 애플리케이션의 엔트리 파일

(main.ts 에는 애플리케이션을 부트스트랩하는 비동기 함수가 포함되어 있음)

```ts
// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();
```

Nest 애플리케이션 인스턴스를 만들기 위해 NestFactory 클래스를 사용한다.