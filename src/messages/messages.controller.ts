import { Controller, Get, Post, Body, Param } from '@nestjs/common'
import { CreateMessageDto } from './dtos/create-message.dto'


@Controller('/messages')
export class MessagesController {

    @Get()
    getAll() {

    }

    @Post()
    create(@Body() body: CreateMessageDto) {
        console.log(body)
    }

    @Get('/:id')
    getById(@Param('id') id: string) {
        console.log(id)
    }
}
