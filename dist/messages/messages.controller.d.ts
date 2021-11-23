import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';
export declare class MessagesController {
    messagesService: MessagesService;
    constructor(messagesService: MessagesService);
    getAll(): Promise<any>;
    create(body: CreateMessageDto): Promise<void>;
    getById(id: string): Promise<any>;
}
