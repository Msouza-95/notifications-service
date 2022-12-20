import { Injectable } from "@nestjs/common/decorators";
import { Notification } from "@application/entities/notification";
import { NotificationRepositoty } from "@application/repositories/notifications-repository";
import { PrismaService } from "../prisma.service";
import { PrismaNotificationMapper } from "../mappers/prisma-notification-mapper";

@Injectable()
export class PrimasNotificationsRepository implements NotificationRepositoty{
   
   constructor(private prismaServe : PrismaService){}
    
    
   
    async create(notification: Notification): Promise<void> {

        const raw = PrismaNotificationMapper.toPrisma(notification);
        await this.prismaServe.notification.create({
            data:raw
        })
    }

    async findById(notificationId: string): Promise<Notification | null> {
        const notification = await this.prismaServe.notification.findUnique({
            where:{
                id: notificationId,
            }
        })

        if(!notification){
            return null;
        }

        return PrismaNotificationMapper.toDomain(notification);
    }
    async  save(notification: Notification): Promise<void> {
        const raw = PrismaNotificationMapper.toPrisma(notification);
        await this.prismaServe.notification.update({
            where:{
                id: raw.id ,
            },
            data :raw
        })
    }

   async countManyByRecipientId(recipientId: string): Promise<number> {
        const count = await this.prismaServe.notification.count({
            where:{
                recipientId,
            }
        })

        return count; 
    }
   async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
        const notifications = await this.prismaServe.notification.findMany({
            where:{
                recipientId,
            }
        })

        return notifications.map(PrismaNotificationMapper.toDomain);
    }
}
