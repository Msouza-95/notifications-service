import { Notification } from "../entities/notification";


export abstract class NotificationRepositoty{
   abstract create(notification: Notification):Promise<void>
}