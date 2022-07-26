import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChatMessageDto } from '../models/chatMessageDto';
import { WebSocketService } from '../services/web-socket.service';

@Component({
  selector: 'cf-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {

  constructor(public webSocketService: WebSocketService) { }
  ngOnDestroy(): void {
    this.webSocketService.closeWebSocket();
  }

  ngOnInit(): void {
    this.webSocketService.openWebSocket();
  }

  // sendMessage(sendMessage: any){
  sendMessage(){
    const chatMessageDto = new ChatMessageDto('Alisson', 'mensagem');
    this.webSocketService.sendMessage(chatMessageDto);
    //reset form

  }

}
