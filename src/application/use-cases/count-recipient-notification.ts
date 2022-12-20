import { Injectable } from "@nestjs/common";
import { NotificationRepositoty } from "../repositories/notifications-repository";

interface CountRecipientNotificationRequest {
    recipientId: string;
    
}

interface CountRecipientNotificationResponse {
    count:number
}

@Injectable()
export class CountRecipientNotification { 
    constructor(
        private notificationRepository: NotificationRepositoty
    ){

    }
    async execute( request: CountRecipientNotificationRequest): Promise<CountRecipientNotificationResponse>{
        const {  recipientId} = request;


  

       const count =  await this.notificationRepository.countManyByRecipientId(recipientId)

        return {
            count,
        }

    }
}