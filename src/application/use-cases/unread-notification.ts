import { Injectable } from "@nestjs/common";
import { NotificationRepositoty } from "../repositories/notifications-repository";
import { NotificationNotFound } from "./errors/notification-not-found";

interface unreadNotificationRequest {
    notificationId: string;
}

type  unreadNotificationResponse  = void ;

@Injectable()
export class UnreadNotification { 
    constructor(
        private notificationRepository: NotificationRepositoty
    ){

    }
    async execute( request: unreadNotificationRequest): Promise<unreadNotificationResponse>{
        const {  notificationId} = request;


        const notification =  await this.notificationRepository.findById(notificationId)

        if(!notification){
          throw new NotificationNotFound();
        }
        
        notification.unread();

        await this.notificationRepository.save(notification);

    }
}