import { Injectable } from "@nestjs/common";
import { NotificationRepositoty } from "../repositories/notifications-repository";
import { NotificationNotFound } from "./errors/notification-not-found";

interface readNotificationRequest {
    notificationId: string;
}

type  readNotificationResponse  = void ;

@Injectable()
export class ReadNotification { 
    constructor(
        private notificationRepository: NotificationRepositoty
    ){

    }
    async execute( request: readNotificationRequest): Promise<readNotificationResponse>{
        const {  notificationId} = request;


        const notification =  await this.notificationRepository.findById(notificationId)

        if(!notification){
          throw new NotificationNotFound();
        }
        
        notification.read();

        await this.notificationRepository.save(notification);

    }
}