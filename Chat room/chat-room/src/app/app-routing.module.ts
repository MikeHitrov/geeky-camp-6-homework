import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'sign-in', loadChildren: './page/sign-in/sign-in.module#SignInPageModule' },
  { path: 'sign-up', loadChildren: './page/sign-up/sign-up.module#SignUpPageModule' },
  { path: 'chat-rooms', loadChildren: './chat-rooms/chat-rooms.module#ChatRoomsPageModule' },
  { path: 'chat-rooms', loadChildren: './page/chat-rooms/chat-rooms.module#ChatRoomsPageModule' },
  { path: 'chat-room', loadChildren: './page/chat-room/chat-room.module#ChatRoomPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
