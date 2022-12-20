 
import { makeNotification } from "@test/factories/notification-factory";
import { InMemoryNotificationRepository } from "@test/repositories/in-memory-notifications-repository";
import { CountRecipientNotification } from "./count-recipient-notification";
import { GetRecipientNotification } from "./get-recipient-notification";



describe('Get recipients notification', ()=>{

    it('should be albe to get notification by RecipientId', async ()=>{

        const notificationRepository = new InMemoryNotificationRepository();
        const getRecipientNotification = new GetRecipientNotification(notificationRepository);
        const recipientId = 'recipient-1';
        await notificationRepository.create(
            makeNotification({recipientId}),
        );

        await notificationRepository.create(
            makeNotification({recipientId}),
        );

        await notificationRepository.create(
            makeNotification({recipientId:'recipient-2'}),
        );

        const {notification} = await  getRecipientNotification.execute({
            recipientId,
        });

        expect(notification).toHaveLength(2); // array notification com tamanho 2
        expect(notification).toEqual(
            expect.arrayContaining([
                expect.objectContaining({recipientId}),
                expect.objectContaining({recipientId}),
            ]) // verificar se o array possui exatamente os dois objetos com os id informado
        )
    
    })

    

})