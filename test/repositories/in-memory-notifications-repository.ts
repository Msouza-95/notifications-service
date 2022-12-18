import { Notification } from "src/application/entities/notification";
import { NotificationRepositoty } from "src/application/repositories/notifications-repository";


export class InMemoryNotificationRepository  implements NotificationRepositoty{

    public notifications :Notification[] = []; 

    async create(notification: Notification): Promise<void> {
        this.notifications.push(notification);
    }
}