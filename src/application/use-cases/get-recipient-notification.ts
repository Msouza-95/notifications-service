import { Injectable } from "@nestjs/common";
import { Notification } from "../entities/notification";
import { NotificationRepositoty } from "../repositories/notifications-repository";

interface GetRecipientNotificationRequest {
    recipientId: string;
    
}

interface GetRecipientNotificationResponse {
    notification: Notification[]
}

@Injectable()
export class GetRecipientNotification { 
    constructor(
        private notificationRepository: NotificationRepositoty
    ){

    }
    async execute( request: GetRecipientNotificationRequest): Promise<GetRecipientNotificationResponse>{
        const {  recipientId} = request;


       const notification =  await this.notificationRepository.findManyByRecipientId(recipientId)

        return {
        notification, 
        }

    }
}