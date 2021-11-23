import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common'
import { CreateMessageDto } from './dtos/create-message.dto'
import { MessagesService } from './messages.service'

@Controller('/messages')
export class MessagesController {


    constructor(public messagesService: MessagesService) {
    }

    @Get()
    getAll() {
        return this.messagesService.findAll()
    }

    @Post()
    create(@Body() body: CreateMessageDto) {
        return this.messagesService.create(body.content)
    }

    @Get('/:id')
    async getById(@Param('id') id: string) {
        const message = await this.messagesService.findOne(id)
        if (!message) {
            throw new NotFoundException('message not found')
        }

        return message
    }
}
