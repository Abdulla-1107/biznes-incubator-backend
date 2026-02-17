import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { ApplicationModule } from './application/application.module';
import { ServiceModule } from './service/service.module';
import { PartnerModule } from './partner/partner.module';
import { MentorModule } from './mentor/mentor.module';
import { StartupModule } from './startup/startup.module';
import { EventModule } from './event/event.module';
import { ContactModule } from './contact/contact.module';
import { UploadController } from './upload/upload.controller';
import { UploadService } from './upload/upload.service';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [ApplicationModule, ServiceModule, PartnerModule, MentorModule, StartupModule, EventModule, ContactModule, UploadModule],
  controllers: [AppController, UploadController],
  providers: [AppService, PrismaService, UploadService],
})
export class AppModule {}
