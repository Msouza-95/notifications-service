import { Injectable } from "@nestjs/common/decorators";
import { Notification } from "src/application/entities/notification";
import { NotificationRepositoty } from "src/application/repositories/notifications-repository";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrimasNotificationsRepository implements NotificationRepositoty{
   
   constructor(private prismaServe : PrismaService){}
   
    async create(notification: Notification): Promise<void> {
        await this.prismaServe.notification.create({
            data:{
                id: notification.id,
                category: notification.category,
                content: notification.content.value,
                recipientId: notification.recipientId,
                readAt: notification.readAt,
                createdAt : notification.createdAt
                
            }
        })
    }

}
