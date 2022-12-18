import { Module } from "@nestjs/common";
import { NotificationRepositoty } from "src/application/repositories/notifications-repository";
import { PrismaService } from "./prisma/prisma.service";
import { PrimasNotificationsRepository } from "./prisma/repositories/prismas-notifications-repository";


@Module({

    providers: [
        PrismaService,
         {
            provide: NotificationRepositoty,
            useClass: PrimasNotificationsRepository,
        } 
],
exports:[
    NotificationRepositoty,
]
})


export class DatabaseModule {
    
}