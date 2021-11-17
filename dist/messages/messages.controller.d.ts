import { CreateMessageDto } from './dtos/create-message.dto';
export declare class MessagesController {
    getAll(): void;
    create(body: CreateMessageDto): void;
    getById(id: string): void;
}
