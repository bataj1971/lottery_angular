import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { NumberComponent } from '../../number-panel/number/number.component';
import { GameRoutingModule } from './game-routing.module';
import { NumberPanelComponent } from '../../number-panel/number-panel.component';



@NgModule({
  declarations: [GameComponent, NumberPanelComponent, NumberComponent],
  imports: [CommonModule, GameRoutingModule],
  // this is needed for e2e test, it was broken after setting up lazy loading : 
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GameModule {}
