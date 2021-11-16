import { Controller, Get, Post } from '@nestjs/common'

@Controller('/messages')
export class MessagesController {

    @Get()
    getAll() {

    }

    @Post()
    create() {

    }

    @Get('/:id')
    getById() {

    }
}
